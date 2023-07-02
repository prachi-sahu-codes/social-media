import React, { useState } from "react";
import { useAuth } from "../../context/authContext/AuthContext";
import { PostModal } from "../postModal/PostModal";
import { BsFillPlusSquareFill } from "react-icons/bs";

export const NewPost = () => {
  const [newPostModal, setNewPostModal] = useState(false);
  const { loggedUser } = useAuth();

  return (
    <div
      className="flex flex-col gap-4 p-3 sm570:p-6 w-64 sm450:w-96 sm570:w-30rem md840:w-36rem lg:w-30rem lg1120:w-36rem mt-6 mx-auto bg-white shadow-md rounded-lg"
      onClick={() => setNewPostModal((prev) => !prev)}
    >
      <div className="flex items-center gap-1 sm500:gap-5 ">
        {loggedUser?.profileImage ? (
          <img
            src={loggedUser?.profileImage}
            alt="profile pic"
            className="hidden sm450:block w-8 h-8 sm500:h-12 sm500:w-12 rounded-full border-2 border-solid border-primary cursor-pointer"
          />
        ) : (
          <img
            src="https://i.imgur.com/qMW3Cze.png"
            alt="profile pic"
            className="hidden sm450:block w-8 h-8 sm500:h-12 sm500:w-12 rounded-full border-2 border-solid border-primary cursor-pointer"
          />
        )}
        <input
          type="text"
          placeholder={`Share your thoughts...  ${loggedUser?.username}`}
          className="border-none py-2 text-xs sm450:text-sm sm570:text-base sm570:px-3 w-full outline-none"
          readOnly
        ></input>

        <div className=" hover:opacity-90 active:opacity-80 text-white text-lg rounded-md shadow-md">
          <BsFillPlusSquareFill className="fill-primary w-6 h-6 sm500:w-8 sm500:h-8" />
        </div>
      </div>
      {newPostModal && <PostModal setShowPopupPost={setNewPostModal} />}
    </div>
  );
};
