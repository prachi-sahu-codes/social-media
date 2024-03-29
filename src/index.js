import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "./server";
import { AuthProvider } from "./context/authContext/AuthContext";
import { PostProvider } from "./context/postContext/PostContext";
import { UserProvider } from "./context/userContext/UserContext";
import { ThemeProvider } from "./context/themeContext/ThemeContext";
import "./index.css";
import { CommentProvider } from "./context/commentContext/CommentContext";

makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <PostProvider>
            <UserProvider>
              <CommentProvider>
                <App />
              </CommentProvider>
            </UserProvider>
          </PostProvider>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
