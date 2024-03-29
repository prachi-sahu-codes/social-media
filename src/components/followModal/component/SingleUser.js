import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../../context/authContext/AuthContext";
import { useUser } from "../../../context/userContext/UserContext";

export const SingleUser = ({ user, setShowFollowModal }) => {
  const navigate = useNavigate();
  const { loggedUser } = useAuth();
  const { userData } = useUser();
  //
  const [followUser, setFollowUser] = useState({});

  useEffect(() => {
    if (user.username === loggedUser.username) {
      setFollowUser(loggedUser);
    } else {
      const findUsername = userData?.find(
        (person) => person.username === user.username
      );
      setFollowUser(findUsername);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, userData]);

  return (
    <div
      className="flex gap-3 items-center"
      onClick={() => {
        navigate(`/users/${followUser.username}`);
        setShowFollowModal(false);
      }}
    >
      <img
        src={
          followUser.profileImage !== ""
            ? followUser.profileImage
            : "https://i.imgur.com/qMW3Cze.png"
        }
        alt="profile pic"
        className="w-10 h-10 rounded-full border-2 border-solid border-primary cursor-pointer"
      />
      <div>
        <p className="w-32 text-sm cursor-pointer text-black dark:text-white whitespace-nowrap overflow-hidden text-ellipsis">
          {followUser.fullname}
        </p>
        <p className="w-32 text-xs cursor-pointer text-gray whitespace-nowrap overflow-hidden text-ellipsis">
          @{followUser.username}
        </p>
      </div>
    </div>
  );
};
