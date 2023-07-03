import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MdLogout } from "react-icons/md";
import { useUser } from "../../context/userContext/UserContext";
import { usePost } from "../../context/postContext/PostContext";
import { PostCard } from "../../components/postCard/PostCard";
import { useAuth } from "../../context/authContext/AuthContext";
import { ProfileModal } from "../../components/profileModal/ProfileModal";
import { FollowModal } from "../../components/followModal/FollowModal";

export const UserProfile = () => {
  const { username } = useParams();
  const { loggedUser, logoutHandler } = useAuth();
  const { userData, userDetail, getUserDetail, followUser, unfollowUser } =
    useUser();

  const { postData, singleUserPosts, getPostByUsername } = usePost();
  const [editModal, setEditModal] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [showfollowModal, setShowFollowModal] = useState(false);
  const [followModal, setFollowModal] = useState({
    title: "",
    arr: [],
  });

  const findUserDetail = userData?.find((user) => user.username === username);

  useEffect(() => {
    getUserDetail(username);
    getPostByUsername(username);
    const followUpdate = !!findUserDetail?.followers?.find(
      (user) => user?.username === loggedUser?.username
    );
    setIsFollowing(() => followUpdate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [findUserDetail, loggedUser, username, userData, postData]);

  const isUserLoggedUser = loggedUser.username === username;

  return (
    <div className="w-full py-7 px-6 pb-11 sm670:pb-5 h-calc-nav overflow-x-hidden overflow-y-scroll bg-slate-50">
      <img
        src={
          userDetail.profileImage
            ? userDetail.profileImage
            : "https://i.imgur.com/qMW3Cze.png"
        }
        alt="profile pic"
        className="hidden sm450:block w-32 sm450:h-32 sm450:-mb-20 rounded-full mx-auto bg-white shadow-lg"
      />

      <div className="m-6 shadow-md bg-white rounded-lg p-6 sm450:pt-16 w-64 sm360:w-80 sm450:w-96 sm570:w-30rem md840:w-36rem lg:w-30rem lg1120:w-36rem mx-auto">
        <div className="flex items-center justify-between sm450:hidden">
          <img
            src={
              userDetail.profileImage
                ? userDetail.profileImage
                : "https://i.imgur.com/qMW3Cze.png"
            }
            alt="profile pic"
            className="w-16 h-16 rounded-full bg-white border-2 border-primary shadow-lg"
          />
          <div className="">
            {isUserLoggedUser ? (
              <button
                className="px-3 pt-0.15rem border-2 border-primary hover:opacity-90 active:opacity-80 text-primary rounded-lg shadow-md"
                onClick={() => setEditModal((prev) => !prev)}
              >
                Edit
              </button>
            ) : (
              <div>
                {isFollowing ? (
                  <button
                    onClick={() => unfollowUser(findUserDetail?._id)}
                    className="px-2 pt-0.15rem border-2 border-primary hover:opacity-90 active:opacity-80 text-primary rounded-lg shadow-md"
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => followUser(findUserDetail?._id)}
                    className="px-3 py-1 pb-0.15rem border-none bg-primary hover:opacity-90 active:opacity-80 text-white rounded-lg shadow-md"
                  >
                    Follow
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="sm450:text-center py-4 sm450:p-4">
          <div className="flex items-center justify-between sm450:justify-center">
            <p className="text-lg font-bold">{userDetail.fullname}</p>
            <div className="sm670:hidden text-lg py-1 hover:opacity-80 active:opacity-50 rounded-md">
              <div
                onClick={() => logoutHandler()}
                className="font-semibold text-lg ml-2"
              >
                <MdLogout />
              </div>
            </div>
          </div>

          <p className="text-sm font-semibold text-primary">
            @{userDetail.username}
          </p>
        </div>
        <div className="flex gap-3">
          <div className="w-full text-center">
            <p className="text-xs font-bold uppercase text-mediumGray">Post</p>
            <p>{singleUserPosts?.length}</p>
          </div>
          <div
            className="w-full text-center"
            onClick={() => {
              setShowFollowModal((prev) => !prev);
              setFollowModal((prev) => ({
                ...prev,
                title: "Followers",
                arr: userDetail?.followers,
              }));
            }}
          >
            <p className="text-xs font-bold uppercase text-mediumGray">
              Followers
            </p>
            <p>{userDetail?.followers?.length}</p>
          </div>

          <div
            className="w-full text-center"
            onClick={() => {
              setShowFollowModal((prev) => !prev);
              setFollowModal((prev) => ({
                ...prev,
                title: "Followings",
                arr: userDetail?.following,
              }));
            }}
          >
            <p className="text-xs font-bold uppercase text-mediumGray">
              Followings
            </p>
            <p>{userDetail?.following?.length}</p>
          </div>
        </div>

        <hr className="text-bgColorLoad my-5" />

        <div className="flex gap-2 justify-between">
          <div>
            <p>{userDetail.bio}</p>
            <p className="text-sky-500">{userDetail.websiteLink}</p>
          </div>

          <div className="hidden sm450:block">
            {isUserLoggedUser ? (
              <button
                className="px-7 pt-0.15rem border-2 border-primary hover:opacity-90 active:opacity-80 text-primary text-lg rounded-lg shadow-md"
                onClick={() => setEditModal((prev) => !prev)}
              >
                Edit
              </button>
            ) : (
              <div>
                {isFollowing ? (
                  <button
                    onClick={() => unfollowUser(findUserDetail?._id)}
                    className="px-4 pt-0.15rem border-2 border-primary hover:opacity-90 active:opacity-80 text-primary text-lg rounded-lg shadow-md"
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => followUser(findUserDetail?._id)}
                    className="px-6 py-1 pb-0.15rem border-none bg-primary hover:opacity-90 active:opacity-80 text-white text-lg rounded-lg shadow-md"
                  >
                    Follow
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <ul>
        {singleUserPosts.length > 0 &&
          singleUserPosts?.map((post) => (
            <li key={post._id}>
              <PostCard post={post} />
            </li>
          ))}
      </ul>

      {showfollowModal && (
        <FollowModal
          followModal={followModal}
          setShowFollowModal={setShowFollowModal}
        />
      )}

      {editModal && (
        <ProfileModal user={userDetail} setEditModal={setEditModal} />
      )}
    </div>
  );
};
