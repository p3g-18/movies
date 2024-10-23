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

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <div className="absolute w-screen z-10 px-4 py-2 bg-gradient-to-b from-black flex justify-between ">
      <img
        className="w-40 h-16 sm:w-52 sm:h-24"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo"
      />
      {user && (
        <div
          className="flex p-2 items-center relative mx-10"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <p className="text-white">Hello,</p>{" "}
          <p className="px-2  text-red-900 font-bold cursor-pointer uppercase">
            {user.displayName}
          </p>
          <span className="cursor-pointer transform transition-transform duration-300 hover:rotate-180">
            🔻
          </span>
          {showDropdown && (
            <div className="absolute top-14 right-0 pr-10 my-5">
              <button
                className="w-full p-2 bg-red-700 rounded-full h-10 text-white ml-10 shadow-2xl"
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
