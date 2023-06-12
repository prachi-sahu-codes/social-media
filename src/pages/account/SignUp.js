import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import { useAuth } from "../../context/authContext/AuthContext";
import { useData } from "../../context/dataContext/DataContext";

export const Signup = () => {
  const { signUpUser } = useAuth();
  const { notifyToast } = useData();

  const [passVisible, setPassVisible] = useState({
    pass: "password",
    confPass: "password",
  });
  const [userInfo, setUserInfo] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const clickSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmail = emailRegex.test(userInfo.email);
    if (!isEmail) {
      notifyToast("error", "Please enter a valid email!");
    }
    const checkPassword = userInfo.password === userInfo.confirm_password;
    if (!checkPassword) {
      notifyToast("error", "Passwords didn't match!");
    }
    if (
      userInfo.fullname &&
      userInfo.username &&
      userInfo.password &&
      isEmail &&
      checkPassword
    ) {
      signUpUser(userInfo);
      console.log("sign up user");
    }
  };
  return (
    <div className="signup-page">
      <div className="sign sign-up-whole">
        <h3 className="sign-title">Sign Up</h3>
        <form className="sign-form" onSubmit={(e) => e.preventDefault()}>
          <div className="flex-center name-sign-up">
            <div className="sign-input-label">
              <input
                type="text"
                placeholder="Full Name"
                id="first"
                name="first"
                className="sign-input sign-input-first"
                onChange={(e) =>
                  setUserInfo((u) => ({ ...u, fullname: e.target.value }))
                }
                required
              />
            </div>

            <div className="sign-input-label">
              <input
                type="text"
                placeholder="Username"
                id="last"
                name="last"
                className="sign-input"
                onChange={(e) =>
                  setUserInfo((u) => ({ ...u, username: e.target.value }))
                }
                required
              />
            </div>
          </div>
          <div className="sign-input-label">
            <input
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              className="sign-input"
              onChange={(e) =>
                setUserInfo((u) => ({ ...u, email: e.target.value }))
              }
              required
            />
          </div>
          <div className="sign-input-label pwd-input">
            <input
              type={passVisible.pass}
              placeholder="Password"
              id="pwd"
              name="pwd"
              className="sign-input "
              onChange={(e) =>
                setUserInfo((u) => ({ ...u, password: e.target.value }))
              }
              required
            />
            <div className="pwd-eye-icon">
              {passVisible.pass === "password" ? (
                <BsEyeSlashFill
                  onClick={() =>
                    setPassVisible((p) => ({ ...p, pass: "text" }))
                  }
                />
              ) : (
                <BsEyeFill
                  onClick={() =>
                    setPassVisible((p) => ({ ...p, pass: "password" }))
                  }
                />
              )}
            </div>
          </div>

          <div className="sign-input-label pwd-input">
            <input
              type={passVisible.confPass}
              placeholder="Confirm Password"
              id="cnfrmpwd"
              name="cnfrmpwd"
              className="sign-input "
              onChange={(e) =>
                setUserInfo((u) => ({ ...u, confirm_password: e.target.value }))
              }
              required
            />
            <div className="pwd-eye-icon">
              {passVisible.confPass === "password" ? (
                <BsEyeSlashFill
                  onClick={() =>
                    setPassVisible((p) => ({ ...p, confPass: "text" }))
                  }
                />
              ) : (
                <BsEyeFill
                  onClick={() =>
                    setPassVisible((p) => ({ ...p, confPass: "password" }))
                  }
                />
              )}
            </div>
          </div>

          <button
            type="submit"
            className="card-btn"
            onClick={() => clickSubmit(userInfo)}
          >
            Create new account
          </button>
          <div>
            <span>Don't have an account? </span>
            <Link to="/login" className="sign-link">
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
