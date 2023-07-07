import React, { useEffect, useRef } from "react";
import { ColorRing } from "react-loader-spinner";
import { usePost } from "../../context/postContext/PostContext";
import { PostCard } from "../../components/postCard/PostCard";
import { useAuth } from "../../context/authContext/AuthContext";
import { SuggestionsBox } from "./component/SuggestionsBox";

export const Explore = () => {
  const {
    postData,
    getPostObserver,
    pageInfo,
    isLoading,
    pageNum,
    setPageNum,
  } = usePost();
  const { loggedUser } = useAuth();

  const loader = useRef(null);

  useEffect(() => {
    const elementRef = loader.current;
    const handleObserver = (entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        setPageNum((prev) => ++prev);
      }
    };
    const observer = new IntersectionObserver(handleObserver);
    if (elementRef) {
      observer.observe(elementRef);
    }
    return () => {
      observer.unobserve(elementRef);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (pageInfo?.totalPages >= pageNum || pageInfo === null) {
      getPostObserver(pageNum);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNum]);

  const filterLoggedUserPost = postData.filter(
    (post) => post.username !== loggedUser.username
  );

  return (
    <div className="w-full px-6 pb-14 pt-4 sm670:pt-6 sm670:pb-5 h-calc-nav overflow-x-hidden overflow-y-scroll bg-slate-100">
      <SuggestionsBox />

      <ul>
        {filterLoggedUserPost.map((post, index) => (
          <li key={index}>
            <PostCard post={post} />
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
      <div ref={loader}></div>
    </div>
  );
};
