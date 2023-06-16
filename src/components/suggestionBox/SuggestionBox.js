import React from "react";
import { useUser } from "../../context/userContext/UserContext";
import { useAuth } from "../../context/authContext/AuthContext";
import { FiImage } from "react-icons/fi";
import { BsEmojiSunglasses } from "react-icons/bs";

export const SuggestionBox = () => {
  const { userData } = useUser();
  const { loggedUser } = useAuth();

  const loggedUserFollowers = loggedUser.followers.map(
    (person) => person.username
  );

  const suggestionsArr = userData.filter(
    (user) =>
      user.username !== loggedUser.username &&
      !loggedUserFollowers.includes(user.username)
  );

  return (
    <div className="w-96 py-7 px-5 h-calc-nav text-center">
      <div className="flex flex-col gap-4 border-2 border-bgColorLoad rounded-lg p-2 py-4 ">
        <div className="flex gap-3">
          {loggedUser?.profileImage ? (
            <img
              src={loggedUser?.profileImage}
              alt="profile pic"
              className="w-10 h-10 rounded-full border-2 border-solid border-primary cursor-pointer"
            />
          ) : (
            <img
              src="https://i.imgur.com/qMW3Cze.png"
              alt="profile pic"
              className="w-10 h-10 rounded-full border-2 border-solid border-primary cursor-pointer"
            />
          )}
          <input type="text" placeholder="Write something..." />
        </div>
        <hr className="text-bgColorLoad" />
        <div className="flex justify-between ">
          <div className="flex gap-3">
            <FiImage />
            <BsEmojiSunglasses />
          </div>
          <button>Post</button>
        </div>
      </div>
      <div>
        <h1 className="mt-4 mb-3 text-lg font-semibold">Suggestions for you</h1>
        <ul className=" h-72 overflow-y-scroll suggestionScroll">
          {suggestionsArr.map(({ _id, fullname, username, profileImage }) => (
            <li
              key={_id}
              className="flex gap-3 justify-between items-center my-5 w-60 pr-2"
            >
              <div className="flex gap-3 items-center">
                <img
                  src={profileImage}
                  alt="profile pic"
                  className="w-10 h-10 rounded-full border-2 border-solid border-primary cursor-pointer"
                />
                <div>
                  <p className=" text-sm cursor-pointer">{fullname}</p>
                  <p className="text-xs text-gray">@{username}</p>
                </div>
              </div>
              <button className="text-primary text-sm font-semibold">
                Follow
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
