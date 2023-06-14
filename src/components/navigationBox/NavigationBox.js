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

const styleLinks = ({ isActive }) => ({
  color: isActive ? "red" : "blue",
});

export const NavigationBox = () => {
  const { logoutHandler } = useAuth();
  const [newActiveLink, setNewActiveLink] = useState(0);

  const handleClick = (linkIndex) => {
    setNewActiveLink(() => linkIndex);
  };

  return (
    <div className="w-64 py-7 px-6">
      <NavLink to="/home" style={styleLinks} onClick={() => handleClick(0)}>
        {newActiveLink === 0 ? <BsHouseDoorFill /> : <BsHouseDoor />}
      </NavLink>
      <NavLink to="/explore" style={styleLinks} onClick={() => handleClick(1)}>
        {newActiveLink === 1 ? <BsCompassFill /> : <BsCompass />}
      </NavLink>
      <NavLink to="/bookmark" style={styleLinks} onClick={() => handleClick(2)}>
        {newActiveLink === 2 ? <BsBookmarkFill /> : <BsBookmark />}
      </NavLink>
      <NavLink to="/bookmark" style={styleLinks} onClick={() => handleClick(3)}>
        {newActiveLink === 3 ? <BsHeartFill /> : <BsHeart />}
      </NavLink>
      <button onClick={() => logoutHandler()}>Log Out</button>
    </div>
  );
};
