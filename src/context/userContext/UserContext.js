import { createContext, useContext, useEffect, useState } from "react";
import { usePost } from "../postContext/PostContext";
import { usersService } from "../../api/apiServices";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { setLoading } = usePost();
  const [userData, setUserData] = useState([]);

  const getUserData = async () => {
    try {
      setLoading(true);
      const res = await usersService();

      if (res.status === 200) {
        setUserData(res.data?.users);
        console.log("res", res);
        setLoading(false);
      }
    } catch (e) {
      console.log("Error:", e);
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UserContext.Provider value={{ userData }}>{children}</UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
