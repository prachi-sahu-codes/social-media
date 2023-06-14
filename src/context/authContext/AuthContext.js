import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [userDetail, setUserDetail] = useState({ username: "", password: "" });

  const localStorageToken = JSON.parse(localStorage.getItem("authItems"));
  const [token, setToken] = useState(localStorageToken?.token);
  const [loggedUser, setLoggedUser] = useState(localStorageToken?.user);

  const loginUser = async (input) => {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });
      if (res.status === 200 || res.status === 201) {
        const data = await res.json();
        const { foundUser, encodedToken } = data;
        localStorage.setItem(
          "authItems",
          JSON.stringify({ token: encodedToken, user: foundUser })
        );

        setToken(encodedToken);
        setLoggedUser(foundUser);
        navigate("./feed");
        setUserDetail(() => ({ username: "", password: "" }));

        notifyToast(
          "success",
          `Greetings, ${foundUser.username} ! Enjoy your time with us!`
        );
      } else {
        notifyToast("error", `Invalid username or password. Please try again.`);
      }
    } catch (e) {
      console.error("Error:", e);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("authItems");
    setToken(null);
    setLoggedUser(null);
    navigate("./");
    notifyToast("success", "Logout successful. We hope to see you again soon!");
  };

  const signUpUser = async (input) => {
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });
      if (res.status === 200 || res.status === 201) {
        const data = await res.json();
        const { createdUser, encodedToken } = data;

        localStorage.setItem(
          "authItems",
          JSON.stringify({ token: encodedToken, user: createdUser })
        );
        setToken(encodedToken);
        setLoggedUser(createdUser);
        navigate("./feed");
        notifyToast(
          "success",
          `Greetings, ${createdUser.username} ! Enjoy your time with us!`
        );
      } else {
        notifyToast("error", `Something is wrong. Please try again.`);
      }
    } catch (e) {
      console.error("Error:", e);
    }
  };

  //TOAST
  const notifyToast = (type, msg) => {
    if (type === "success") {
      toast.success(msg);
    } else if (type === "warning") {
      toast.warning(msg);
    } else {
      toast.error(msg);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        userDetail,
        setUserDetail,
        loginUser,
        logoutHandler,
        signUpUser,
        token,
        loggedUser,
        setLoggedUser,
        notifyToast,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
