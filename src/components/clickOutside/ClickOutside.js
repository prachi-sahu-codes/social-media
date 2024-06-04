import React, { useEffect, useRef } from "react";

const ClickOutside = ({ onClickOutside, children }) => {
  
  const boxRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        onClickOutside();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onClickOutside]);

  return <div ref={boxRef}>{children}</div>;
};

export default ClickOutside;
