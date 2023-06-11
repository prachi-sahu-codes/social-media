import { createContext, useContext } from "react";
import { toast } from "react-toastify";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
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
    <DataContext.Provider value={{ notifyToast }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
