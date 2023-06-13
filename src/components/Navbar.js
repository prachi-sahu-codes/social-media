import React, { useEffect, useState } from "react";

// for navbar top margin mt-12

export const Navbar = () => {
  const [showShadow, setShowShadow] = useState(false);
  const shadowHandler = () => {
    if (window.scrollY >= 70) {
      setShowShadow(true);
    } else {
      setShowShadow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", shadowHandler);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div
      className={`p-3 px-8 fixed top-0 left-0 right-0 z-10 bg-white ${
        showShadow ? "shadow-md  drop-shadow-sm" : ""
      } transition delay-75 ease-in-out`}
    >
      <div className="flex  items-center text-xl font-cursive">
        <span className="py-0 pt-0.5 px-2 rounded-lg text-lg text-white bg-secondary mr-2 font-cursive">
          W
        </span>
        WhizVerse
      </div>
    </div>
  );
};
