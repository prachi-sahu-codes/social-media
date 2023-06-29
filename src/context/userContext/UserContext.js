import { createContext, useContext, useEffect, useState } from "react";
import { usePost } from "../postContext/PostContext";
import { useAuth } from "../authContext/AuthContext";
import {
  usersService,
  userDetailService,
  editProfileService,
  getBookmarksService,
  bookmarkService,
  removeBookmarkService,
  followUserService,
  unfollowUserService,
} from "../../api/services/userServices";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { token } = useAuth();
  const { setLoading } = usePost();
  const [userData, setUserData] = useState([]);
  const [userDetail, setUserDetail] = useState({});
  const [bookmarkArr, setBookmarkArr] = useState([]);

  const getUserData = async () => {
    try {
      setLoading(true);
      const res = await usersService();

      if (res.status === 200) {
        setUserData(res.data?.users);
        setLoading(false);
      }
    } catch (e) {
      console.log("Error:", e);
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUserDetail = async (username) => {
    try {
      const res = await userDetailService(username);
      if (res.status === 200) {
        setUserDetail(res?.data?.user);
      }
    } catch (e) {
      console.log("Error:", e?.message);
    }
  };

  const editProfile = async (userData) => {
    try {
      const res = await editProfileService(userData, token);
      if (res.status === 201) {
        setUserDetail(res?.data?.user);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getAllBookmarks = async () => {
    try {
      setLoading(true);
      const res = await getBookmarksService(token);

      if (res.status === 200) {
        setBookmarkArr(() => res?.data?.bookmarks);
        setLoading(false);
      }
    } catch (e) {
      console.log("Error:", e?.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      getAllBookmarks();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const bookmarkPost = async (postId) => {
    try {
      const res = await bookmarkService(postId, token);
      if (res.status === 200 || res.status === 201) {
        setBookmarkArr(() => res?.data?.bookmarks);
      }
    } catch (e) {
      console.log("Error:", e?.message);
    }
  };

  const removeBookmark = async (postId) => {
    try {
      const res = await removeBookmarkService(postId, token);
      if (res.status === 200 || res.status === 201) {
        setBookmarkArr(() => res?.data?.bookmarks);
      }
    } catch (e) {
      console.log("Error:", e?.message);
    }
  };

  const followUser = async (userId) => {
    try {
      const res = await followUserService(userId, token);

      if (res.status === 200) {
        const updatedData = userData.map((user) =>
          user._id === userId ? res.data.followUser : user
        );
        setUserData(updatedData);
      }
    } catch (e) {
      console.log("Error:", e?.message);
    }
  };

  const unfollowUser = async (userId) => {
    try {
      const res = await unfollowUserService(userId, token);

      if (res.status === 200) {
        const updatedData = userData.map((user) =>
          user._id === userId ? res.data.followUser : user
        );
        setUserData(updatedData);
      }
    } catch (e) {
      console.log("Error:", e?.message);
    }
  };

  return (
    <UserContext.Provider
      value={{
        userData,
        userDetail,
        editProfile,
        getUserDetail,
        bookmarkPost,
        removeBookmark,
        bookmarkArr,
        followUser,
        unfollowUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
