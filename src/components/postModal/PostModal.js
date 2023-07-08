import React, { useState } from "react";
import { FiImage } from "react-icons/fi";
import { BsEmojiSunglasses } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import Picker from "emoji-picker-react";
import { usePost } from "../../context/postContext/PostContext";
import { useAuth } from "../../context/authContext/AuthContext";
import ClickOutside from "../clickOutside/ClickOutside";
import { uploadMedia } from "./utils/uploadApi";

export const PostModal = ({ post, setShowPopupPost }) => {
  const { newPostState, newPostDispatch, createPost, editPost } = usePost();
  const { loggedUser, notifyToast } = useAuth();
  const [media, setMedia] = useState(null);
  const [showEmojis, setShowEmojis] = useState(false);
  const [loadingPost, setLoadingPost] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setMedia(() => file);
    newPostDispatch({
      type: "CONTENT_IMG",
      payload: null,
    });
  };

  const onEmojiClick = (emojiObj) => {
    const selectedEmoji = emojiObj.emoji;
    newPostDispatch({ type: "ADD_EMOJI", payload: selectedEmoji });
  };

  const addPostHandler = async () => {
    if (newPostState.content.length > 0) {
      newPostState.profileImage = loggedUser?.profileImage
        ? loggedUser?.profileImage
        : "https://i.imgur.com/qMW3Cze.png";

      try {
        if (post) {
          if (media) {
            setLoadingPost(true);
            const response = await uploadMedia(media);
            editPost(post._id, { ...newPostState, contentImage: response.url });
            newPostDispatch({ type: "CLEAR" });
            setMedia(null);
          } else {
            editPost(post._id, newPostState);
            newPostDispatch({ type: "CLEAR" });
            setMedia(null);
          }
        } else {
          setLoadingPost(true);
          const response = await uploadMedia(media);
          createPost({ ...newPostState, contentImage: response.url });
          newPostDispatch({ type: "CLEAR" });
          setMedia(null);
        }
      } catch (e) {
        console.log(e);
      } finally {
        setLoadingPost(false);
        setShowPopupPost(false);
      }
    } else {
      notifyToast("error", "Please add content to post!");
    }
  };

  return (
    <div
      className="fixed top-0 left-0 z-50 w-full h-full bg-bgModal"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="absolute position-center w-72 sm390:w-80 sm570:w-96 md840:w-30rem">
        <div className="relative flex flex-col gap-4 mx-auto bg-white dark:bg-black shadow-md rounded-lg p-6 ">
          <div
            onClick={() => {
              setShowPopupPost(false);
              newPostDispatch({ type: "CLEAR" });
              setMedia(null);
            }}
            className="absolute -top-2 -right-2"
          >
            <MdCancel className="w-7 h-7 fill-primary bg-slate-50 dark:bg-black rounded-full" />
          </div>
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
                className="w-12 h-12 rounded-full border-2 border-solid border-primary bg-white dark:bg-black cursor-pointer"
              />
            )}
            <textarea
              type="text"
              placeholder="Share your thoughts..."
              className="border-none py-2 px-3 h-24 dark:bg-blackLightBg text-black dark:text-white"
              rows="3"
              value={newPostState.content}
              onChange={(e) => {
                newPostDispatch({ type: "CONTENT", payload: e.target.value });
                e.stopPropagation();
              }}
            ></textarea>
          </div>

          {newPostState.contentImage && (
            <div className="relative">
              <img
                src={newPostState.contentImage}
                alt="post pic"
                className="w-28"
              />

              <div
                onClick={() =>
                  newPostDispatch({ type: "CONTENT_IMG", payload: null })
                }
                className="absolute -top-2 left-24"
              >
                <MdCancel className="w-6 h-6 fill-primary bg-slate-50 dark:bg-black rounded-full" />
              </div>
            </div>
          )}

          <div>
            {media && (
              <div className="relative">
                {media.type.slice(0, 5) === "image" ? (
                  <img
                    src={URL.createObjectURL(media)}
                    alt="post pic"
                    className="w-28"
                  />
                ) : media.type.slice(0, 5) === "video" ? (
                  <video>
                    <source src={URL.createObjectURL(media)} />
                  </video>
                ) : null}
                <div
                  onClick={() => setMedia(null)}
                  className="absolute -top-2 left-24"
                >
                  <MdCancel className="w-6 h-6 fill-primary bg-slate-50 dark:bg-blackLightBg rounded-full" />
                </div>
              </div>
            )}
          </div>

          <hr className="text-bgColorLoad" />

          <div className="flex items-center justify-between">
            <div className="flex gap-4 md:gap-6 text-xl">
              <div className="relative">
                <FiImage />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-5 h-5 absolute top-0 opacity-0"
                />
              </div>
              <div className="relative">
                <BsEmojiSunglasses
                  onClick={(e) => {
                    setShowEmojis((prev) => !prev);
                    e.stopPropagation();
                  }}
                />
                {showEmojis && (
                  <ClickOutside
                    onClickOutside={() => setShowEmojis(() => false)}
                  >
                    <div className="absolute left-6 -top-10">
                      <Picker
                        onEmojiClick={onEmojiClick}
                        height={400}
                        width={300}
                      />
                    </div>
                  </ClickOutside>
                )}
              </div>
            </div>
            <button
              className="w-24 py-1 pb-0.15rem border-none bg-primary hover:opacity-90 active:opacity-80 text-white text-lg rounded-full shadow-md"
              onClick={() => addPostHandler()}
              disabled={loadingPost}
            >
              {loadingPost ? "Posting..." : "Post"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
