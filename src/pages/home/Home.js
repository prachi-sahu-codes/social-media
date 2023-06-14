import React from "react";
import { usePost } from "../../context/postContext/PostContext";
export const Home = () => {
  const { postData } = usePost();
  return (
    <div className="w-full py-7 px-6">
      <ul>
        {postData.map((post) => (
          <li>{post.content}</li>
        ))}
      </ul>
    </div>
  );
};
