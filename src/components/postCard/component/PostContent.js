import React, { useEffect, useRef, useState } from "react";

export const PostContent = ({ content, image }) => {
  const cardRef = useRef(null);
  const [isContentOverflowing, setIsContentOverflowing] = useState(false);
  const [hideFullContent, setHideFullContent] = useState(true);

  useEffect(() => {
    const cardElement = cardRef?.current;
    const cardWidth = cardElement?.offsetWidth;

    const excludedCharsRegex = /[,'".]/g;
    const cleanLine = content?.replace(excludedCharsRegex, "");

    setIsContentOverflowing(cleanLine?.length > cardWidth / 7.6 + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mt-4 sm570:mt-6">
      {image ? (
        <div className={`${hideFullContent && "flex items-center"}`}>
          <span
            ref={cardRef}
            className={`w-calc-content ${
              hideFullContent &&
              "whitespace-nowrap overflow-hidden text-ellipsis"
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
      ) : (
        <div>
          <span
            className={`${
              content?.length > 220 &&
              hideFullContent &&
              " block h-36 sm360:h-7.5rem sm450:h-24 sm570:h-4.5rem overflow-y-hidden"
            }`}
          >
            {content}
          </span>
          {content?.length > 220 && (
            <span
              onClick={(e) => {
                setHideFullContent((prev) => !prev);
                e.stopPropagation();
              }}
              className={`text-primary cursor-pointer flex flex-wrap`}
            >
              {" "}
              Show {hideFullContent ? "more" : "less"}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
