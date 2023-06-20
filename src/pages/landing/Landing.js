import React from "react";
import { Link, useNavigate } from "react-router-dom";
import landing from "../../assets/landing.png";
import { BsPeopleFill } from "react-icons/bs";
import "../../App.css";
import { Logo } from "../../components/logo/Logo";

export const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="flex w-full min-h-screen">
      <div className="w-full">
        <Logo />

        <div className="px-5 sm360:px-10 md970:px-24  pt-8 h-max-content">
          <h1 className="text-4xl sm570:text-6xl font-bold leading-tight">
            Connect, Inspire, Collaborate
          </h1>
          <p className="py-5 sm570:pr-20 text-gray mt-4">
            Discover a vibrant community of artists, creators, arts and unleash
            your creativity, showcase your masterpieces, and connect with fellow
            art lovers
          </p>
          <button
            onClick={() => navigate("/signup")}
            className="inline-block w-full p-1.5 mt-10 text-lg font-semibold text-white bg-primary rounded-full hover:opacity-90 active:opacity-80"
          >
            Join Us
          </button>

          <div className="flex justify-center m-3 gap-2">
            <span className="text-gray">Already have an account? </span>
            <Link
              to="/login"
              className="font-bold text-cyan-900 hover:opacity-90 active:opacity-80 underline dark:text-secondary"
            >
              Login!
            </Link>
          </div>

          <div className="flex gap-2 items-center mt-20 mb-5 text-sm text-gray">
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
  );
};
