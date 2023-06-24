import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  FaRegHeart,
  FaHeart,
  FaRegComment,
  FaBookmark,
  FaRegBookmark,
} from "react-icons/fa";
import { HiOutlineShare } from "react-icons/hi";
import moment from "moment";
import { useAuth } from "../../context/authContext/AuthContext";
import { usePost } from "../../context/postContext/PostContext";
import { useUser } from "../../context/userContext/UserContext";
import { useNavigate } from "react-router";

export const PostCard = ({ post, noDetail }) => {
  const { loggedUser, notifyToast } = useAuth();
  const { likePost, dislikePost } = usePost();
  const { bookmarkPost, removeBookmark, bookmarkArr } = useUser();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const checkUser = loggedUser?.username !== post?.username;

  const formattedDate = moment(post?.createdAt).format("ddd MMM DD YYYY");

  const isLiked = !!post?.likes?.likedBy?.find(
    (person) => person?.username === loggedUser?.username
  );

  const isBookmarked = !!bookmarkArr?.find((postId) => postId === post?._id);

  const copyLinkHandler = () => {
    navigator.clipboard.writeText(
      `https://whizverse.netlify.app/post/${post._id}`
    );
    notifyToast(
      "info",
      "Link copied! Share the post with your friends and followers!"
    );
  };

  return (
    <div
      className="m-6 shadow-md bg-white rounded-lg p-6 max-w-2xl mx-auto"
      onClick={() => navigate(`/posts/${post._id}`)}
    >
      <div className="flex justify-between items-center">
        <div
          className="flex gap-3 items-center"
          onClick={(e) => {
            navigate(`/users/${post.username}`);
            e.stopPropagation();
          }}
        >
          <img
            src={post?.profileImage}
            alt="profile pic"
            className="w-12 h-12 rounded-full border-2 border-solid border-primary cursor-pointer"
          />
          <div>
            <p className="font-semibold cursor-pointer">{post?.username}</p>
            <p className="text-xs text-gray">{formattedDate}</p>
          </div>
        </div>

        {checkUser ? (
          ""
        ) : (
          <div className="relative">
            <BsThreeDotsVertical
              className="text-xl cursor-pointer"
              onClick={(e) => {
                setShowModal((s) => !s);
                e.stopPropagation();
              }}
            />
            <div
              className={`absolute top-6 right-2 shadow-md bg-slate-50 rounded-md p-3 ${
                showModal ? "block" : "hidden"
              }`}
            >
              <button
                className="py-1 px-4 text-left rounded-md hover:text-blue-500 hover:bg-white active:bg-slate-50 w-full"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                Edit
              </button>
              <button
                className="p-1 px-4 text-left rounded-md hover:text-red-600 hover:bg-white active:bg-slate-50 w-full"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                Delete
              </button>
            </div>
          </div>
        )}
      </div>

      {post?.contentImage && (
        <div className="h-96 mt-5 rounded-lg">
          <img
            src={post?.contentImage}
            alt="landscape"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      )}

      <p className="mt-6">{post?.content}</p>

      <div className="flex justify-between items-center mt-5 text-lg ">
        {!isLiked ? (
          <div
            className="flex gap-2 cursor-pointer"
            onClick={(e) => {
              likePost(post?._id);
              e.stopPropagation();
            }}
          >
            <FaRegHeart />

            <span className="text-sm">{post?.likes?.likeCount} Likes</span>
          </div>
        ) : (
          <div
            className="flex gap-2 cursor-pointer"
            onClick={(e) => {
              dislikePost(post?._id);
              e.stopPropagation();
            }}
          >
            <FaHeart className="fill-red-600" />
            <span className="text-sm">{post?.likes?.likeCount} Likes</span>
          </div>
        )}

        <div className="flex gap-2 cursor-pointer">
          <FaRegComment />
          <span className="text-sm">
            {post?.comments?.length === 0 ? "" : post?.comments?.length} Comment
          </span>
        </div>

        <div
          className="flex gap-2 cursor-pointer"
          onClick={(e) => {
            copyLinkHandler();
            e.stopPropagation();
          }}
        >
          <HiOutlineShare />
          <span className="text-sm">Share</span>
        </div>

        {!isBookmarked ? (
          <div
            className="flex gap-2 cursor-pointer"
            onClick={(e) => {
              bookmarkPost(post?._id);
              e.stopPropagation();
            }}
          >
            <FaRegBookmark />
            <span className="text-sm">Bookmark</span>
          </div>
        ) : (
          <div
            className="flex gap-2 cursor-pointer"
            onClick={(e) => {
              removeBookmark(post?._id);
              e.stopPropagation();
            }}
          >
            <FaBookmark />
            <span className="text-sm">Bookmark</span>{" "}
          </div>
        )}
      </div>

      <hr className="text-bgColorLoad mt-5" />

      {noDetail && post?.comments?.length > 0 && (
        <div className="bg-slate-50 mt-5 rounded-lg">
          <p className="pt-4 px-2">Comments</p>
          <div>
            {post?.comments?.map((comment, index) => (
              <li key={index} className="list-none py-6 px-2">
                <div className="flex gap-3 items-center">
                  <img
                    src={comment?.profileImage}
                    alt="profile pic"
                    className="w-12 h-12 rounded-full border-2 border-solid border-primary cursor-pointer"
                  />
                  <div>
                    <p className="font-semibold cursor-pointer">
                      {comment?.username}
                    </p>
                  </div>
                </div>
                <p className="p-2">{comment?.text}</p>
              </li>
            ))}
          </div>
        </div>
      )}

      <input
        type="text"
        placeholder="Write your comment..."
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="rounded-full bg-slate-50 w-full py-2 px-6 mt-5 border-2 border-bgColorLoad"
      />
    </div>
  );
};
