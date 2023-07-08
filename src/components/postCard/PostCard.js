import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  FaRegHeart,
  FaHeart,
  FaRegComment,
  FaBookmark,
  FaRegBookmark,
} from "react-icons/fa";
import { HiOutlineShare } from "react-icons/hi";
import { BsFillSendFill } from "react-icons/bs";
import moment from "moment";
import { useAuth } from "../../context/authContext/AuthContext";
import { usePost } from "../../context/postContext/PostContext";
import { useUser } from "../../context/userContext/UserContext";
import { useNavigate } from "react-router";
import ClickOutside from "../clickOutside/ClickOutside";
import { PostModal } from "../postModal/PostModal";
import { useComment } from "../../context/commentContext/CommentContext";
import { UserComment } from "./component/UserComment";
import { PostContent } from "./component/PostContent";

export const PostCard = ({ post, noDetail }) => {
  const navigate = useNavigate();
  const { loggedUser, notifyToast } = useAuth();
  const { deletePost, likePost, dislikePost, newPostDispatch } = usePost();
  const { userData, bookmarkPost, removeBookmark, bookmarkArr } = useUser();
  const { addComment, editComment } = useComment();
  const [newComment, setNewComment] = useState("");
  const [commentId, setCommentId] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showPopupPost, setShowPopupPost] = useState(false);
  const [user, setUser] = useState({});

  const checkUser = loggedUser?.username !== post?.username;

  const formattedDate = moment(post?.createdAt).format("ddd MMM DD YYYY");

  const isLiked = !!post?.likes?.likedBy?.find(
    (person) => person?.username === loggedUser?.username
  );

  const isBookmarked = !!bookmarkArr?.find((postId) => postId === post?._id);

  const copyLinkHandler = () => {
    setShowModal(() => false);
    navigator.clipboard.writeText(
      `https://whizverse.netlify.app/posts/${post._id}`
    );
    notifyToast(
      "info",
      "Link copied! Share the post with your friends and followers!"
    );
  };

  useEffect(() => {
    if (post.username === loggedUser.username) {
      setUser(loggedUser);
    } else {
      const findUsername = userData?.find(
        (user) => user.username === post.username
      );
      setUser(findUsername);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post, userData]);

  const sendCommentHandler = () => {
    if (newComment.length > 0) {
      if (commentId) {
        editComment(post._id, commentId, newComment);
        setCommentId("");
      } else {
        addComment(post._id, newComment);
      }
    }
  };

  return (
    <div
      className="m-6 shadow-md bg-white rounded-lg p-3 sm570:p-6 w-64 sm360:w-80 sm450:w-96 sm570:w-30rem md840:w-36rem lg:w-30rem lg1120:w-36rem mx-auto dark:bg-black dark:text-white dark:shadow-shadowDark"
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
          {user?.profileImage ? (
            <img
              src={user?.profileImage}
              alt="profile pic"
              className="w-12 h-12 rounded-full border-2 border-solid border-primary cursor-pointer"
            />
          ) : (
            <img
              src="https://i.imgur.com/qMW3Cze.png"
              alt="profile pic"
              className="w-12 h-12 rounded-full border-2 border-solid border-primary cursor-pointer"
            />
          )}
          <div>
            <p className="font-semibold cursor-pointer text-black dark:text-white">
              {user?.username}
            </p>
            <p className="text-xs text-gray ">{formattedDate}</p>
          </div>
        </div>

        {checkUser ? (
          ""
        ) : (
          <div className="relative">
            <BsThreeDotsVertical
              className="text-xl cursor-pointer fill-black dark:fill-white"
              onClick={(e) => {
                setShowModal((s) => !s);
                e.stopPropagation();
              }}
            />

            <ClickOutside onClickOutside={() => setShowModal(() => false)}>
              <div
                className={`absolute top-6 right-2 shadow-md bg-slate-100 dark:bg-blackLightBg rounded-md p-1 ${
                  showModal ? "block" : "hidden"
                }`}
              >
                <button
                  className="py-1 px-4 text-left rounded-md text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-500 dark:hover:bg-black hover:bg-white active:bg-slate-50 w-full"
                  onClick={(e) => {
                    setShowPopupPost((prev) => !prev);
                    newPostDispatch({
                      type: "EDIT_POST",
                      payload: {
                        content: post?.content,
                        contentImage: post?.contentImage,
                        profileImage: post?.profileImage,
                      },
                    });
                    setShowModal(false);
                    e.stopPropagation();
                  }}
                >
                  Edit
                </button>
                <button
                  className="p-1 px-4 text-left text-black dark:text-white rounded-md hover:text-red-600 dark:hover:text-red-600 hover:bg-white dark:hover:bg-black active:bg-slate-50 w-full"
                  onClick={(e) => {
                    deletePost(post._id);
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

      <PostContent content={post?.content} image={post?.contentImage} />

      {post?.contentImage && (
        <div className="h-52 sm360:h-64 sm450:h-80 sm570:h-96 md840:h-30rem mt-2 sm570:mt-5 rounded-lg">
          <img
            src={post?.contentImage}
            alt="post pic"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      )}

      <div className="flex justify-between items-center mt-4 sm570:mt-5 text-lg ">
        {!isLiked ? (
          <div
            className="flex gap-2 cursor-pointer"
            onClick={(e) => {
              setShowModal(() => false);
              likePost(post?._id);
              e.stopPropagation();
            }}
          >
            <FaRegHeart className="fill-black dark:fill-white" />

            <span className="flex gap-1 text-sm text-black dark:text-white">
              {post?.likes?.likeCount}{" "}
              <span className="hidden sm570:block text-black dark:text-white ">
                Likes
              </span>
            </span>
          </div>
        ) : (
          <div
            className="flex gap-2 cursor-pointer"
            onClick={(e) => {
              setShowModal(() => false);
              dislikePost(post?._id);
              e.stopPropagation();
            }}
          >
            <FaHeart className="fill-primary" />
            <span className="flex gap-1 text-sm text-primary">
              {post?.likes?.likeCount}
              <span className="hidden sm570:block text-primary">Likes</span>
            </span>
          </div>
        )}

        <div
          className="flex gap-2 cursor-pointer"
          onClick={(e) => {
            setShowModal(() => false);
          }}
        >
          <FaRegComment className="fill-black dark:fill-white" />
          <span className="flex gap-1 text-sm text-black dark:text-white">
            {post?.comments?.length === 0 ? "" : post?.comments?.length}{" "}
            <span className="hidden sm570:block text-black dark:text-white">
              Comment
            </span>
          </span>
        </div>

        <div
          className="flex gap-2 cursor-pointer"
          onClick={(e) => {
            copyLinkHandler();
            e.stopPropagation();
          }}
        >
          <HiOutlineShare className="stroke-black dark:stroke-white" />
          <span className="hidden sm570:block text-sm text-black dark:text-white ">
            Share
          </span>
        </div>

        {!isBookmarked ? (
          <div
            className="flex gap-2 cursor-pointer"
            onClick={(e) => {
              setShowModal(() => false);
              bookmarkPost(post?._id);
              e.stopPropagation();
            }}
          >
            <FaRegBookmark className="fill-black dark:fill-white" />
            <span className="text-sm hidden sm570:block text-black dark:text-white">
              Bookmark
            </span>
          </div>
        ) : (
          <div
            className="flex gap-2 cursor-pointer"
            onClick={(e) => {
              setShowModal(() => false);
              removeBookmark(post?._id);
              e.stopPropagation();
            }}
          >
            <FaBookmark className="fill-black dark:fill-white" />
            <span className="hidden sm570:block text-sm text-black dark:text-white">
              Bookmark
            </span>
          </div>
        )}
      </div>

      <hr className="text-bgColorLoad mt-3 sm570:mt-5" />

      {noDetail && post?.comments?.length > 0 && (
        <div className="bg-slate-100 dark:bg-blackLightBg mt-3 sm570:mt-5 rounded-lg">
          <p className="pt-4 px-2 pb-4 text-black dark:text-white">Comments</p>
          <div>
            {post?.comments?.map((comment, index) => (
              <li key={index} className="list-none">
                <UserComment
                  comment={comment}
                  post={post}
                  setCommentId={setCommentId}
                  setNewComment={setNewComment}
                />
              </li>
            ))}
          </div>
        </div>
      )}

      <div
        className="flex rounded-full border-2 border-bgColorLoad dark:border-gray bg-slate-50 dark:bg-blackLightBg w-full mt-3 sm570:mt-5 pl-3 sm360:pl-6"
        onClick={(e) => e.stopPropagation()}
      >
        <input
          type="text"
          placeholder="Write your comment..."
          value={newComment}
          onChange={(e) => {
            setNewComment(() => e.target.value);
            e.stopPropagation();
          }}
          className="w-full py-2 bg-slate-50 dark:bg-blackLightBg outline-none text-black dark:text-white"
        />
        <button
          className="font-semibold text-lg bg-white dark:bg-black px-3 sm360:px-4 hover:opacity-80 rounded-r-full"
          onClick={() => {
            sendCommentHandler();
            setNewComment("");
          }}
        >
          <BsFillSendFill className="rotate-45 fill-primary" />
        </button>
      </div>

      {showPopupPost && (
        <PostModal post={post} setShowPopupPost={setShowPopupPost} />
      )}
    </div>
  );
};
