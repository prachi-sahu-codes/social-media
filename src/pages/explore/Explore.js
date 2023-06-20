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
    <div className="w-full py-7 px-6 h-calc-nav overflow-x-hidden overflow-y-scroll bg-slate-50">
      <div className=" px-6 max-w-2xl mx-auto text-right">
        <button>Trending</button>
        <button className="">Latest</button>
      </div>
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
