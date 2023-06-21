import React from "react";
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

export const PostCard = ({ post }) => {
  const { loggedUser, notifyToast } = useAuth();
  const { likePost, dislikePost } = usePost();
  const { bookmarkPost, removeBookmark, bookmarkArr } = useUser();

  const checkUser = loggedUser.username !== post.username;

  const formattedDate = moment(post?.createdAt).format("ddd MMM DD YYYY");

  const isLiked = !!post?.likes?.likedBy?.find(
    (person) => person.username === loggedUser.username
  );

  const isBookmarked = !!bookmarkArr?.find((postId) => postId === post._id);

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
          {!isLiked ? (
            <div onClick={() => likePost(post._id)}>
              <FaRegHeart />
            </div>
          ) : (
            <FaHeart
              onClick={() => dislikePost(post._id)}
              className="fill-red-600"
            />
          )}
          <span className="text-sm">{post.likes?.likeCount} Likes</span>
        </div>

        <div className="flex gap-2 cursor-pointer">
          <FaRegComment />
          <span className="text-sm">
            {post.comments?.length === 0 ? "" : post.comments?.length} Comment
          </span>
        </div>

        <div
          className="flex gap-2 cursor-pointer"
          onClick={() => copyLinkHandler()}
        >
          <HiOutlineShare />
          <span className="text-sm">Share</span>
        </div>

        <div className="flex gap-2 cursor-pointer">
          {!isBookmarked ? (
            <FaRegBookmark onClick={() => bookmarkPost(post._id)} />
          ) : (
            <FaBookmark onClick={() => removeBookmark(post._id)} />
          )}
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
