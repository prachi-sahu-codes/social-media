import axios from "axios";

import {
  ALL_COMMENTS_URL,
  ADD_COMMENT_URL,
  EDIT_COMMENT_URL,
  DELETE_COMMENT_URL,
} from "../apiUrls";

export const getAllCommentsService = (postId) =>
  axios.get(`${ALL_COMMENTS_URL}/${postId}`);

export const addCommentService = (postId, commentData, token) =>
  axios.post(
    `${ADD_COMMENT_URL}/${postId}`,
    { commentData },
    {
      headers: {
        authorization: token,
      },
    }
  );

export const editCommentService = (postId, commentId, commentData, token) =>
  axios.post(
    `${EDIT_COMMENT_URL}/${postId}/${commentId}`,
    { commentData },
    {
      headers: {
        authorization: token,
      },
    }
  );

export const deleteCommentService = (postId, commentId, commentData, token) =>
  axios.post(
    `${DELETE_COMMENT_URL}/${postId}/${commentId}`,
    { commentData },
    {
      headers: {
        authorization: token,
      },
    }
  );
