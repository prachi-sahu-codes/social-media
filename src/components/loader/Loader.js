import React from "react";
import { ProgressBar } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div className="fixed bg-bgColorLoad z-40 top-0 left-0 bottom-0 right-0">
      <div className="absolute z-50 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <ProgressBar
          height="80"
          width="80"
          ariaLabel="progress-bar-loading"
          wrapperStyle={{}}
          wrapperClass="progress-bar-wrapper"
          borderColor="#151515"
          barColor="#DC2F02"
        />
      </div>
    </div>
  );
};
