import React from "react";
import { FiImage } from "react-icons/fi";
import { BsEmojiSunglasses } from "react-icons/bs";
import { usePost } from "../../context/postContext/PostContext";
import { useAuth } from "../../context/authContext/AuthContext";

export const NewPost = () => {
  const { newPostState, newPostDispatch, createPost } = usePost();
  const { loggedUser, notifyToast } = useAuth();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
  };

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
          <div className="relative">
            <FiImage />
            <input
              type="file"
              onChange={handleImageChange}
              className="w-5 h-5 absolute top-0 opacity-0"
            />
          </div>

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
  );
};
