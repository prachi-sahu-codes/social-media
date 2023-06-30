import React, { useState, useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useAuth } from "../../../context/authContext/AuthContext";
import { useUser } from "../../../context/userContext/UserContext";
import ClickOutside from "../../clickOutside/ClickOutside";

export const UserComment = ({ comment }) => {
  const { loggedUser } = useAuth();
  const { userData } = useUser();
  const [user, setUser] = useState({});
  const [commentModal, setCommentModal] = useState(false);

  const checkUser = loggedUser?.username !== comment?.username;

  useEffect(() => {
    if (comment.username === loggedUser.username) {
      setUser(loggedUser);
    } else {
      const findUsername = userData?.find(
        (user) => user.username === comment.username
      );
      setUser(findUsername);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comment, userData]);
  return (
    <div className="py-4 px-2">
      <div className="flex justify-between">
        <div className="flex gap-3 items-center">
          <img
            src={user?.profileImage}
            alt="profile pic"
            className="w-12 h-12 rounded-full border-2 border-solid border-primary cursor-pointer"
          />
          <div>
            <p className="font-semibold cursor-pointer">{comment?.username}</p>
          </div>
        </div>
        {checkUser ? (
          ""
        ) : (
          <div className="relative">
            <BsThreeDotsVertical
              className="text-xl cursor-pointer"
              onClick={(e) => {
                setCommentModal((prev) => !prev);
                e.stopPropagation();
              }}
            />
            <ClickOutside onClickOutside={() => setCommentModal(() => false)}>
              <div
                className={`absolute top-6 right-2 shadow-md bg-slate-100 rounded-md p-1 ${
                  commentModal ? "block" : "hidden"
                }`}
              >
                <button
                  className="py-1 px-4 text-left rounded-md hover:text-blue-500 hover:bg-white active:bg-slate-50 w-full"
                  onClick={(e) => {
                    setCommentModal(false);
                    e.stopPropagation();
                  }}
                >
                  Edit
                </button>
                <button
                  className="p-1 px-4 text-left rounded-md hover:text-red-600 hover:bg-white active:bg-slate-50 w-full"
                  onClick={(e) => {
                    setCommentModal(false);
                    e.stopPropagation();
                  }}
                >
                  Delete
                </button>
              </div>
            </ClickOutside>
          </div>
        )}
      </div>

      <p className="p-2">{comment?.text}</p>
    </div>
  );
};
