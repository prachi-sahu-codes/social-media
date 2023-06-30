import { createContext, useContext } from "react";
import { addCommentService } from "../../api/services/commentServices";
import { useAuth } from "../authContext/AuthContext";
import { useState } from "react";

const CommentContext = createContext();

export const CommentProvider = ({ children }) => {
  const { token } = useAuth();
  const [newComment, setNewComment] = useState({ text: "" });

  const addComment = async (postId, commentData) => {
    try {
      const res = await addCommentService(postId, commentData, token);
      console.log(res);
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
