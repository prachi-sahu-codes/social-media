import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  postsService,
  createPostService,
  deletePostService,
  postDetailService,
  postByUsernameService,
  likePostService,
  dislikePostService,
} from "../../api/services/postServices";
import { useAuth } from "../authContext/AuthContext";
import { newPostReducerFunc } from "../../reducer";
import { useLocation } from "react-router-dom";

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const location = useLocation();
  const { token, notifyToast } = useAuth();
  const [postData, setPostData] = useState([]);
  const [postDetail, setPostDetail] = useState([]);
  const [singleUserPosts, setSingleUserPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeSortBtn, setActiveSortBtn] = useState("latest");

  const [newPostState, newPostDispatch] = useReducer(newPostReducerFunc, {
    content: "",
    contentImage: "",
    profileImage: "",
  });

  const getPostData = async () => {
    try {
      setLoading(true);
      const res = await postsService();
      if (res.status === 200) {
        setPostData(res.data?.posts);
        setTimeout(() => setLoading(false), 1000);
      }
    } catch (e) {
      console.log("Error:", e?.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      getPostData();
    }
  }, [token]);

  const getPostDetail = async (postId) => {
    try {
      const res = await postDetailService(postId);
      if (res.status === 200) {
        setPostDetail(() => res?.data?.post);
      }
    } catch (e) {
      console.log("Error:", e?.message);
    }
  };

  const getPostByUsername = async (username) => {
    try {
      setLoading(true);
      const res = await postByUsernameService(username);
      if (res.status === 200) {
        setSingleUserPosts(() => res?.data?.posts);
        setLoading(false);
      }
    } catch (e) {
      console.log("Error:", e?.message);
      setLoading(false);
    }
  };

  const likePost = async (postId) => {
    try {
      const res = await likePostService(postId, token);
      if (res.status === 200 || res.status === 201) {
        setPostData(() => res?.data?.posts);
      }
    } catch (e) {
      console.log("Error:", e?.message);
    }
  };

  const dislikePost = async (postId) => {
    try {
      const res = await dislikePostService(postId, token);
      if (res.status === 200 || res.status === 201) {
        setPostData(() => res?.data?.posts);
      }
    } catch (e) {
      console.log("Error:", e?.message);
    }
  };

  const createPost = async (input) => {
    try {
      const res = await createPostService(input, token);
      if (res.status === 200 || res.status === 201) {
        setPostData(() => res?.data?.posts);
        notifyToast("success", "Post shared successfully!!");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const deletePost = async (postId) => {
    try {
      const res = await deletePostService(postId, token);
      if (res.status === 200 || res.status === 201) {
        setPostData(() => res?.data?.posts);
        if (location.pathname === `/posts/${postId}`) {
          window.history.back();
        }
        notifyToast("success", "Post deleted successfully!!");
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (location.pathname !== "/feed") {
      newPostDispatch({ type: "CLEAR" });
    }
  }, [location.pathname]);

  return (
    <PostContext.Provider
      value={{
        loading,
        setLoading,
        newPostState,
        newPostDispatch,
        activeSortBtn,
        setActiveSortBtn,
        postData,
        postDetail,
        getPostDetail,
        singleUserPosts,
        getPostByUsername,
        likePost,
        dislikePost,
        createPost,
        deletePost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export const usePost = () => useContext(PostContext);
