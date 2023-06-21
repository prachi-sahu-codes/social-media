import React from "react";
import { useUser } from "../../context/userContext/UserContext";
import { useAuth } from "../../context/authContext/AuthContext";
import { usePost } from "../../context/postContext/PostContext";
import { lightGray, lightActive, fireGray, fireActive } from "../../assets";
export const SuggestionBox = () => {
  const { userData } = useUser();
  const { loggedUser } = useAuth();
  const { activeSortBtn, setActiveSortBtn } = usePost();

  const loggedUserFollowers = loggedUser.followers.map(
    (person) => person.username
  );

  const suggestionsArr = userData.filter(
    (user) =>
      user.username !== loggedUser.username &&
      !loggedUserFollowers.includes(user.username)
  );

  const checkPath = window.location.pathname === "/feed";

  return (
    <div className="w-96 py-7 px-5 h-calc-nav text-center">
      {checkPath && (
        <>
          <h1 className="mt-4 text-left text-lg font-semibold">
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

      <div>
        <h1 className="mt-4 text-left text-lg font-semibold">
          Suggestions for you
        </h1>
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
              {true ? (
                <button className="text-primary text-sm font-semibold">
                  Follow
                </button>
              ) : (
                <button className="text-primary text-sm font-semibold">
                  Unfollow
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
