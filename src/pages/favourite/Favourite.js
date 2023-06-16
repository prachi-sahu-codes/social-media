import React from "react";
import { usePost } from "../../context/postContext/PostContext";
import { likingNow } from "../../assets";
import { useAuth } from "../../context/authContext/AuthContext";
import { PostCard } from "../../components/postCard/PostCard";

export const Favourite = () => {
  const { postData } = usePost();
  const { loggedUser } = useAuth();

  const favoritesPost = postData.filter((post) =>
    post.likes.likedBy.some((person) => person.username === loggedUser.username)
  );

  return (
    <div className="w-full py-7 px-6 h-calc-nav overflow-x-hidden overflow-y-scroll bg-slate-50">
      {favoritesPost.length !== 0 ? (
        <ul>
          {favoritesPost.map((post) => (
            <li key={post._id}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-col items-center justify-center gap-10 py-7">
          <img src={likingNow} alt="girl posting" className="w-96" />
          <h1 className="text-xl font-semibold max-w-2xl text-center">
            No favorites yet. Start saving posts that inspire you!!
          </h1>
        </div>
      )}
    </div>
  );
};
