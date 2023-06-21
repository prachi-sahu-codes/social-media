import React from "react";
import { usePost } from "../../context/postContext/PostContext";
import { PostCard } from "../../components/postCard/PostCard";
import { useAuth } from "../../context/authContext/AuthContext";
import { FiImage } from "react-icons/fi";
import { BsEmojiSunglasses } from "react-icons/bs";

export const Feed = () => {
  const { postData, activeSortBtn } = usePost();
  const { loggedUser } = useAuth();

  const loggedUserFollowers = loggedUser.followers.map(
    (person) => person.username
  );

  const filterLoggedUserPost = postData.filter(
    (post) =>
      post.username === loggedUser.username ||
      loggedUserFollowers.includes(post.username)
  );

  const sortedFeedData =
    activeSortBtn === "latest"
      ? filterLoggedUserPost.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        )
      : filterLoggedUserPost.sort(
          (a, b) => b.likes.likeCount - a.likes.likeCount
        );

  return (
    <div className="w-full py-7 px-6 h-calc-nav overflow-x-hidden overflow-y-scroll bg-slate-50">
      <div className="flex flex-col gap-4 max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6 ">
        <div className="flex gap-3">
          {loggedUser?.profileImage ? (
            <img
              src={loggedUser?.profileImage}
              alt="profile pic"
              className="w-12 h-12 rounded-full border-2 border-solid border-primary cursor-pointer"
            />
          ) : (
            <img
              src="https://i.imgur.com/qMW3Cze.png"
              alt="profile pic"
              className="w-12 h-12 rounded-full border-2 border-solid border-primary cursor-pointer"
            />
          )}
          <textarea
            type="text"
            placeholder="Share your thoughts..."
            className="border-none py-2 px-3 h-24"
            rows="3"
          ></textarea>
        </div>

        <hr className="text-bgColorLoad" />

        <div className="flex items-center justify-between ">
          <div className="flex gap-4 md:gap-6 text-xl">
            <FiImage />
            <BsEmojiSunglasses />
          </div>
          <button className="w-28 border-2 text-xl py-1 bg-primary hover:opacity-90 active:opacity-80 text-white rounded-full shadow-md border-none">
            Post
          </button>
        </div>
      </div>
      {sortedFeedData.length !== 0 ? (
        <ul>
          {sortedFeedData.map((post) => (
            <li key={post._id}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="py-5">
          <h1 className="text-center text-2xl my-10 max-w-2xl m-auto">
            No posts yet. Start sharing your own creations and follow other
            artists to see their amazing posts!!
          </h1>
        </div>
      )}
    </div>
  );
};
