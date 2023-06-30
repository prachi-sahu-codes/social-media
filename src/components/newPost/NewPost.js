import React, { useState } from "react";
import { useAuth } from "../../context/authContext/AuthContext";
import { PostModal } from "../postModal/PostModal";
import { BsFillPlusSquareFill } from "react-icons/bs";

export const NewPost = () => {
  const [newPostModal, setNewPostModal] = useState(false);
  const { loggedUser } = useAuth();

  return (
    <div
      className="flex flex-col gap-4 max-w-2xl mt-6 mx-auto bg-white shadow-md rounded-lg p-6 "
      onClick={() => setNewPostModal((prev) => !prev)}
    >
      <div className="flex items-center gap-5">
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
        <input
          type="text"
          placeholder={`Share your thoughts...  ${loggedUser?.username}`}
          className="border-none py-2 px-3 w-full outline-none"
          readOnly
        ></input>

        <div className=" hover:opacity-90 active:opacity-80 text-white text-lg rounded-md shadow-md">
          <BsFillPlusSquareFill className="fill-primary w-8 h-8" />
        </div>
      </div>
      {newPostModal && <PostModal setShowPopupPost={setNewPostModal} />}
    </div>
  );
};
