import React from "react";
import { usePost } from "../../context/postContext/PostContext";
import { PostCard } from "../../components/postCard/PostCard";

export const Explore = () => {
  const { postData } = usePost();

  return (
    <div className="w-full py-7 px-6 h-calc-nav overflow-x-hidden overflow-y-scroll bg-slate-50">
      <ul>
        {postData.map((post) => (
          <li key={post._id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};
