import axios from "axios";

import {
  POSTS_URL,
  POST_BY_USERNAME_URL,
  LIKE_POST_URL,
  DISLIKE_POST_URL,
} from "../apiUrls";

export const postsService = () => axios.get(POSTS_URL);

export const postDetailService = (postId) =>
  axios.get(`${POSTS_URL}/${postId}`);

//to be checked
export const createPostService = (postData, token) =>
  axios.post(
    POSTS_URL,
    { postData },
    {
      headers: {
        authorization: token,
      },
    }
  );

//
export const postByUsernameService = (username) =>
  axios.get(`${POST_BY_USERNAME_URL}/${username}`);

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
