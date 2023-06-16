import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPostData = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/posts");
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

  return (
    <PostContext.Provider value={{ loading, setLoading, postData }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePost = () => useContext(PostContext);
