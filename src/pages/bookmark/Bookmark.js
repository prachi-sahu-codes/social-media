import React from "react";
import { bookmarkNow } from "../../assets";
import { useUser } from "../../context/userContext/UserContext";
import { PostCard } from "../../components/postCard/PostCard";
import { usePost } from "../../context/postContext/PostContext";

export const Bookmark = () => {
  const { postData } = usePost();
  const { bookmarkArr } = useUser();

  const finalBookmarkArr = postData.filter((arr) =>
    bookmarkArr.find((id) => id === arr._id)
  );

  return (
    <div className="w-full px-6 pb-14 pt-4 sm670:pt-6 sm670:pb-5 h-calc-nav overflow-x-hidden overflow-y-scroll bg-slate-50">
      {finalBookmarkArr.length !== 0 ? (
        <ul>
          {finalBookmarkArr.map((post) => (
            <li key={post._id}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-col items-center justify-center gap-10 py-7">
          <img src={bookmarkNow} alt="girl posting" className="w-3/5" />
          <h1 className="text-center text-2xl my-10 max-w-2xl m-auto  ">
            Your bookmark list is empty. Start saving to create your
            personalized collection!!
          </h1>
        </div>
      )}
    </div>
  );
};
