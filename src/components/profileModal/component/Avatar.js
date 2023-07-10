import React, { useState } from "react";
import { MdCancel } from "react-icons/md";
import { avatars } from "./data/data";

export const Avatar = ({ setShowAvatar, setFormDetails, setMedia }) => {
  const [selectAvatar, setSelectAvatar] = useState("");

  const addAvatarHandler = () => {
    if (selectAvatar) {
      setFormDetails((prev) => ({ ...prev, profileImage: selectAvatar }));
      setShowAvatar(false);
    } else {
      setShowAvatar(false);
    }
  };

  const handleImageChange = (e) => {
    setFormDetails((prev) => ({
      ...prev,
      profileImage: URL.createObjectURL(e.target.files[0]),
    }));
    setMedia(e.target.files[0]);
    setShowAvatar(false);
  };

  return (
    <div
      className="fixed top-0 left-0 z-50 w-full h-full bg-bgModal"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="absolute p-6 position-center w-80 bg-white dark:bg-black rounded-lg">
        <div
          onClick={() => setShowAvatar(false)}
          className="absolute -top-2 -right-2"
        >
          <MdCancel className="w-7 h-7 fill-primary bg-slate-50 dark:bg-black rounded-full" />
        </div>
        <h2 className="font-bold text-xl pb-4 text-black dark:text-white">
          Profile Image
        </h2>
        <ul className=" flex flex-wrap gap-2">
          {avatars.map((pic, index) => (
            <li key={index} onClick={() => setSelectAvatar(pic)}>
              <img
                src={pic}
                alt="profile pic"
                className="w-20 h-20 rounded-full border-2 hover:border-black dark:hover:border-white hover:shadow-lg active:border-primary border-solid border-primary cursor-pointer"
              />
            </li>
          ))}
        </ul>
        <div className="flex justify-between mt-5">
          <div className="relative">
            <button className=" py-1 px-2 pb-0.15rem text-primary border-2 border-primary hover:opacity-90 active:opacity-80 text-lg rounded-full shadow-md">
              Upload Image
            </button>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="absolute left-0 w-32 opacity-0"
            />
          </div>

          <button
            className="w-32 py-1 pb-0.15rem border-none bg-primary hover:opacity-90 active:opacity-80 text-white text-lg rounded-full shadow-md"
            onClick={() => addAvatarHandler()}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
