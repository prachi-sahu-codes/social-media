import { createContext, useContext, useEffect, useState } from "react";
import { usePost } from "../postContext/PostContext";
import { useAuth } from "../authContext/AuthContext";
import {
  usersService,
  getBookmarksService,
  bookmarkService,
  removeBookmarkService,
} from "../../api/services/userServices";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { token } = useAuth();
  const { setLoading } = usePost();
  const [userData, setUserData] = useState([]);

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
    getUserData();
    getAllBookmarks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  return (
    <UserContext.Provider
      value={{
        userData,
        bookmarkPost,
        removeBookmark,
        bookmarkArr,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
