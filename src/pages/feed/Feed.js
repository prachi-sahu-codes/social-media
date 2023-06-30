import React from "react";
import { useState, useEffect } from "react";
import { usePost } from "../../context/postContext/PostContext";
import { useAuth } from "../../context/authContext/AuthContext";
import { useUser } from "../../context/userContext/UserContext";
import { PostCard } from "../../components/postCard/PostCard";
import { NewPost } from "../../components/newPost/NewPost";

export const Feed = () => {
  const { postData, activeSortBtn } = usePost();
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
    <div className="w-full pb-14 pt-4 sm670:pt-6 px-6 sm670:pb-5 h-calc-nav overflow-x-hidden overflow-y-scroll bg-slate-50">
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
