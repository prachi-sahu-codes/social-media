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
    <div className="w-full px-6 pb-14 pt-4 sm670:pt-6 sm670:pb-5 h-calc-nav overflow-x-hidden overflow-y-scroll bg-slate-100 dark:bg-blackLightBg">
      {favoritesPost.length !== 0 ? (
        <ul>
          {favoritesPost.map((post) => (
            <li key={post._id}>
              <PostCard post={post} lessContent />
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-col items-center justify-center gap-10 py-7">
          <img
            src={likingNow}
            alt="girl posting"
            className="px-7 mt-12 sm390:w-80"
          />
          <h1 className="text-center text-lg sm500:text-2xl my-10 mt-6 max-w-2xl m-auto text-black dark:text-white">
            No favorites yet. Start saving posts that inspire you!!
          </h1>
        </div>
      )}
    </div>
  );
};
