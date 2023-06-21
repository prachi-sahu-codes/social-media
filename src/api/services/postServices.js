import axios from "axios";

import {
  POSTS_URL,
  LIKE_POST_URL,
  DISLIKE_POST_URL,
  BOOKMARK_URL,
  REMOVE_BOOKMARK_URL,
} from "../apiUrls";

export const postsService = () => axios.get(POSTS_URL);

export const likePostService = (postId, token) =>
  axios.post(
    `${LIKE_POST_URL}/${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );

export const dislikePostService = (postId, token) =>
  axios.post(
    `${DISLIKE_POST_URL}/${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );

export const bookmarkService = (postId, token) =>
  axios.post(
    `${BOOKMARK_URL}/${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );

export const removeBookmarkService = (postId, token) =>
  axios.post(
    `${REMOVE_BOOKMARK_URL}/${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
