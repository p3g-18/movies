import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { Language, NetflixLogo } from "../utils/Constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import { useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((state) => state.user);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const handleGpt = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen z-10 px-4 py-2 bg-gradient-to-b from-black flex justify-between items-center">
      <img
        className="w-32 h-16 sm:w-60 sm:h-24 object-cover"
        src="/assets/logo5.png"
        loading="lazy"
        alt="Logo"
      />

      {user && (
        <>
          <div className="md:hidden     ">
            <button
              className="text-white text-2xl 0"
              onClick={() => setShowHamburgerMenu(!showHamburgerMenu)}
            >
              ☰
            </button>
            {showHamburgerMenu && (
              <div className="absolute top-[100%] right-4 bg-gray-800 p-4 rounded-lg shadow-lg text-white w-60 z-50">
                <p className="text-white mb-2">Hello, {user.displayName}</p>
                <button
                  className="w-full bg-gradient-to-l from-sky-500 via-slate-500 to-red-700 p-2 rounded text-white hover:bg-red-600 mb-2"
                  onClick={handleGpt}
                >
                  {showGptSearch ? "Home" : "GPTSearch"}
                </button>

                {showGptSearch && (
                  <select
                    className="w-full bg-gray-700 p-2 rounded mb-2 "
                    onChange={handleLanguageChange}
                  >
                    {Language.map((lang) => (
                      <option key={lang.identifier} value={lang.identifier}>
                        {lang.name}
                      </option>
                    ))}
                  </select>
                )}
                <button
                  className="w-full bg-red-700 p-2 rounded text-white hover:bg-red-600"
                  onClick={handleSignOut}
                >
                  Signout
                </button>
              </div>
            )}
          </div>

          <div
            className="hidden md:flex p-2 items-center relative mx-10 "
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="bg-gradient-to-l from-sky-500 via-slate-500 to-red-700  text-white p-2 mr-4 rounded-2xl hover:bg-opacity-50"
              onClick={handleGpt}
            >
              {showGptSearch ? "Home" : "GPTSearch"}
            </button>
            <div className="flex items-center">
              <p className="text-white">Hello,</p>
              <p className="px-2 text-red-800 font-bold cursor-pointer uppercase">
                {user.displayName}
              </p>
              <span className="cursor-pointer transform transition-transform duration-300 hover:rotate-180">
                🔻
              </span>
              {showDropdown && (
                <div className="absolute top-[80%] -right-4 bg-gray-800 p-4 mt-2 rounded-lg shadow-lg text-white  z-10 w-48 ">
                  {showGptSearch && (
                    <select
                      className="w-full bg-gray-700 p-2 rounded my-2"
                      onChange={handleLanguageChange}
                    >
                      {Language.map((lang) => (
                        <option key={lang.identifier} value={lang.identifier}>
                          {lang.name}
                        </option>
                      ))}
                    </select>
                  )}
                  <button
                    className="w-full bg-gradient-to-l from-sky-500 via-slate-500 to-red-700  p-2 rounded text-white hover:bg-red-600"
                    onClick={handleSignOut}
                  >
                    Signout
                  </button>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
