import React from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { usePost } from "../../context/postContext/PostContext";

export const Home = () => {
  const { postData } = usePost();
  return (
    <div>
      <Navbar />
      <div className="mt-12">
        <div></div>
      </div>
    </div>
  );
};
