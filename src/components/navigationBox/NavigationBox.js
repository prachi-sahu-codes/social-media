import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext/AuthContext";
import { homeActive, homeBlack, homeWhite } from "../../assets";
import { MdExplore, MdOutlineExplore } from "react-icons/md";
import { FaRegHeart, FaHeart, FaBookmark, FaRegBookmark } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { useTheme } from "../../context/themeContext/ThemeContext";

export const NavigationBox = () => {
  const { loggedUser, logoutHandler } = useAuth();
  const { isDarkTheme } = useTheme();
  const navigate = useNavigate();
  const path = window.location.pathname;
  const [newActiveLink, setNewActiveLink] = useState(path);

  useEffect(() => {
    setNewActiveLink(() => path);
  }, [path]);

  return (
    <div className="hidden md730:flex w-64 py-7 px-4 flex-col gap-2 items-center border-r-2 border-bgColorLoad h-calc-nav">
      <div
        className="flex flex-col items-center justify-center mx-3 cursor-pointer"
        onClick={(e) => {
          navigate(`/users/${loggedUser.username}`);
        }}
      >
        {loggedUser?.profileImage ? (
          <img
            src={loggedUser?.profileImage}
            alt="profile pic"
            className="w-20 h-20 rounded-full border-2 my-2 border-solid border-primary"
          />
        ) : (
          <img
            src="https://i.imgur.com/qMW3Cze.png"
            alt="profile pic"
            className="w-20 h-20 rounded-full border-2 my-2 border-solid border-primary"
          />
        )}
        <div className="pt-2 font-semibold w-36 whitespace-nowrap overflow-hidden text-ellipsis text-center text-black dark:text-white">
          {loggedUser?.fullname}
        </div>
        <div className="pb-4 w-36 whitespace-nowrap overflow-hidden text-ellipsis text-sm text-gray text-center">
          {loggedUser?.bio}
        </div>
      </div>
      <div className="flex flex-col gap-5 mx-3">
        <hr className="text-bgColorLoad" />

        <NavLink to="/feed">
          <div className="flex text-xl  w-36 items-center py-1 hover:opacity-80 active:opacity-50 rounded-md ">
            <div className="mx-3">
              {newActiveLink === "/feed" ? (
                <img
                  src={homeActive}
                  className="w-1.3rem h-1.3rem"
                  alt="icon"
                />
              ) : isDarkTheme ? (
                <img src={homeWhite} className="w-1.3rem h-1.3rem" alt="icon" />
              ) : (
                <img src={homeBlack} className="w-1.3rem h-1.3rem" alt="icon" />
              )}
            </div>
            <span
              className={`text-base font-semibold pt-1 pr-3 ${
                newActiveLink === "/feed"
                  ? "text-primary"
                  : "text-black dark:text-white"
              }`}
            >
              Feed
            </span>
          </div>
        </NavLink>

        <NavLink to="/explore">
          <div className="flex text-xl py-1  w-36 items-center hover:opacity-80 active:opacity-50 rounded-md">
            <div className="mx-3">
              {newActiveLink === "/explore" ? (
                <MdExplore className="w-1.3rem h-1.3rem fill-primary" />
              ) : (
                <MdOutlineExplore className="w-1.3rem h-1.3rem fill-black dark:fill-white" />
              )}
            </div>
            <span
              className={`text-base font-semibold pt-1 pr-3 ${
                newActiveLink === "/explore"
                  ? "text-primary"
                  : "text-black dark:text-white"
              }`}
            >
              Explore
            </span>
          </div>
        </NavLink>
        <NavLink to="/bookmark">
          <div className="flex text-xl py-1 items-center w-36 hover:opacity-80 active:opacity-50 rounded-md">
            <div className="mx-3">
              {newActiveLink === "/bookmark" ? (
                <FaBookmark className="fill-primary text-base" />
              ) : (
                <FaRegBookmark className="fill-black dark:fill-white text-base" />
              )}
            </div>
            <span
              className={`text-base font-semibold pt-1 pr-3 ${
                newActiveLink === "/bookmark"
                  ? "text-primary"
                  : "text-black dark:text-white"
              }`}
            >
              Bookmarks
            </span>
          </div>
        </NavLink>
        <NavLink to="/favourite">
          <div className="flex text-xl items-center py-1 w-36 hover:opacity-80 active:opacity-50 rounded-md">
            <div className="mx-3">
              {newActiveLink === "/favourite" ? (
                <FaHeart className="fill-primary text-lg" />
              ) : (
                <FaRegHeart className="fill-black dark:fill-white text-lg" />
              )}
            </div>
            <span
              className={`text-base font-semibold pr-3 pt-1 ${
                newActiveLink === "/favourite"
                  ? "text-primary"
                  : "text-black dark:text-white"
              }`}
            >
              Favourites
            </span>
          </div>
        </NavLink>

        <hr className="text-bgColorLoad" />

        <div
          className="flex text-lg items-center py-1  w-36 hover:opacity-80 active:opacity-50 rounded-md"
          onClick={() => logoutHandler()}
        >
          <MdLogout className="fill-black dark:fill-white mx-3" />
          <button className="font-semibold text-black text-base dark:text-white">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};
