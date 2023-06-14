import { createContext, useContext, useEffect, useState } from "react";

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPostData = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/posts");
      const dataFetched = await res.json();

      if (res.status === 200) {
        setPostData(dataFetched?.posts);
        setTimeout(() => setLoading(false), 1000);
      }
    } catch (e) {
      console.log("Error:", e);
      setLoading(false);
    }
  };

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <PostContext.Provider value={{ loading, setLoading, postData }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePost = () => useContext(PostContext);
