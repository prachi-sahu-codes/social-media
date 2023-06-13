import { createContext, useContext } from "react";

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  return <PostContext.Provider value={{}}>{children}</PostContext.Provider>;
};

export const usePost = () => useContext(PostContext);