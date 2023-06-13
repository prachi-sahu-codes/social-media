import React from "react";
import { Link } from "react-router-dom";
import landing from "../../assets/landing.png";
import { BsPeopleFill } from "react-icons/bs";
import "../../App.css";

export const Landing = () => {
  return (
    <div>
      <div className="flex w-full min-h-screen">
        <div className="w-full">
          <div className="flex p-3 pl-8 items-center mb-11 active:opacity-80">
            <span className="py-0 pt-0.5 px-2 rounded-lg text-lg text-white bg-primary mr-2 font-cursive cursor-pointer">
              W
            </span>
            <span className="cursor-pointer text-xl font-cursive">
              {" "}
              WhizVerse
            </span>
          </div>

          <div className="px-5 sm360:px-10 md970:px-24  pt-8 h-max-content">
            <h1 className="text-4xl sm570:text-6xl font-bold leading-tight">
              Connect, Inspire, Collaborate
            </h1>
            <p className="py-5 sm570:pr-20 text-gray text-sm ">
              Discover a vibrant community of artists, creators, arts and
              unleash your creativity, showcase your masterpieces, and connect
              with fellow art lovers
            </p>
            <button className="inline-block w-full p-1.5 mt-10 text-lg font-semibold text-white bg-primary rounded-full">
              Join Us
            </button>

            <div className="flex justify-center m-3 gap-2">
              <span>Already have an account? </span>
              <Link className="font-bold text-cyan-900  underline dark:text-secondary">
                Login
              </Link>
            </div>

            <div className="flex gap-2 items-center mt-16 mb-5 text-sm text-gray">
              <BsPeopleFill className="icon rounded-full" />
              <span>Largest Art community</span>
            </div>
          </div>
        </div>

        <div className="bg-svgBg items-center justify-center w-full hidden md840:flex">
          <img
            src={landing}
            className="object-contain landing-img"
            alt="people shaking hands"
          />
        </div>
      </div>
    </div>
  );
};
