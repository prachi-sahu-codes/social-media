import React from "react";
import { useNavigate } from "react-router";

export const Logo = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex p-3 pl-8 items-center mb-11 active:opacity-80"
      onClick={() => navigate("/")}
    >
      <span className="py-0 pt-0.5 px-2 rounded-lg text-lg text-white bg-primary mr-2 font-cursive cursor-pointer">
        W
      </span>
      <span className="cursor-pointer text-xl font-cursive"> WhizVerse</span>
    </div>
  );
};
