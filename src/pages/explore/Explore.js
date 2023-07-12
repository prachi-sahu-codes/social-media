import React from "react";
import { ColorRing } from "react-loader-spinner";
import { usePost } from "../../context/postContext/PostContext";
import { PostCard } from "../../components/postCard/PostCard";
import { useAuth } from "../../context/authContext/AuthContext";
import { SuggestionsBox } from "./component/SuggestionsBox";

export const Explore = () => {
  const { postData, isLoading } = usePost();
  const { loggedUser } = useAuth();

  const filterLoggedUserPost = postData.filter(
    (post) => post.username !== loggedUser.username
  );

  return (
    <div className="w-full px-6 pb-14 pt-4 sm670:pt-6 sm670:pb-5 h-calc-nav overflow-x-hidden overflow-y-scroll bg-slate-100 dark:bg-blackLightBg">
      <SuggestionsBox />

      <ul>
        {filterLoggedUserPost.map((post, index) => (
          <li key={index}>
            <PostCard post={post} lessContent />
          </li>
        ))}
      </ul>
      {isLoading && (
        <div className="flex justify-center">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#cfcfcf", "#cfcfcf", "#cfcfcf", "#cfcfcf", "#cfcfcf"]}
          />
        </div>
      )}
    </div>
  );
};
