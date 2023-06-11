import { createContext, useContext } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  return <DataContext.Provider>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);
