import { createContext, useContext, useEffect, useState } from "react";
import {
  postsService,
  likePostService,
  dislikePostService,
} from "../../api/services/postServices";
import { useAuth } from "../authContext/AuthContext";

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const { token } = useAuth();
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPostData = async () => {
    try {
      setLoading(true);
      const res = await postsService();
      if (res.status === 200) {
        setPostData(res.data?.posts);
        setTimeout(() => setLoading(false), 1000);
      }
    } catch (e) {
      console.log(e.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getPostData();
  }, []);

  const likePost = async (postId) => {
    try {
      const res = await likePostService(postId, token);
      setPostData(res.data.posts);
    } catch (e) {
      console.log(e.message);
    }
  };

  const dislikePost = async (postId) => {
    try {
      const res = await dislikePostService(postId, token);
      setPostData(res.data.posts);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <PostContext.Provider
      value={{ loading, setLoading, postData, likePost, dislikePost }}
    >
      {children}
    </PostContext.Provider>
  );
};

export const usePost = () => useContext(PostContext);
