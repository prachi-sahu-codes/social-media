import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useUser } from "../../context/userContext/UserContext";
import { usePost } from "../../context/postContext/PostContext";
import { PostCard } from "../../components/postCard/PostCard";

export const UserProfile = () => {
  const { username } = useParams();
  const { userData, userDetail, getUserDetail } = useUser();
  const { singleUserPosts, getPostByUsername } = usePost();

  const findUserDetail = userData?.find((user) => user.username === username);

  useEffect(() => {
    getUserDetail(findUserDetail?._id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [findUserDetail]);

  useEffect(() => {
    getPostByUsername(username);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full py-7 px-6 h-calc-nav overflow-x-hidden overflow-y-scroll bg-slate-50">
      <img
        src={userDetail.profileImage}
        alt="profile pic"
        className="w-32 h-32 rounded-full -mb-20 mx-auto"
      />

      <div className="m-6 shadow-md bg-white rounded-lg p-6 pt-16 max-w-2xl mx-auto">
        <div className="text-center p-4">
          <p className="text-lg font-bold">{userDetail.fullname}</p>
          <p className="text-sm font-semibold text-primary">
            @{userDetail.username}
          </p>
        </div>
        <div className="flex gap-3">
          <div className="w-full text-center">
            <p className="text-xs font-bold uppercase text-mediumGray">Post</p>
            <p>{singleUserPosts?.length}</p>
          </div>
          <div className="w-full text-center">
            <p className="text-xs font-bold uppercase text-mediumGray">
              Followers
            </p>
            <p>{userDetail?.followers?.length}</p>
          </div>
          <div className="w-full text-center">
            <p className="text-xs font-bold uppercase text-mediumGray">
              Followings
            </p>
            <p>{userDetail?.following?.length}</p>
          </div>
        </div>

        <hr className="text-bgColorLoad my-5" />
        <p>{userDetail.bio}</p>
        <div className="flex justify-between">
          <p className="text-sky-500">{userDetail.websiteLink}</p>
          <button className="px-6 py-1 pb-0.15rem border-none bg-primary hover:opacity-90 active:opacity-80 text-white text-lg rounded-lg shadow-md border-none">
            Follow
          </button>
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
    </div>
  );
};
