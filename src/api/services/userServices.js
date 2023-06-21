import axios from "axios";

import { USERS_URL, BOOKMARK_URL, REMOVE_BOOKMARK_URL } from "../apiUrls";

export const usersService = () => axios.get(USERS_URL);

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
