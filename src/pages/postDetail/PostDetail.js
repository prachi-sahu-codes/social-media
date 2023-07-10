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
    <div className="w-full px-6 pb-14 pt-4 sm670:pt-6 sm670:pb-5 h-calc-nav overflow-x-hidden overflow-y-scroll bg-slate-100 dark:bg-blackLightBg">
      <PostCard post={postDetail} fullContent noDetail />
    </div>
  );
};
