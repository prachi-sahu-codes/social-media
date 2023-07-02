import React, { useState } from "react";
import { MdCancel } from "react-icons/md";
import { avatars } from "./data/data";

export const Avatar = ({ setShowAvatar, setFormDetails }) => {
  const [selectAvatar, setSelectAvatar] = useState("");

  const addAvatarHandler = () => {
    if (selectAvatar) {
      setFormDetails((prev) => ({ ...prev, profileImage: selectAvatar }));
      setShowAvatar(false);
    } else {
      setShowAvatar(false);
    }
  };

  return (
    <div
      className="fixed top-0 left-0 z-50 w-full h-full bg-bgModal"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="absolute p-6 position-center w-80 bg-white rounded-lg">
        <div
          onClick={() => setShowAvatar(false)}
          className="absolute -top-2 -right-2"
        >
          <MdCancel className="w-7 h-7 fill-primary bg-slate-50 rounded-full" />
        </div>
        <h2 className="font-bold text-xl pb-4">Profile Image</h2>
        <ul className=" flex flex-wrap gap-2">
          {avatars.map((pic, index) => (
            <li key={index} onClick={() => setSelectAvatar(pic)}>
              <img
                src={pic}
                alt="profile pic"
                className="w-20 h-20 rounded-full border-2 hover:border-black hover:shadow-lg active:border-primary border-solid border-primary cursor-pointer"
              />
            </li>
          ))}
        </ul>
        <div className="text-right mt-5">
          <button
            className="w-24 py-1 pb-0.15rem border-none bg-primary hover:opacity-90 active:opacity-80 text-white text-lg rounded-full shadow-md"
            onClick={() => addAvatarHandler()}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
