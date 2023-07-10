import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext/AuthContext";
import { homeActive, homeBlack, homeWhite } from "../../assets";
import { BsPlus } from "react-icons/bs";
import { MdExplore, MdOutlineExplore } from "react-icons/md";
import { FaRegHeart, FaHeart, FaBookmark, FaRegBookmark } from "react-icons/fa";
import { PostModal } from "../postModal/PostModal";
import { useTheme } from "../../context/themeContext/ThemeContext";

export const BottomNavigation = () => {
  const navigate = useNavigate();
  const { loggedUser } = useAuth();
  const { darkTheme } = useTheme();
  const path = window.location.pathname;
  const [newPostModal, setNewPostModal] = useState(false);
  const [newActiveLink, setNewActiveLink] = useState(path);

  useEffect(() => {
    setNewActiveLink(() => path);
  }, [path]);

  return (
    <div className="fixed bottom-0 md730:hidden py-7 w-full flex justify-between items-center h-10 bg-white px-3 shadow-inner dark:bg-black">
      <NavLink to="/feed">
        <div className="w-7">
          {newActiveLink === "/feed" ? (
            <img src={homeActive} className="w-7 h-7" alt="icon" />
          ) : darkTheme ? (
            <img src={homeWhite} className="w-6 h-6" alt="icon" />
          ) : (
            <img src={homeBlack} className="w-6 h-6" alt="icon" />
          )}
        </div>
      </NavLink>

      <NavLink to="/explore">
        <div className="w-7">
          {newActiveLink === "/explore" ? (
            <MdExplore className="fill-primary text-3xl" />
          ) : (
            <MdOutlineExplore className="fill-black dark:fill-white text-2xl" />
          )}
        </div>
      </NavLink>

      <div
        onClick={() => setNewPostModal((prev) => !prev)}
        className="border-black dark:border-white border-2 rounded-md"
      >
        <BsPlus className="stroke-black dark:stroke-white stroke-1 " />
      </div>
      {newPostModal && <PostModal setShowPopupPost={setNewPostModal} />}

      <NavLink to="/bookmark">
        <div className="w-6">
          {newActiveLink === "/bookmark" ? (
            <FaBookmark className="fill-primary text-2xl" />
          ) : (
            <FaRegBookmark className="fill-black dark:fill-white text-xl" />
          )}
        </div>
      </NavLink>

      <NavLink to="/favourite">
        <div className=" w-7">
          {newActiveLink === "/favourite" ? (
            <FaHeart className="fill-primary text-2xl" />
          ) : (
            <FaRegHeart className="fill-black dark:fill-white text-xl" />
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
            className="w-10 h-10 rounded-full border-2 my-2 border-solid border-primary"
          />
        ) : (
          <img
            src="https://i.imgur.com/qMW3Cze.png"
            alt="profile pic"
            className="w-10 h-10 rounded-full border-2 my-2 border-solid border-primary"
          />
        )}
      </div>
    </div>
  );
};
