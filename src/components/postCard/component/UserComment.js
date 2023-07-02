import React, { useState, useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useAuth } from "../../../context/authContext/AuthContext";
import { useUser } from "../../../context/userContext/UserContext";
import ClickOutside from "../../clickOutside/ClickOutside";
import { useComment } from "../../../context/commentContext/CommentContext";

export const UserComment = ({ comment, post, setCommentId, setNewComment }) => {
  const { loggedUser } = useAuth();
  const { userData } = useUser();
  const { deleteComment } = useComment();
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
    <div className="py-1 sm570:py-3 px-2">
      <div className="flex justify-between">
        <div className="flex gap-3 items-center">
          <img
            src={
              user?.profileImage
                ? user?.profileImage
                : "https://i.imgur.com/qMW3Cze.png"
            }
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
                    setCommentId(comment?._id);
                    setNewComment(comment?.text);
                    e.stopPropagation();
                  }}
                >
                  Edit
                </button>
                <button
                  className="p-1 px-4 text-left rounded-md hover:text-red-600 hover:bg-white active:bg-slate-50 w-full"
                  onClick={(e) => {
                    setCommentModal(false);
                    deleteComment(post?._id, comment?._id);
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
