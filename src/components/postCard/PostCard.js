import React from "react";

export const PostCard = ({ post }) => {
  return (
    <>
      <div className="flex">
        <img src={post.image} alt="profile pic" className="w-10 rounded-full" />
        <p>{post.username}</p>
      </div>
      <p>{post.content}</p>
    </>
  );
};
