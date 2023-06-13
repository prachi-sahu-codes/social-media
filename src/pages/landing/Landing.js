import React from "react";
import { Link } from "react-router-dom";
import landing from "../../assets/landing.png";
import "../../App.css";

export const Landing = () => {
  return (
    <div>
      <div className="flex h-screen">
        <div className="flex-1 w-auto">
          <div className="flex p-3 pl-8 items-center text-xl font-cursive mb-11">
            <span className="py-0 pt-0.5 px-2 rounded-lg text-lg text-white bg-primary mr-2 font-cursive">
              W
            </span>
            WhizVerse
          </div>

          <div className="px-10 md1:px-24 pt-12 h-max-content">
            <h1 className="text-6xl font-bold leading-tight">
              Connect, Inspire, Collaborate
            </h1>
            <p className="py-5 pr-20 text-gray text-sm ">
              Discover a vibrant community of artists, creators, arts and
              unleash your creativity, showcase your masterpieces, and connect
              with fellow art lovers
            </p>
            <button className="inline-block w-full p-1.5 mt-10 text-lg font-semibold text-white bg-primary rounded-full">
              Join Us
            </button>
            <Link className="block m-3 text-center">
              Already have an account?
            </Link>
          </div>
        </div>

        <div className="bg-svgBg flex-1 h-full">
          <img
            src={landing}
            className="h-full mx-auto my-auto object-contain"
            alt="people shaking hands"
          />
        </div>
      </div>
    </div>
  );
};
