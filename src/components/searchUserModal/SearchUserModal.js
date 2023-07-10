import React from "react";
import { useNavigate } from "react-router";
import { useUser } from "../../context/userContext/UserContext";
import { BsXLg } from "react-icons/bs";

export const SearchUserModal = ({
  searchTerm,
  setSearchTerm,
  setUserModal,
}) => {
  const navigate = useNavigate();
  const { userData } = useUser();

  const foundUsers =
    searchTerm.length > 0 &&
    userData.filter(
      (user) =>
        user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.fullname.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const reset = () => {
    setSearchTerm("");
    setUserModal(false);
  };

  return (
    <div className="absolute top-11 -left-48 sm390:-left-28 sm570:-left-2 bg-white dark:bg-blackLightBg dark:border-black dark:border-2 px-8 py-4 pt-8 shadow-lg rounded-md max-h-96 overflow-x-hidden overflow-y-scroll">
      <div className="absolute right-4 top-3" onClick={() => reset()}>
        <BsXLg className="fill-black dark:fill-white" />
      </div>
      {foundUsers.length > 0 && searchTerm.length > 0 ? (
        <ul>
          {foundUsers.map(({ _id, fullname, username, profileImage }) => (
            <li
              key={_id}
              className="flex gap-3 justify-between items-center mb-5 w-60 pr-2"
            >
              <div
                className="flex gap-3 items-center"
                onClick={() => {
                  navigate(`/users/${username}`);
                  reset();
                }}
              >
                <img
                  src={profileImage}
                  alt="profile pic"
                  className="w-10 h-10 rounded-full border-2 border-solid border-primary cursor-pointer"
                />
                <div>
                  <p className=" text-sm cursor-pointer text-black dark:text-white">
                    {fullname}
                  </p>
                  <p className="text-xs text-gray cursor-pointer">
                    @{username}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="w-60 text-black dark:text-white">No users found</div>
      )}
    </div>
  );
};
