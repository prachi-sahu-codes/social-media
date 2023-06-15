import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
  logout,
} from "../../assets";

export const NavigationBox = () => {
  const { loggedUser, logoutHandler } = useAuth();
  const [newActiveLink, setNewActiveLink] = useState(0);

  const handleClick = (linkIndex) => {
    setNewActiveLink(() => linkIndex);
  };

  console.log(loggedUser);

  return (
    <div className="w-64 py-7 flex flex-col gap-2 items-center border-r-2 border-bgColorLoad h-calc-nav">
      <div className="flex flex-col gap-2 items-center justify-center mx-3">
        <img
          src={loggedUser?.image}
          alt="profile pic"
          className="w-20 rounded-full border-2 border-solid border-primary"
        />
        <div className="py-2">{loggedUser?.fullname}</div>
        <div className="py-2">{loggedUser?.description}</div>
      </div>
      <div className="flex flex-col gap-5 mx-3">
        <hr className="text-bgColorLoad" />

        <NavLink to="/feed" onClick={() => handleClick(0)}>
          <div className="flex text-xl  w-36 items-center py-1 hover:bg-svgBg rounded-md ">
            <div className="mx-3">
              {newActiveLink === 0 ? (
                <img
                  src={homeActive}
                  className="w-1.3rem h-1.3rem"
                  alt="icon"
                />
              ) : (
                <img src={homeGray} className="w-1.3rem h-1.3rem" alt="icon" />
              )}
            </div>
            <span
              className={`text-base font-semibold pt-1 pr-3 ${
                newActiveLink === 0 ? "text-primary" : "text-mediumGray"
              }`}
            >
              Feed
            </span>
          </div>
        </NavLink>

        <NavLink to="/explore" onClick={() => handleClick(1)}>
          <div className="flex text-xl py-1  w-36 items-center hover:bg-svgBg rounded-md">
            <div className="mx-3">
              {newActiveLink === 1 ? (
                <img
                  src={exploreActive}
                  className="w-1.3rem h-1.3rem"
                  alt="icon"
                />
              ) : (
                <img
                  src={exploreGray}
                  className="w-1.05rem h-1.05rem ml-0.1rem "
                  alt="icon"
                />
              )}
            </div>
            <span
              className={`text-base font-semibold pt-1 pr-3 ${
                newActiveLink === 1
                  ? "text-primary"
                  : "text-mediumGray ml-0.15rem"
              }`}
            >
              Explore
            </span>
          </div>
        </NavLink>
        <NavLink to="/bookmark" onClick={() => handleClick(2)}>
          <div className="flex text-xl py-1 items-center w-36 hover:bg-svgBg rounded-md">
            <div className="mx-3">
              {newActiveLink === 2 ? (
                <img
                  src={bookmarkActive}
                  className="w-1.3rem h-1.3rem"
                  alt="icon"
                />
              ) : (
                <img
                  src={bookmarkGray}
                  className="w-1.3rem h-1.3rem"
                  alt="icon"
                />
              )}
            </div>
            <span
              className={`text-base font-semibold pt-1 pr-3 ${
                newActiveLink === 2 ? "text-primary" : "text-mediumGray"
              }`}
            >
              Bookmarks
            </span>
          </div>
        </NavLink>
        <NavLink to="/bookmark" onClick={() => handleClick(3)}>
          <div className="flex text-xl items-center py-1  w-36 hover:bg-svgBg rounded-md">
            <div className="mx-3">
              {newActiveLink === 3 ? (
                <img
                  src={heartActive}
                  className="w-1.3rem h-1.3rem"
                  alt="icon"
                />
              ) : (
                <img src={heartGray} className="w-1.3rem h-1.3rem" alt="icon" />
              )}
            </div>
            <span
              className={`text-base font-semibold pr-3 pt-1 ${
                newActiveLink === 3 ? "text-primary" : "text-mediumGray"
              }`}
            >
              Favourites
            </span>
          </div>
        </NavLink>

        <hr className="text-bgColorLoad" />

        <div className="flex text-lg items-center py-1  w-36 hover:bg-svgBg rounded-md">
          <img src={logout} className="w-1.3rem h-1.3rem mx-3" alt="icon" />
          <button
            onClick={() => logoutHandler()}
            className="font-semibold text-mediumGray text-base"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};
