import React from "react";
import { usePost } from "../../context/postContext/PostContext";
import { PostCard } from "../../components/postCard/PostCard";
import { useAuth } from "../../context/authContext/AuthContext";

export const Explore = () => {
  const { postData } = usePost();
  const { loggedUser } = useAuth();
  const filterLoggedUserPost = postData.filter(
    (post) => post.username !== loggedUser.username
  );

  return (
    <div className="w-full px-6 pb-14 pt-4 sm670:pt-6 sm670:pb-5 h-calc-nav overflow-x-hidden overflow-y-scroll bg-slate-50">
      <ul>
        {filterLoggedUserPost.map((post) => (
          <li key={post._id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};
