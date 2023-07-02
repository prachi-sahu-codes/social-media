import { createContext, useContext } from "react";
import {
  addCommentService,
  editCommentService,
  deleteCommentService,
} from "../../api/services/commentServices";
import { useAuth } from "../authContext/AuthContext";
import { usePost } from "../postContext/PostContext";

const CommentContext = createContext();

export const CommentProvider = ({ children }) => {
  const { token } = useAuth();
  const { setPostData } = usePost();

  const addComment = async (postId, commentData) => {
    try {
      const res = await addCommentService(postId, commentData, token);
      if (res.status === 201) {
        setPostData(res.data.posts);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const editComment = async (postId, commentId, commentData) => {
    try {
      const res = await editCommentService(
        postId,
        commentId,
        commentData,
        token
      );
      if (res.status === 201) {
        setPostData(res.data.posts);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteComment = async (postId, commentId) => {
    try {
      const res = await deleteCommentService(postId, commentId, token);
      console.log(res);
      if (res.status === 201) {
        setPostData(res.data.posts);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CommentContext.Provider
      value={{
        addComment,
        editComment,
        deleteComment,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};

export const useComment = () => useContext(CommentContext);
