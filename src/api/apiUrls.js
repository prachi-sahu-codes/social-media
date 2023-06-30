const baseURL = "/api";

//auth URL
export const SIGNUP_URL = `${baseURL}/auth/signup`;
export const LOGIN_URL = `${baseURL}/auth/login`;

//users URL

export const USERS_URL = `${baseURL}/users`;
export const EDIT_USER_URL = `${baseURL}/users/edit`;

// post URL

export const POSTS_URL = `${baseURL}/posts`;
export const EDIT_POST_URL = `${baseURL}/posts/edit`;
export const POST_BY_USERNAME_URL = `${baseURL}/posts/user`;
export const LIKE_POST_URL = `${baseURL}/posts/like`;
export const DISLIKE_POST_URL = `${baseURL}/posts/dislike`;

//bookmark URL

export const BOOKMARK_URL = `${baseURL}/users/bookmark`;
export const REMOVE_BOOKMARK_URL = `${baseURL}/users/remove-bookmark`;

//follow-unfollow URL

export const FOLLOW_URL = `${baseURL}/users/follow`;
export const UNFOLLOW_URL = `${baseURL}/users/unfollow`;

//comments URL

export const ALL_COMMENTS_URL = `${baseURL}/comments`;
export const ADD_COMMENT_URL = `${baseURL}/comments/add`;
export const EDIT_COMMENT_URL = `${baseURL}/comments/edit`;
export const DELETE_COMMENT_URL = `${baseURL}/comments/delete`;
