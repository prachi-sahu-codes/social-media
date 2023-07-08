import React from "react";
import { MdCancel } from "react-icons/md";
import { SingleUser } from "./component/SingleUser";

export const FollowModal = ({ followModal, setShowFollowModal }) => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full bg-bgModal">
      <div className="absolute position-center">
        <div
          onClick={() => setShowFollowModal(false)}
          className="absolute z-10 -top-2 -right-2"
        >
          <MdCancel className="w-7 h-7 fill-primary bg-slate-50 dark:bg-black rounded-full" />
        </div>
        <div className="relative flex flex-col gap-4 max-w-2xl mx-auto bg-white dark:bg-black shadow-md rounded-lg p-6 ">
          <h1 className="font-bold text-xl text-black dark:text-white">
            {followModal?.title}
          </h1>
          <hr className="text-lightGray" />
          {followModal?.arr.length > 0 ? (
            <ul>
              {followModal?.arr.map((user) => (
                <li
                  key={user._id}
                  className="flex gap-3 justify-between items-center mb-5 w-60 pr-2"
                >
                  <SingleUser
                    user={user}
                    setShowFollowModal={setShowFollowModal}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <div>No {followModal?.title} yet</div>
          )}
        </div>
      </div>
    </div>
  );
};
