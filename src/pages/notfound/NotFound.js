import React from "react";
import { Link } from "react-router-dom";
import notfound from "../../assets/notfond.svg";

export const NotFound = () => {
  return (
    <div className="w-screen h-screen">
      <div className="absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-2/4 text-center">
        <img src={notfound} alt="Not found" className="w-96 m-auto mb-2" />
        <h1 className="font-semibold text-3xl p-2">
          Looks like something is missing!!
        </h1>
        <p className="text-xl p-2">Go back to explore page</p>
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
