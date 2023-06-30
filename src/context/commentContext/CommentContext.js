import { createContext, useContext } from "react";
import { addCommentService } from "../../api/services/commentServices";
import { useAuth } from "../authContext/AuthContext";
import { useState } from "react";
import { usePost } from "../postContext/PostContext";

const CommentContext = createContext();

export const CommentProvider = ({ children }) => {
  const { token } = useAuth();
  const { setPostData } = usePost();
  const [newComment, setNewComment] = useState("");

  const addComment = async (postId, commentData) => {
    try {
      const res = await addCommentService(postId, commentData, token);
      console.log(res);
      if (res.status === 201) {
        setPostData(res.data.posts);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CommentContext.Provider value={{ newComment, setNewComment, addComment }}>
      {children}
    </CommentContext.Provider>
  );
};

export const useComment = () => useContext(CommentContext);
