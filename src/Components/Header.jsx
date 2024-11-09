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

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [showDropdown, setShowDropdown] = useState(false);
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  //onAuthChange
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
    <div className="absolute w-screen z-10 px-4 py-2 bg-gradient-to-b from-black flex justify-between ">
      <img className="w-40 h-16 sm:w-52 sm:h-24" src={NetflixLogo} alt="Logo" />

      {user && (
        <div
          className="flex p-2 items-center relative mx-10"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className="bg-red-700 text-white p-2 mr-36 rounded-2xl hover:bg-opacity-50"
            onClick={handleGpt}
          >
            {showGptSearch ? "Home" : "GPTSearch"}
          </button>
          <div
            className="flex items-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <p className="text-white">Hello,</p>{" "}
            <p className="px-2  text-red-800 font-bold cursor-pointer uppercase">
              {user.displayName}
            </p>
            <span className="cursor-pointer transform transition-transform duration-300 hover:rotate-180">
              🔻
            </span>
            {showDropdown && (
              <div className="absolute top-[60%] right-0 bg-gray-800 p-4 mt-2 rounded-lg shadow-lg text-white z-10 w-48">
                {showGptSearch && (
                  <select
                    className="w-full bg-gray-700 p-2 rounded my-2"
                    onChange={handleLanguageChange}
                  >
                    {" "}
                    //language selection
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
                  onMouseEnter={handleMouseEnter}
                >
                  Signout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
