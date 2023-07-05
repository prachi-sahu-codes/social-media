import React from "react";
import { useState } from "react";
import { useUser } from "../../../context/userContext/UserContext";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useAuth } from "../../../context/authContext/AuthContext";

export const SuggestionsBox = () => {
  const navigate = useNavigate();
  const { userData, userDetail, followUser } = useUser();
  const { loggedUser } = useAuth();
  const [suggestionsArr, setSuggestionsArr] = useState([]);

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

  return (
    <>
      {suggestionsArr.length > 0 && (
        <div className="my-4 w-64 sm360:w-80 sm450:w-96 sm570:w-30rem md840:w-36rem lg:hidden mx-auto">
          <ul className="flex overflow-x-scroll suggestionScroll">
            {suggestionsArr.map(({ _id, fullname, username, profileImage }) => (
              <li
                key={_id}
                className="flex flex-col p-2 justify-center  rounded-md mr-2"
              >
                <img
                  src={profileImage}
                  alt="profile pic"
                  className="w-20 h-20 rounded-full border-2 border-solid border-primary cursor-pointer"
                  onClick={() => {
                    navigate(`/users/${username}`);
                  }}
                />

                <p className="text-xs text-center mt-2 cursor-pointer w-20 whitespace-nowrap overflow-hidden text-ellipsis">
                  {username}
                </p>

                <button
                  className="text-primary pt-1 bg-white rounded-md text-sm font-semibold mt-1"
                  onClick={() => followUser(_id)}
                >
                  Follow
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
