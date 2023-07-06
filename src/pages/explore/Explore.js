import React, { useEffect, useRef, useState } from "react";
import { usePost } from "../../context/postContext/PostContext";
import { PostCard } from "../../components/postCard/PostCard";
import { useAuth } from "../../context/authContext/AuthContext";
import { SuggestionsBox } from "./component/SuggestionsBox";
import { useLocation } from "react-router";

export const Explore = () => {
  const location = useLocation();
  const { postData, getPostObserver, pageInfo } = usePost();
  const { loggedUser } = useAuth();
  const [pageNum, setPageNum] = useState(0);

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
  }, []);

  useEffect(() => {
    if (pageInfo?.totalPages >= pageNum || pageInfo === null) {
      getPostObserver(pageNum);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, pageNum]);

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
      <div ref={loader}></div>
    </div>
  );
};
