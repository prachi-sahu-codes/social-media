import React from "react";
import { useParams } from "react-router";

export const PostDetail = () => {
  const { postId } = useParams();

  return (
    <div className="w-full py-7 px-6 h-calc-nav overflow-x-hidden overflow-y-scroll bg-slate-50">
      PostDetail {postId}
    </div>
  );
};
