import { createContext, useContext, useState } from "react";
import { loginService, signupService } from "../../api/services/authServices";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [userDetail, setUserDetail] = useState({ username: "", password: "" });

  const localStorageToken = JSON.parse(localStorage.getItem("authItems"));
  const [token, setToken] = useState(localStorageToken?.token);
  const [loggedUser, setLoggedUser] = useState(localStorageToken?.user);

  const signUpUser = async (input) => {
    try {
      const res = await signupService(input);
      if (res.status === 200 || res.status === 201) {
        const { createdUser, encodedToken } = res.data;
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
      }
    } catch (e) {
      console.log(e);
      notifyToast(
        "error",
        e?.response?.data?.errors
          ? e?.response?.data?.errors[0]
          : "Something is wrong. Please try again!"
      );
    }
  };

  const loginUser = async (input) => {
    try {
      const res = await loginService(input);
      if (res.status === 200 || res.status === 201) {
        const { foundUser, encodedToken } = res.data;
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
      }
    } catch (e) {
      console.log(e);
      notifyToast(
        "error",
        e?.response?.data?.errors
          ? e?.response?.data?.errors[0]
          : "Something is wrong. Please try again!"
      );
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("authItems");
    setToken(null);
    setLoggedUser(null);
    navigate("./");
    notifyToast("success", "Logout successful. We hope to see you again soon!");
  };

  //TOAST
  const notifyToast = (type, msg) => {
    if (type === "success") {
      toast.success(msg);
    } else if (type === "warning") {
      toast.warning(msg);
    } else if (type === "error") {
      toast.error(msg);
    } else if (type === "info") {
      toast.info(msg);
    } else {
      toast.default(msg);
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
