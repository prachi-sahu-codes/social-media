import React, { useState } from "react";
import {
  BsHouseDoorFill,
  BsHouseDoor,
  BsBookmarkFill,
  BsBookmark,
  BsCompassFill,
  BsCompass,
  BsHeartFill,
  BsHeart,
} from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/authContext/AuthContext";

export const NavigationBox = () => {
  const { logoutHandler } = useAuth();
  const [newActiveLink, setNewActiveLink] = useState(0);

  const handleClick = (linkIndex) => {
    setNewActiveLink(() => linkIndex);
  };

  return (
    <div className="w-64 py-7 px-6">
      <NavLink to="/feed" onClick={() => handleClick(0)}>
        <div className="flex">
          {newActiveLink === 0 ? <BsHouseDoorFill /> : <BsHouseDoor />}{" "}
          <span>Feed</span>
        </div>
      </NavLink>
      <NavLink to="/explore" onClick={() => handleClick(1)}>
        <div className="flex">
          {newActiveLink === 1 ? <BsCompassFill /> : <BsCompass />}
          <span>Explore</span>
        </div>
      </NavLink>
      <NavLink to="/bookmark" onClick={() => handleClick(2)}>
        <div className="flex">
          {newActiveLink === 2 ? <BsBookmarkFill /> : <BsBookmark />}
          <span>Bookmarks</span>
        </div>
      </NavLink>
      <NavLink to="/bookmark" onClick={() => handleClick(3)}>
        <div className="flex">
          {newActiveLink === 3 ? <BsHeartFill /> : <BsHeart />}
          <span>Favourites</span>
        </div>
      </NavLink>
      <button onClick={() => logoutHandler()}>Log Out</button>
    </div>
  );
};
