import React, { useState } from "react";
import { useNavigate } from "react-router";
import { FiSearch } from "react-icons/fi";
import { useTheme } from "../../context/themeContext/ThemeContext";
import { PostModal } from "../postModal/PostModal";
import { SearchUserModal } from "../searchUserModal/SearchUserModal";
import { searchWhite } from "../../assets";
import { BsSunFill, BsFillMoonFill } from "react-icons/bs";

export const Navbar = () => {
  const [newPostModal, setNewPostModal] = useState(false);
  const [userModal, setUserModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { isDarkTheme, setIsDarkTheme } = useTheme();
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between p-3 px-8 fixed top-0 left-0 right-0 z-10 bg-white shadow-md drop-shadow-s dark:bg-black dark:shadow-shadowDark">
      <div
        className="flex items-center active:opacity-80"
        onClick={() => navigate("/feed")}
      >
        <span className="cursor-pointer py-0 pt-0.5 px-2 rounded-lg text-lg text-white bg-primary mr-2 font-cursive">
          W
        </span>
        <span className="cursor-pointer text-xl font-cursive text-black dark:text-white">
          {" "}
          WhizVerse
        </span>
      </div>

      <div className="relative flex items-center mx-4 bg-slate-100 px-2 rounded-full shadow-sm dark:bg-blackLightBg mr-1 dark:shadow-shadowDark">
        {isDarkTheme ? (
          <img src={searchWhite} alt="searchIcon" className="w-4 h-4" />
        ) : (
          <FiSearch />
        )}

        <input
          type="text"
          placeholder="Search Users"
          value={searchTerm}
          className="px-2 bg-slate-100 py-1 w-16 sm390:w-40 sm570:w-60 outline-none rounded-full dark:bg-blackLightBg dark:text-white"
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setUserModal(true);
          }}
        />
        {userModal && (
          <SearchUserModal
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            setUserModal={setUserModal}
          />
        )}
      </div>
      <div className="flex w-60 justify-between">
        <button
          className="px-4 py-1 hidden sm670:block border-none bg-primary hover:opacity-90 active:opacity-80 text-white text-lg rounded-full shadow-md dark:shadow-shadowDark active:shadow-sm"
          onClick={() => setNewPostModal((prev) => !prev)}
        >
          <span className="font-extrabold text-white text-xl"> &#xFF0B;</span>{" "}
          Create post
        </button>

        <div
          className="w-10 h-10 shadow-md rounded-full bg-slate-100 dark:bg-blackLightBg hover:opacity-80 active:shadow-sm"
          onClick={() => setIsDarkTheme((prev) => !prev)}
        >
          {isDarkTheme ? (
            <div className="text-2xl p-2 white-shadow-sm rounded-full ">
              <BsSunFill className="fill-primary" />
            </div>
          ) : (
            <div className="text-lg p-3 rounded-full">
              <BsFillMoonFill className="fill-primary" />
            </div>
          )}
        </div>
      </div>
      {newPostModal && <PostModal setShowPopupPost={setNewPostModal} />}
    </div>
  );
};
