import axios from "axios";

import {
  USERS_URL,
  EDIT_USER_URL,
  BOOKMARK_URL,
  REMOVE_BOOKMARK_URL,
  FOLLOW_URL,
  UNFOLLOW_URL,
} from "../apiUrls";

export const usersService = () => axios.get(USERS_URL);

export const userDetailService = (username) =>
  axios.get(`${USERS_URL}/${username}`);

export const editProfileService = (userData, token) =>
  axios.post(
    EDIT_USER_URL,
    { userData },
    { headers: { authorization: token } }
  );

export const getBookmarksService = (token) =>
  axios.get(BOOKMARK_URL, {
    headers: {
      authorization: token,
    },
  });

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

export const followUserService = (userId, token) =>
  axios.post(
    `${FOLLOW_URL}/${userId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );

export const unfollowUserService = (userId, token) =>
  axios.post(
    `${UNFOLLOW_URL}/${userId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
