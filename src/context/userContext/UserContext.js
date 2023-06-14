import { createContext, useContext, useEffect, useState } from "react";
import { usePost } from "../postContext/PostContext";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { setLoading } = usePost();
  const [userData, setUserData] = useState([]);

  const getUserData = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/users");
      const dataFetched = await res.json();

      if (res.status === 200) {
        setUserData(dataFetched?.users);
        console.log(dataFetched);
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
