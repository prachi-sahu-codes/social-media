import React from "react";
import { usePost } from "../../context/postContext/PostContext";
import { PostCard } from "../../components/postCard/PostCard";

export const Explore = () => {
  const { postData } = usePost();

  return (
    <div className="w-full py-7 px-6 h-calc-nav overflow-x-hidden overflow-y-scroll">
      <ul>
        {postData.map((post) => (
          <li>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};
