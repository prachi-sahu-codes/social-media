import { Response } from "miragejs";
import { formatDate, requiresAuth } from "../utils/authUtils";
import { v4 as uuid } from "uuid";

/**
 * All the routes related to post comments are present here.
 * */

/**
 * This handler handles getting all comments for a particular post in the db.
 * send GET Request at /api/comments/:postId
 * */

export const getPostCommentsHandler = function (schema, request) {
  const postId = request.params.postId;
  try {
    const post = schema.posts.findBy({ _id: postId }).attrs;
    return new Response(200, {}, { comments: post.comments });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles adding a comment to a particular post in the db.
 * send POST Request at /api/comments/add/:postId
 * */

export const addPostCommentHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
      return new Response(
        404,
        {},
        {
          errors: [
            "The username you entered is not Registered. Not Found error",
          ],
        }
      );
    }
    const { postId } = request.params;
    const { commentData } = JSON.parse(request.requestBody);

    const comment = {
      _id: uuid(),
      ...commentData,
      user: user,
      replies: [],
      votes: { upvotedBy: [], downvotedBy: [] },
      createdAt: formatDate(),
      updatedAt: formatDate(),
    };
    const post = schema.posts.findBy({ _id: postId }).attrs;
    post.comments.push(comment);
    this.db.posts.update({ _id: postId }, post);
    return new Response(201, {}, { posts: this.db.posts });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles editing a comment to a particular post in the db.
 * send POST Request at /api/comments/edit/:postId/:commentId
 * */

export const editPostCommentHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
      return new Response(
        404,
        {},
        {
          errors: [
            "The username you entered is not Registered. Not Found error",
          ],
        }
      );
    }
    const { postId, commentId } = request.params;
    const { commentData } = JSON.parse(request.requestBody);
    const post = schema.posts.findBy({ _id: postId }).attrs;
    const commentIndex = post.comments.findIndex(
      (comment) => comment._id === commentId
    );

    post.comments[commentIndex] = {
      ...post.comments[commentIndex],
      ...commentData,
      updatedAt: formatDate(),
    };

    this.db.posts.update({ _id: postId }, post);
    return new Response(201, {}, { posts: this.db.posts });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles deleting a comment to a particular post in the db.
 * send DELETE Request at /api/comments/delete/:postId/:commentId
 * */

export const deletePostCommentHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
      return new Response(
        404,
        {},
        {
          errors: [
            "The username you entered is not Registered. Not Found error",
          ],
        }
      );
    }
    const { postId, commentId } = request.params;
    const post = schema.posts.findBy({ _id: postId }).attrs;

    post.comments = post.comments.filter(
      (comment) => comment._id !== commentId
    );
    this.db.posts.update({ _id: postId }, post);
    return new Response(201, {}, { posts: this.db.posts });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles upvoting a comment of a post in the db.
 * send POST Request at /api/comments/upvote/:postId/:commentId
 * */

export const upvotePostCommentHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
      return new Response(
        404,
        {},
        {
          errors: [
            "The username you entered is not Registered. Not Found error",
          ],
        }
      );
    }
    const { postId, commentId } = request.params;
    const post = schema.posts.findBy({ _id: postId }).attrs;

    const commentIndex = post.comments.findIndex(
      (comment) => comment._id === commentId
    );
    if (
      post.comments[commentIndex].votes.upvotedBy.some(
        (us) => us._id === user._id
      )
    ) {
      post.comments[commentIndex].votes.upvotedBy = post.comments[
        commentIndex
      ].votes.upvotedBy.filter((us) => us._id !== user._id);
    } else {
      post.comments[commentIndex].votes.downvotedBy = post.comments[
        commentIndex
      ].votes.downvotedBy.filter((us) => us._id !== user._id);
      post.comments[commentIndex].votes.upvotedBy.push(user);
    }
    this.db.posts.update({ _id: postId }, { ...post, updatedAt: formatDate() });
    return new Response(201, {}, { posts: this.db.posts });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles downvoting a comment of a post in the db.
 * send POST Request at /api/comments/downvote/:postId/:commentId
 * */

export const downvotePostCommentHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
      return new Response(
        404,
        {},
        {
          errors: [
            "The username you entered is not Registered. Not Found error",
          ],
        }
      );
    }
    const { postId, commentId } = request.params;
    const post = schema.posts.findBy({ _id: postId }).attrs;
    const commentIndex = post.comments.findIndex(
      (comment) => comment._id === commentId
    );

    if (
      post.comments[commentIndex].votes.downvotedBy.some(
        (us) => us._id === user._id
      )
    ) {
      post.comments[commentIndex].votes.downvotedBy = post.comments[
        commentIndex
      ].votes.downvotedBy.filter((us) => us._id !== user._id);
      // return new Response(
      //   400,
      //   {},
      //   { errors: ["Cannot downvote a post that is already downvoted. "] }
      // );
    } else {
      post.comments[commentIndex].votes.upvotedBy = post.comments[
        commentIndex
      ].votes.upvotedBy.filter((us) => us._id !== user._id);
      post.comments[commentIndex].votes.downvotedBy.push(user);
    }
    this.db.posts.update({ _id: postId }, { ...post, updatedAt: formatDate() });
    return new Response(201, {}, { posts: this.db.posts });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
