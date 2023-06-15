import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/authContext/AuthContext";
import { Navbar } from "../components/navbar/Navbar";
import { NavigationBox } from "../components/navigationBox/NavigationBox";
import { SuggestionBox } from "../components/suggestionBox/SuggestionBox";

export const RequiresAuth = ({ children }) => {
  const { token } = useAuth();
  const location = useLocation();
  return token ? (
    <>
      <Navbar />
      <div className="mt-12 flex ">
        <NavigationBox />
        {children}
        <SuggestionBox />
      </div>
    </>
  ) : (
    <Navigate to="/login" state={{ from: location?.pathname }} replace />
  );
};
