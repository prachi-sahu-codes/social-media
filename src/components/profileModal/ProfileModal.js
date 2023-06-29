import React, { useState } from "react";
import { MdCancel } from "react-icons/md";
import { BsFillCameraFill } from "react-icons/bs";
import { useUser } from "../../context/userContext/UserContext";
import { Avatar } from "./component/Avatar";

export const ProfileModal = ({ user, setEditModal }) => {
  const { editProfile } = useUser();
  const [formDetails, setFormDetails] = useState({
    fullname: user.fullname,
    profileImage: user.profileImage,
    bio: user.bio,
    websiteLink: user.websiteLink,
  });
  const [showAvatar, setShowAvatar] = useState(false);

  const updateHandler = () => {
    editProfile(formDetails);
    setEditModal(false);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    if (value.length <= 150) {
      setFormDetails((prev) => ({ ...prev, bio: value }));
    }
    setFormDetails((prev) => ({ ...prev, bio: event.target.value }));
  };

  console.log(typeof formDetails.profileImage);

  return (
    <div
      className="fixed top-0 left-0 z-50 w-full h-full bg-bgModal"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="absolute p-6 position-center w-80 bg-white rounded-lg">
        <div
          onClick={() => setEditModal(false)}
          className="absolute -top-2 -right-2"
        >
          <MdCancel className="w-7 h-7 fill-primary bg-slate-50 rounded-full" />
        </div>

        <h2 className="font-bold text-xl pb-4">Edit Profile</h2>

        <div className="relative mb-5">
          <img
            src={
              formDetails.profileImage
                ? formDetails.profileImage
                : "https://i.imgur.com/qMW3Cze.png"
            }
            alt="profile pic"
            className="w-24 h-24 rounded-full mx-auto bg-white border-2 border-primary"
            onClick={() => setShowAvatar((prev) => !prev)}
          />
          <div className="bg-white rounded-full absolute bottom-0 border-2 border-primary right-24">
            <BsFillCameraFill className="fill-primary text-md m-1 " />
          </div>
        </div>

        <label htmlFor="fullname" className="font-semibold">
          Full Name :
        </label>
        <input
          type="text"
          id="fullname"
          value={formDetails.fullname}
          onChange={(e) =>
            setFormDetails((prev) => ({ ...prev, fullname: e.target.value }))
          }
          className="block border-2 border-lightGray mb-3 w-full rounded-md p-1 px-3"
        />

        <p className="font-semibold">Bio :</p>
        <textarea
          maxLength="150"
          onChange={handleChange}
          value={formDetails.bio}
          className="border-2 border-lightGray p-1 px-3 h-28"
        ></textarea>
        <p className="text-mediumGray text-sm -mb-2 -mt-1 text-right">
          Characters : ( {150 - formDetails.bio.length}/150 )
        </p>

        <label htmlFor="website" className="font-semibold">
          Website :
        </label>
        <input
          type="text"
          id="website"
          value={formDetails.websiteLink}
          onChange={(e) =>
            setFormDetails((prev) => ({ ...prev, websiteLink: e.target.value }))
          }
          className="block border-2 border-lightGray mb-5 w-full rounded-md p-1 px-3"
        />

        <div className="text-right">
          <button
            className="w-24 py-1 pb-0.15rem border-none bg-primary hover:opacity-90 active:opacity-80 text-white text-lg rounded-full shadow-md"
            onClick={updateHandler}
          >
            Update
          </button>
        </div>
      </div>
      {showAvatar && (
        <Avatar setShowAvatar={setShowAvatar} setFormDetails={setFormDetails} />
      )}
    </div>
  );
};
