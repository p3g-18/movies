import React, { useState } from "react";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/Firebase";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <div className="absolute w-screen z-10 px-4 py-2 bg-gradient-to-b from-black flex justify-between ">
      <img
        className="w-52 h-24"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo"
      />
      {user && (
        <div className="flex p-2 items-center relative mx-10">
          <img
            src="https://xsgames.co/randomusers/avatar.php?g=pixel"
            alt="profile-icon"
            className="w-12 h-12 cursor-pointer"
            onMouseOver={toggleDropdown}
          />
          <span className="cursor-pointer">🔻</span>

          {showDropdown && (
            <div className="absolute top-14 right-0 pr-10 my-5 ">
              <button
                className=" w-full p-2 bg-red-700 rounded-full h-10 text-white ml-10 shadow-2xl "
                onClick={handleSignOut}
              >
                Signout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
