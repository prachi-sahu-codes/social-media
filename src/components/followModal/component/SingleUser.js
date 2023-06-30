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
    <div className="flex gap-3 items-center">
      <img
        src={
          followUser.profileImage !== ""
            ? followUser.profileImage
            : "https://i.imgur.com/qMW3Cze.png"
        }
        alt="profile pic"
        className="w-10 h-10 rounded-full border-2 border-solid border-primary cursor-pointer"
        onClick={() => {
          navigate(`/users/${followUser.username}`);
          setShowFollowModal(false);
        }}
      />
      <div>
        <p className=" text-sm cursor-pointer">{followUser.fullname}</p>
        <p className="text-xs text-gray">@{followUser.username}</p>
      </div>
    </div>
  );
};
