import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { PostModal } from "../postModal/PostModal";
import { SearchUserModal } from "../searchUserModal/SearchUserModal";

export const Navbar = () => {
  const [newPostModal, setNewPostModal] = useState(false);
  const [userModal, setUserModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex items-center justify-between p-3 px-8 fixed top-0 left-0 right-0 z-10 bg-white shadow-md  drop-shadow-s">
      <div className="flex items-center active:opacity-80">
        <span className="cursor-pointer py-0 pt-0.5 px-2 rounded-lg text-lg text-white bg-primary mr-2 font-cursive">
          W
        </span>
        <span className="cursor-pointer text-xl font-cursive"> WhizVerse</span>
      </div>

      <div className="relative flex items-center mx-4 bg-slate-100 px-2 rounded-full">
        <FiSearch />
        <input
          type="text"
          placeholder="Search Users"
          value={searchTerm}
          className="px-2 bg-slate-100 py-1 w-16 sm390:w-40 sm570:w-60 outline-none"
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setUserModal(true);
          }}
        />
        {userModal && (
          <SearchUserModal
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            setUserModal={setUserModal}
          />
        )}
      </div>

      <button
        className="px-4 py-1 hidden sm670:block border-none bg-primary hover:opacity-90 active:opacity-80 text-white text-lg rounded-full"
        onClick={() => setNewPostModal((prev) => !prev)}
      >
        <span className="font-extrabold text-white text-xl"> &#xFF0B;</span>{" "}
        Create post
      </button>
      {newPostModal && <PostModal setShowPopupPost={setNewPostModal} />}
    </div>
  );
};
