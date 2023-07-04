import React, { useEffect, useRef, useState } from "react";

export const PostContent = ({ content, image }) => {
  const cardRef = useRef(null);
  const [isContentOverflowing, setIsContentOverflowing] = useState(false);
  const [hideFullContent, setHideFullContent] = useState(true);

  useEffect(() => {
    const cardElement = cardRef.current;
    const cardWidth = cardElement.offsetWidth;

    const excludedCharsRegex = /[,'".]/g;
    const cleanLine = content?.replace(excludedCharsRegex, "");
    console.log(cleanLine?.length, cardWidth / 7.6);
    setIsContentOverflowing(cleanLine?.length > cardWidth / 7.6 + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`mt-4 sm570:mt-6 ${hideFullContent && "flex items-center"}`}
    >
      <span
        ref={cardRef}
        className={`w-calc-content ${
          hideFullContent && "whitespace-nowrap overflow-hidden text-ellipsis"
        }`}
      >
        {content}
      </span>

      {isContentOverflowing && (
        <span
          onClick={(e) => {
            setHideFullContent((prev) => !prev);
            e.stopPropagation();
          }}
          className={`w-20 text-primary cursor-pointer `}
        >
          {" "}
          Show {hideFullContent ? "more" : "less"}
        </span>
      )}
    </div>
  );
};