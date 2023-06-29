import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext/AuthContext";
import {
  homeActive,
  homeGray,
  exploreActive,
  exploreGray,
  bookmarkActive,
  bookmarkGray,
  heartActive,
  heartGray,
} from "../../assets";

export const BottomNavigation = () => {
  const { loggedUser } = useAuth();
  const navigate = useNavigate();
  const path = window.location.pathname;

  const [newActiveLink, setNewActiveLink] = useState(path);

  useEffect(() => {
    setNewActiveLink(() => path);
  }, [path]);

  return (
    <div className="absolute bottom-0 sm670:hidden py-7 w-full flex justify-between items-center h-10 bg-white px-3 shadow-md">
      <NavLink to="/feed">
        <div className="hover:opacity-80 active:opacity-50">
          {newActiveLink === "/feed" ? (
            <img src={homeActive} className="w-6 h-6" alt="icon" />
          ) : (
            <img src={homeGray} className="w-6 h-6" alt="icon" />
          )}
        </div>
      </NavLink>

      <NavLink to="/explore">
        <div className="hover:opacity-80 active:opacity-50">
          {newActiveLink === "/explore" ? (
            <img src={exploreActive} className="w-6 h-6" alt="icon" />
          ) : (
            <img src={exploreGray} className="w-5 h-5 " alt="icon" />
          )}
        </div>
      </NavLink>
      <NavLink to="/bookmark">
        <div className="hover:opacity-80 active:opacity-50">
          {newActiveLink === "/bookmark" ? (
            <img src={bookmarkActive} className="w-6 h-6" alt="icon" />
          ) : (
            <img src={bookmarkGray} className="w-6 h-6" alt="icon" />
          )}
        </div>
      </NavLink>

      <NavLink to="/favourite">
        <div className="hover:opacity-80 active:opacity-50">
          {newActiveLink === "/favourite" ? (
            <img src={heartActive} className="w-6 h-6" alt="icon" />
          ) : (
            <img src={heartGray} className="w-6 h-6" alt="icon" />
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
