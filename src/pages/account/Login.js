import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import { useAuth } from "../../context/authContext/AuthContext";

export const Login = () => {
  const [passVisible, setPassVisible] = useState("password");
  const { userDetail, setUserDetail, loginUser } = useAuth();

  return (
    <div>
      <div className="sign">
        <h3 className="sign-title">Sign In</h3>
        <form className="sign-form" onSubmit={(e) => e.preventDefault()}>
          <div className="sign-input-label">
            <label htmlFor="email">User Name:</label>
            <input
              type="text"
              placeholder="BigJohn"
              id="text"
              name="text"
              value={userDetail.username}
              onChange={(e) =>
                setUserDetail((u) => ({ ...u, username: e.target.value }))
              }
              required
            />
          </div>

          <div className="sign-input-label pwd-input">
            <label htmlFor="pwd">Password:</label>
            <input
              type={passVisible}
              placeholder="********"
              id="pwd"
              name="pwd"
              className="sign-input "
              value={userDetail.password}
              onChange={(e) =>
                setUserDetail((u) => ({ ...u, password: e.target.value }))
              }
              required
            />
            <div className="pwd-eye-icon">
              {passVisible === "password" ? (
                <BsEyeSlashFill onClick={() => setPassVisible(() => "text")} />
              ) : (
                <BsEyeFill onClick={() => setPassVisible(() => "password")} />
              )}
            </div>
          </div>

          <button
            type="submit"
            className="card-btn"
            onClick={() => loginUser(userDetail)}
          >
            Create New Account
          </button>
          <button
            type="submit"
            className="card-btn"
            onClick={() =>
              loginUser({
                username: "JoyfulJenny",
                password: "jenny123@",
              })
            }
          >
            Login as a guest
          </button>
          <div>
            <span>Already have an account? </span>
            <Link to="/signUp" className="sign-link">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
