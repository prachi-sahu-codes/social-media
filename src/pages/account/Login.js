import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import { useAuth } from "../../context/authContext/AuthContext";
import { Logo } from "../../components/logo/Logo";
import auth from "../../assets/auth.png";

export const Login = () => {
  const [passVisible, setPassVisible] = useState("password");
  const { userDetail, setUserDetail, loginUser, notifyToast } = useAuth();

  const loginHandler = () => {
    if (userDetail.password && userDetail.username) {
      loginUser(userDetail);
    } else {
      notifyToast("error", "Please fill all the fields!");
    }
  };

  return (
    <div className="flex w-full min-h-screen">
      <div className="w-full">
        <Logo />

        <div className="px-5 sm360:px-10 md970:px-24 pt-5 h-max-content text-center">
          <h1 className="text-4xl sm570:text-6xl font-bold leading-tight">
            Hi there!
          </h1>
          <p className="pt-1 pb-4 text-gray text-sm ">
            Welcome to Whizverse, Community Dashboard
          </p>

          <form className="" onSubmit={(e) => e.preventDefault()}>
            <div className="border-lightGray w-full py-1.5 px-5 mt-5 text-lg font-semibold border-2 rounded-lg">
              <input
                type="text"
                placeholder="Username"
                id="text"
                name="text"
                className="w-full outline-0"
                value={userDetail.username}
                onChange={(e) =>
                  setUserDetail((u) => ({ ...u, username: e.target.value }))
                }
                required
              />
            </div>

            <div className="relative border-lightGray w-full py-1.5 px-5 mt-5 text-lg font-semibold border-2 rounded-lg">
              <input
                type={passVisible}
                placeholder="Password"
                id="pwd"
                name="pwd"
                className="w-full outline-0"
                value={userDetail.password}
                onChange={(e) =>
                  setUserDetail((u) => ({ ...u, password: e.target.value }))
                }
                required
              />
              <div className="absolute right-5 top-3">
                {passVisible === "password" ? (
                  <BsEyeSlashFill
                    onClick={() => setPassVisible(() => "text")}
                  />
                ) : (
                  <BsEyeFill onClick={() => setPassVisible(() => "password")} />
                )}
              </div>
            </div>

            <button
              onClick={() => loginHandler()}
              className="inline-block w-full p-1.5 mt-10 text-lg font-semibold text-white bg-primary rounded-full hover:opacity-90 active:opacity-80"
            >
              Login
            </button>

            <button
              onClick={() => {
                setUserDetail((u) => ({
                  username: "JoyfulJenny",
                  password: "jenny123@",
                }));
                loginUser({
                  username: "JoyfulJenny",
                  password: "jenny123@",
                });
              }}
              className="inline-block w-full p-1.5 mt-5 text-lg font-semibold border-2 border-primary text-primary rounded-full hover:opacity-80 active:opacity-50"
            >
              Guest Login
            </button>

            <div className="flex justify-center m-3 mb-10 gap-2">
              <span className="text-gray">Don't have an account? </span>
              <Link
                to="/signup"
                className="font-bold text-cyan-900 hover:opacity-90 active:opacity-80 underline dark:text-secondary"
              >
                SignUp!
              </Link>
            </div>
          </form>
        </div>
      </div>

      <div className="bg-svgBg items-center justify-center w-full hidden md840:flex">
        <img
          src={auth}
          className="object-contain sign-img"
          alt="people shaking hands"
        />
      </div>
    </div>
  );
};
