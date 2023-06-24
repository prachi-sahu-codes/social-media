import React from "react";
import { useState, useEffect } from "react";
import { FiImage } from "react-icons/fi";
import { BsEmojiSunglasses } from "react-icons/bs";
import { usePost } from "../../context/postContext/PostContext";
import { useAuth } from "../../context/authContext/AuthContext";
import { useUser } from "../../context/userContext/UserContext";
import { PostCard } from "../../components/postCard/PostCard";

export const Feed = () => {
  const { postData, activeSortBtn, newPostState, newPostDispatch, createPost } =
    usePost();
  const { userData } = useUser();
  const { loggedUser, notifyToast } = useAuth();

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
  }, [postData]);

  const sortedFeedData =
    activeSortBtn === "latest"
      ? filterLoggedUserPost.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        )
      : filterLoggedUserPost.sort(
          (a, b) => b.likes.likeCount - a.likes.likeCount
        );

  const addPostHandler = () => {
    if (newPostState.content.length > 0) {
      newPostState.profileImage = loggedUser?.profileImage
        ? loggedUser?.profileImage
        : "https://i.imgur.com/qMW3Cze.png";

      createPost(newPostState);
      newPostDispatch({ type: "CLEAR" });
    } else {
      notifyToast("error", "Please add content to post!");
    }
  };

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
            value={newPostState.content}
            onChange={(e) =>
              newPostDispatch({ type: "CONTENT", payload: e.target.value })
            }
          ></textarea>
        </div>

        <hr className="text-bgColorLoad" />

        <div className="flex items-center justify-between ">
          <div className="flex gap-4 md:gap-6 text-xl">
            <FiImage />
            <BsEmojiSunglasses />
          </div>
          <button
            className="w-24 py-1 pb-0.15rem border-none bg-primary hover:opacity-90 active:opacity-80 text-white text-lg rounded-full shadow-md"
            onClick={() => addPostHandler()}
          >
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
