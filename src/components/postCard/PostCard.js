import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegHeart, FaHeart, FaRegComment } from "react-icons/fa";
import { HiOutlineShare, HiOutlineBookmark, HiBookmark } from "react-icons/hi";
import moment from "moment";
import { useAuth } from "../../context/authContext/AuthContext";

export const PostCard = ({ post }) => {
  const { loggedUser } = useAuth();
  console.log("loggedUser", loggedUser);
  console.log("post", post);
  const checkUser = loggedUser.username !== post.username;
  var formattedDate = moment(post?.createdAt).format("ddd MMM DD YYYY");

  return (
    <div className="m-6 shadow-md bg-white rounded-lg p-6 max-w-2xl mx-auto">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <img
            src={post.profileImage}
            alt="profile pic"
            className="w-12 h-12 rounded-full border-2 border-solid border-primary cursor-pointer"
          />
          <div>
            <p className="font-semibold cursor-pointer">{post.username}</p>
            <p className="text-xs text-gray">{formattedDate}</p>
          </div>
        </div>

        {checkUser ? (
          ""
        ) : (
          <BsThreeDotsVertical className="text-xl cursor-pointer" />
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

      <p className="mt-6">{post.content}</p>

      <div className="flex justify-between items-center mt-5 text-lg ">
        <div className="flex gap-2 cursor-pointer">
          {true ? <FaRegHeart /> : <FaHeart />}
          <span className="text-sm">{post.likes.likeCount} Likes</span>
        </div>

        <div className="flex gap-2 cursor-pointer">
          <FaRegComment />
          <span className="text-sm">
            {post.comments.length === 0 ? "" : post.comments.length} Comment
          </span>
        </div>

        <div className="flex gap-2 cursor-pointer">
          <HiOutlineShare />
          <span className="text-sm">Share</span>
        </div>

        <div className="flex gap-2 cursor-pointer">
          {true ? <HiOutlineBookmark /> : <HiBookmark />}
          <span className="text-sm">Bookmark</span>
        </div>
      </div>

      <hr className="text-bgColorLoad mt-5" />

      <input
        type="text"
        placeholder="Write your comment..."
        className="rounded-full bg-slate-50 w-full py-2 px-6 mt-5 border-2 border-bgColorLoad"
      />
    </div>
  );
};
