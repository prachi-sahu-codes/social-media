import React from "react";
import { usePost } from "../../context/postContext/PostContext";
export const Feed = () => {
  const { postData } = usePost();
  return (
    <div className="w-full py-7 px-6 h-calc-nav overflow-x-hidden overflow-y-scroll">
      <ul>
        {postData.map((post) => (
          <li>{post.content}</li>
        ))}
      </ul>
    </div>
  );
};
