import React from "react";
import { usePost } from "../../context/postContext/PostContext";
import { PostCard } from "../../components/postCard/PostCard";
import { useAuth } from "../../context/authContext/AuthContext";
import { postNow } from "../../assets";

export const Feed = () => {
  const { postData } = usePost();
  const { loggedUser } = useAuth();

  const loggedUserFollowers = loggedUser.followers.map(
    (person) => person.username
  );

  const filterLoggedUserPost = postData.filter(
    (post) =>
      post.username === loggedUser.username ||
      loggedUserFollowers.includes(post.username)
  );

  const sortedFeedData = filterLoggedUserPost.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <div className="w-full py-7 px-6 h-calc-nav overflow-x-hidden overflow-y-scroll bg-slate-50">
      {sortedFeedData.length !== 0 ? (
        <ul>
          {sortedFeedData.map((post) => (
            <li key={post._id}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-col items-center justify-center gap-10 py-7">
          <img src={postNow} alt="girl posting" className="w-96" />
          <h1 className="text-xl font-semibold max-w-2xl text-center">
            No posts yet. Start sharing your own creations and follow other
            artists to see their amazing posts!!
          </h1>
        </div>
      )}
    </div>
  );
};
