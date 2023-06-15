import React from "react";

// for navbar top margin mt-12

export const Navbar = () => {
  return (
    <div className="p-3 px-8 fixed top-0 left-0 right-0 z-10 bg-white shadow-md  drop-shadow-s">
      <div className="flex items-center active:opacity-80">
        <span className="cursor-pointer py-0 pt-0.5 px-2 rounded-lg text-lg text-white bg-primary mr-2 font-cursive">
          W
        </span>
        <span className="cursor-pointer text-xl font-cursive"> WhizVerse</span>
      </div>
    </div>
  );
};
