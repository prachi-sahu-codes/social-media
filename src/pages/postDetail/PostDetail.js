import React from "react";
import { useParams } from "react-router";
import { usePost } from "../../context/postContext/PostContext";
import { useEffect } from "react";
import { PostCard } from "../../components/postCard/PostCard";

export const PostDetail = () => {
  const { postId } = useParams();
  const { postData, postDetail, getPostDetail } = usePost();

  useEffect(() => {
    getPostDetail(postId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postData]);

  return (
    <div className="w-full py-7 px-6 h-calc-nav overflow-x-hidden overflow-y-scroll bg-slate-50">
      <PostCard post={postDetail} noDetail />
    </div>
  );
};
