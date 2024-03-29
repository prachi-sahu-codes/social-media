import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useUser } from "../../context/userContext/UserContext";
import { useAuth } from "../../context/authContext/AuthContext";
import { usePost } from "../../context/postContext/PostContext";
import { lightGray, lightActive, fireGray, fireActive } from "../../assets";
import { avatars } from "../profileModal/component/data/data";

export const SuggestionBox = () => {
  const navigate = useNavigate();
  const { userData, userDetail, followUser } = useUser();
  const { loggedUser } = useAuth();
  const { activeSortBtn, setActiveSortBtn } = usePost();
  const [suggestionsArr, setSuggestionsArr] = useState([]);

  const activityProfile = avatars.slice(3);

  useEffect(() => {
    const followedUsers = userData?.filter((user) =>
      user.followers.find((person) => person.username === loggedUser.username)
    );

    const gettingUsername = followedUsers?.map((user) => user.username);

    const updatedSuggestions = userData.filter(
      (user) =>
        user.username !== loggedUser.username &&
        !gettingUsername.includes(user.username)
    );

    setSuggestionsArr(() => updatedSuggestions);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData, userDetail]);

  const checkPath = window.location.pathname === "/feed";

  return (
    <div className="w-96 hidden lg:block py-7 px-5 h-calc-nav text-center">
      {checkPath && (
        <>
          <h1 className="mt-4 text-left text-lg font-semibold text-black dark:text-white">
            Sort Posts By
          </h1>
          <div className="flex gap-2 pt-4 pb-6 mb-2">
            <button
              onClick={() => setActiveSortBtn(() => "latest")}
              className={`flex justify-center items-center pr-1 text-lg pt-0.1rem w-full border-2 rounded-md hover:opacity-80 active:opacity-60 ${
                activeSortBtn === "latest"
                  ? "border-primary text-primary"
                  : "border-lightGray text-mediumGray"
              }`}
            >
              <div>
                {activeSortBtn === "latest" ? (
                  <img src={lightActive} className="w-6 h-4" alt="icon" />
                ) : (
                  <img src={lightGray} className="w-6 h-4" alt="icon" />
                )}
              </div>
              Latest
            </button>
            <button
              onClick={() => setActiveSortBtn(() => "trending")}
              className={`flex justify-center items-center text-lg pt-0.1rem w-full border-2 rounded-md hover:opacity-80 active:opacity-60 ${
                activeSortBtn === "trending"
                  ? "border-primary text-primary"
                  : "border-lightGray text-mediumGray"
              }`}
            >
              <div>
                {activeSortBtn === "trending" ? (
                  <img src={fireActive} className="w-4 h-4 mb-1" alt="icon" />
                ) : (
                  <img src={fireGray} className="w-4 h-4 mb-1" alt="icon" />
                )}
              </div>
              Trending
            </button>
          </div>
          <hr className="text-bgColorLoad mb-6" />
        </>
      )}

      {suggestionsArr.length > 0 && (
        <div className="mb-4">
          <h1 className="mt-4 pb-3 text-left text-lg font-semibold text-black dark:text-white">
            Suggestions for you
          </h1>
          <ul className=" max-h-72 pt-2 overflow-y-scroll suggestionScroll">
            {suggestionsArr.map(({ _id, fullname, username, profileImage }) => (
              <li
                key={_id}
                className="flex gap-3 justify-between items-center mb-5 w-60 pr-2"
              >
                <div
                  className="flex gap-3 items-center"
                  onClick={() => {
                    navigate(`/users/${username}`);
                  }}
                >
                  <img
                    src={profileImage}
                    alt="profile pic"
                    className="w-10 h-10 rounded-full border-2 border-solid border-primary cursor-pointer"
                  />
                  <div className="text-left">
                    <p
                      className={`w-28 text-sm cursor-pointer text-black dark:text-white whitespace-nowrap overflow-hidden text-ellipsis
                      `}
                    >
                      {fullname}
                    </p>
                    <p
                      className={`w-28 text-xs text-gray cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis`}
                    >
                      @{username}
                    </p>
                  </div>
                </div>

                <button
                  className="text-primary text-sm font-semibold"
                  onClick={() => followUser(_id)}
                >
                  Follow
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {!suggestionsArr.length > 0 && (
        <div className="text-left">
          <h1 className="mt-4 pb-3 text-left text-lg font-semibold text-black dark:text-white">
            Activities
          </h1>
          <div className="bg-slate-100 dark:bg-blackLightBg p-3 rounded-lg">
            <ul className="flex">
              {activityProfile.map((pic, index) => (
                <li key={index} className="-mr-2 my-2">
                  <img
                    src={pic}
                    alt="profile pics"
                    className="w-10 h-10 rounded-full"
                  />
                </li>
              ))}
            </ul>
            <p className="font-semibold text-lg my-1 text-black dark:text-white">
              40.8K Peoples
            </p>
            <p className="mb-1 text-black dark:text-gray ">
              Active and engaging with the online community.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
