import React from "react";
import { MdCancel } from "react-icons/md";
import { useNavigate } from "react-router";

export const FollowModal = ({ followModal, setShowFollowModal }) => {
  const navigate = useNavigate();
  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full bg-bgModal">
      <div className="absolute position-center">
        <div
          onClick={() => setShowFollowModal(false)}
          className="absolute z-10 -top-2 -right-2"
        >
          <MdCancel className="w-7 h-7 fill-primary bg-slate-50 rounded-full" />
        </div>
        <div className="relative flex flex-col gap-4 max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6 ">
          <h1 className="font-bold text-xl">{followModal?.title}</h1>
          <hr className="text-lightGray" />
          {followModal?.arr.length > 0 ? (
            <ul>
              {followModal?.arr.map(
                ({ _id, profileImage, fullname, username }) => (
                  <li
                    key={_id}
                    className="flex gap-3 justify-between items-center mb-5 w-60 pr-2"
                  >
                    <div className="flex gap-3 items-center">
                      <img
                        src={profileImage}
                        alt="profile pic"
                        className="w-10 h-10 rounded-full border-2 border-solid border-primary cursor-pointer"
                        onClick={() => {
                          navigate(`/users/${username}`);
                          setShowFollowModal(false);
                        }}
                      />
                      <div>
                        <p className=" text-sm cursor-pointer">{fullname}</p>
                        <p className="text-xs text-gray">@{username}</p>
                      </div>
                    </div>
                  </li>
                )
              )}
            </ul>
          ) : (
            <div>No {followModal?.title} yet</div>
          )}{" "}
        </div>
      </div>
    </div>
  );
};
