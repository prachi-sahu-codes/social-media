import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext/AuthContext";
import {
  homeActive,
  homeBlack,
  exploreActive,
  exploreBlack,
  bookmarkActive,
  bookmarkBlack,
  heartActive,
  heartBlack,
  plusBlack,
} from "../../assets";
import { PostModal } from "../postModal/PostModal";

export const BottomNavigation = () => {
  const { loggedUser } = useAuth();
  const navigate = useNavigate();
  const path = window.location.pathname;
  const [newPostModal, setNewPostModal] = useState(false);
  const [newActiveLink, setNewActiveLink] = useState(path);

  useEffect(() => {
    setNewActiveLink(() => path);
  }, [path]);

  return (
    <div className="fixed bottom-0 md730:hidden py-7 w-full flex justify-between items-center h-10 bg-white px-3 shadow-inner">
      <NavLink to="/feed">
        <div className="hover:opacity-80 active:opacity-50 w-7">
          {newActiveLink === "/feed" ? (
            <img src={homeActive} className="w-7 h-7" alt="icon" />
          ) : (
            <img src={homeBlack} className="w-6 h-6 ml-1" alt="icon" />
          )}
        </div>
      </NavLink>

      <NavLink to="/explore">
        <div className="hover:opacity-80 active:opacity-50 w-7">
          {newActiveLink === "/explore" ? (
            <img src={exploreActive} className="w-7 h-7" alt="icon" />
          ) : (
            <img src={exploreBlack} className="w-5 h-5 ml-1" alt="icon" />
          )}
        </div>
      </NavLink>

      <div
        className="border-2 border-black rounded-md text-secondary"
        onClick={() => setNewPostModal((prev) => !prev)}
      >
        <img src={plusBlack} className="w-4 h-4" alt="icon" />
      </div>
      {newPostModal && <PostModal setShowPopupPost={setNewPostModal} />}

      <NavLink to="/bookmark">
        <div className="hover:opacity-80 active:opacity-50 w-6">
          {newActiveLink === "/bookmark" ? (
            <img src={bookmarkActive} className="w-6 h-6" alt="icon" />
          ) : (
            <img src={bookmarkBlack} className="w-5 h-5 ml-1" alt="icon" />
          )}
        </div>
      </NavLink>

      <NavLink to="/favourite">
        <div className="hover:opacity-80 active:opacity-50 w-7">
          {newActiveLink === "/favourite" ? (
            <img src={heartActive} className="w-7 h-7" alt="icon" />
          ) : (
            <img src={heartBlack} className="w-6 h-6 ml-1" alt="icon" />
          )}
        </div>
      </NavLink>

      <div
        onClick={(e) => {
          navigate(`/users/${loggedUser.username}`);
        }}
      >
        {loggedUser?.profileImage ? (
          <img
            src={loggedUser?.profileImage}
            alt="profile pic"
            className="w-10 rounded-full border-2 my-2 border-solid border-primary"
          />
        ) : (
          <img
            src="https://i.imgur.com/qMW3Cze.png"
            alt="profile pic"
            className="w-10 rounded-full border-2 my-2 border-solid border-primary"
          />
        )}
      </div>
    </div>
  );
};
