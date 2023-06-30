import { createContext, useContext } from "react";

const CommentContext = createContext();

export const CommentProvider = ({ children }) => {
  return (
    <CommentContext.Provider value={{}}>{children}</CommentContext.Provider>
  );
};

export const useComment = () => useContext(CommentContext);
