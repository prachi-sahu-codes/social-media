import React from "react";
import { useUser } from "../../context/userContext/UserContext";

export const Bookmark = () => {
  const { bookmarkArr } = useUser();
  console.log(bookmarkArr);
  return (
    <div className="w-full py-7 px-6 h-calc-nav overflow-x-hidden overflow-y-scroll bg-slate-50">
      Bookmark
    </div>
  );
};
