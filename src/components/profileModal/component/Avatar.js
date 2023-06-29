import React from "react";
import { MdCancel } from "react-icons/md";

const avatars = [
  "https://i.imgur.com/pFSWkOJ.png",
  "https://i.imgur.com/YmpQzMV.png",
  "https://i.imgur.com/q9SooZP.png",
  "https://i.imgur.com/j7qqclx.png",
  "https://i.imgur.com/QMLVJAg.png",
  "https://i.imgur.com/kTCO0qa.png",
  "https://i.imgur.com/rq3yabN.png",
  "https://i.imgur.com/xblabjC.png",
  "https://i.imgur.com/fqiSfaN.png",
];
export const Avatar = ({ setShowAvatar, setFormDetails }) => {
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
            <li
              key={index}
              onClick={() =>
                setFormDetails((prev) => ({ ...prev, profileImage: pic }))
              }
            >
              <img
                src={pic}
                alt="profile pic"
                className="w-20 h-20 rounded-full border-2 border-solid border-primary cursor-pointer"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
