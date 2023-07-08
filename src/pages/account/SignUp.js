import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import { useAuth } from "../../context/authContext/AuthContext";
import { useTheme } from "../../context/themeContext/ThemeContext";
import { Logo } from "../../components/logo/Logo";
import auth from "../../assets/auth.png";
import { eyeHideWhite, eyeWhite } from "../../assets";

export const Signup = () => {
  const { signUpUser, notifyToast } = useAuth();
  const { isDarkTheme } = useTheme();
  const [passVisible, setPassVisible] = useState("password");
  const [userInfo, setUserInfo] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    profileImage: "",
    bio: "",
    website: "",
    followers: [],
    following: [],
  });

  const clickSubmit = () => {
    if (
      userInfo.fullname &&
      userInfo.username &&
      userInfo.password &&
      userInfo.email
    ) {
      signUpUser(userInfo);
    } else {
      notifyToast("error", "Please fill in valid details.!");
    }
  };
  return (
    <div className="flex w-full min-h-screen">
      <div className="w-full">
        <Logo />

        <div className="px-5 sm360:px-10 md970:px-24 pt-3 h-max-content text-center">
          <h1 className="text-4xl sm570:text-6xl font-bold leading-tight text-black dark:text-white">
            Hi there!
          </h1>
          <p className="pt-1 pb-4 text-gray text-sm ">
            Welcome to Whizverse, Community Dashboard
          </p>

          <form className="" onSubmit={(e) => e.preventDefault()}>
            <div className="border-lightGray dark:border-blackLightBg w-full py-1.5 px-5 mt-5 text-lg font-semibold border-2 rounded-lg dark:bg-blackLightBg">
              <input
                type="text"
                placeholder="Full Name"
                id="first"
                name="first"
                className="w-full outline-0 text-black dark:text-white dark:bg-blackLightBg"
                onChange={(e) =>
                  setUserInfo((u) => ({ ...u, fullname: e.target.value }))
                }
                required
              />
            </div>

            <div className="border-lightGray dark:border-blackLightBg w-full py-1.5 px-5 mt-5 text-lg font-semibold border-2 rounded-lg dark:bg-blackLightBg">
              <input
                type="text"
                placeholder="Username"
                id="last"
                name="last"
                className="w-full outline-0 text-black dark:text-white dark:bg-blackLightBg"
                onChange={(e) =>
                  setUserInfo((u) => ({ ...u, username: e.target.value }))
                }
                required
              />
            </div>
            <div className="border-lightGray dark:border-blackLightBg w-full py-1.5 px-5 mt-5 text-lg font-semibold border-2 rounded-lg dark:bg-blackLightBg">
              <input
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                className="w-full outline-0 text-black dark:text-white dark:bg-blackLightBg"
                onChange={(e) =>
                  setUserInfo((u) => ({ ...u, email: e.target.value }))
                }
                required
              />
            </div>

            <div className="relative border-lightGray dark:border-blackLightBg w-full py-1.5 px-5 mt-5 text-lg font-semibold border-2 rounded-lg dark:bg-blackLightBg">
              <input
                type={passVisible}
                placeholder="Password"
                id="pwd"
                name="pwd"
                className="w-full outline-0 text-black dark:text-white dark:bg-blackLightBg"
                onChange={(e) =>
                  setUserInfo((u) => ({ ...u, password: e.target.value }))
                }
                required
              />
              <div className="absolute right-5 top-3">
                {passVisible === "password" ? (
                  <div onClick={() => setPassVisible(() => "text")}>
                    {isDarkTheme ? (
                      <img src={eyeHideWhite} alt="icon" className="w-4 h-4" />
                    ) : (
                      <BsEyeSlashFill />
                    )}
                  </div>
                ) : (
                  <div onClick={() => setPassVisible(() => "password")}>
                    {isDarkTheme ? (
                      <img src={eyeWhite} alt="icon" className="w-4 h-4" />
                    ) : (
                      <BsEyeFill />
                    )}
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={() => clickSubmit(userInfo)}
              className="inline-block w-full p-1.5 mt-10 text-lg font-semibold text-white bg-primary rounded-full hover:opacity-90 active:opacity-80"
            >
              Create new account
            </button>

            <div className="flex justify-center m-3 mb-10 gap-2">
              <span className="text-gray">Already have an account? </span>
              <Link
                to="/login"
                className="font-bold text-cyan-900 hover:opacity-90 active:opacity-80 underline dark:text-secondary"
              >
                SignIn!
              </Link>
            </div>
          </form>
        </div>
      </div>

      <div className="bg-svgBg dark:bg-blackLightBg items-center justify-center w-full hidden md840:flex">
        <img
          src={auth}
          className="object-contain sign-img"
          alt="people shaking hands"
        />
      </div>
    </div>
  );
};
