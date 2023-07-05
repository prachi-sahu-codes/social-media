import React from "react";
import { useState, useEffect } from "react";
import { usePost } from "../../context/postContext/PostContext";
import { useAuth } from "../../context/authContext/AuthContext";
import { useUser } from "../../context/userContext/UserContext";
import { PostCard } from "../../components/postCard/PostCard";
import { NewPost } from "../../components/newPost/NewPost";
import { lightGray, lightActive, fireGray, fireActive } from "../../assets";

export const Feed = () => {
  const { postData, activeSortBtn, setActiveSortBtn } = usePost();
  const { userData } = useUser();
  const { loggedUser } = useAuth();

  const [filterLoggedUserPost, setFilterLoggedUserPost] = useState([]);

  useEffect(() => {
    const followedUsers = userData?.filter((user) =>
      user.followers.find((person) => person.username === loggedUser.username)
    );

    const gettingUsername = followedUsers?.map((user) => user.username);

    const filteredPost = postData.filter(
      (post) =>
        post.username === loggedUser.username ||
        gettingUsername.includes(post.username)
    );

    setFilterLoggedUserPost(() => filteredPost);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postData, userData]);

  const sortedFeedData =
    activeSortBtn === "latest"
      ? filterLoggedUserPost.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        )
      : filterLoggedUserPost.sort(
          (a, b) => b.likes.likeCount - a.likes.likeCount
        );

  return (
    <div className="w-full pb-14 pt-4 sm670:pt-6 px-6 sm670:pb-5 h-calc-nav overflow-x-hidden overflow-y-scroll bg-slate-100">
      {sortedFeedData.length > 0 && (
        <div className="flex gap-2 pt-4 mb-2 lg:hidden w-64 sm360:w-80 sm450:w-96 sm570:w-30rem md840:w-36rem mx-auto ">
          <button
            onClick={() => setActiveSortBtn(() => "latest")}
            className={`flex justify-center items-center bg-white pr-1 text-lg pt-0.1rem w-full border-2 rounded-md hover:opacity-80 active:opacity-60 ${
              activeSortBtn === "latest"
                ? "border-primary text-primary"
                : "border-lightGray text-mediumGray"
            }`}
          >
            <div>
              {activeSortBtn === "latest" ? (
                <img src={lightActive} className="w-6 h-4" alt="icon" />
              ) : (
                <img src={lightGray} className="w-6 h-4" alt="icon" />
              )}
            </div>
            Latest
          </button>
          <button
            onClick={() => setActiveSortBtn(() => "trending")}
            className={`flex justify-center items-center bg-white text-lg pt-0.1rem w-full border-2 rounded-md hover:opacity-80 active:opacity-60 ${
              activeSortBtn === "trending"
                ? "border-primary text-primary"
                : "border-lightGray text-mediumGray"
            }`}
          >
            <div>
              {activeSortBtn === "trending" ? (
                <img src={fireActive} className="w-4 h-4 mb-1" alt="icon" />
              ) : (
                <img src={fireGray} className="w-4 h-4 mb-1" alt="icon" />
              )}
            </div>
            Trending
          </button>
        </div>
      )}
      <NewPost />
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
          <h1 className="text-center text-lg sm500:text-2xl my-10 max-w-2xl m-auto">
            No posts yet. Start sharing your own creations and follow other
            artists to see their amazing posts!!
          </h1>
        </div>
      )}
    </div>
  );
};
