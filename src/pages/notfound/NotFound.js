import React from "react";
import { Link } from "react-router-dom";
import notfound from "../../assets/notfond.svg";

export const NotFound = () => {
  return (
    <div className="w-screen h-screen dark:bg-blackLightBg">
      <div className="absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-2/4 text-center">
        <img src={notfound} alt="Not found" className="w-96 m-auto mb-5" />
        <h1 className="font-semibold text-lg sm500:text-2xl p-2 text-black dark:text-white">
          Looks like something is missing!!
        </h1>
        <p className="text-lg text-black dark:text-white">
          Go back to explore page
        </p>
        <Link
          to="./explore"
          className="inline-block text-lg rounded-lg text-white bg-primary py-1 px-4 m-4"
        >
          Explore
        </Link>
      </div>
    </div>
  );
};
