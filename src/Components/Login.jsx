import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const ToggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="relative min-h-screen bg-black md:bg-transparent">
      <Header />

      <div className=" hidden md:block  absolute inset-0 -z-10 ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_small.jpg"
          alt="backgroundImage"
          className="  w-full h-full object-cover "
        />
      </div>

      <div className="absolute inset-0 flex justify-center items-center p-4">
        <form className="bg-black p-8 rounded-lg w-full max-w-lg bg-opacity-70 sm:p-10 md:p-12">
          <div className="m-2 p-2">
            <h1 className="text-3xl text-red-700 font-bold sm:text-white sm:text-4xl p-4">
              {isSignIn ? "Sign In" : "Sign Up"}
            </h1>

            <input
              type="email"
              placeholder="Email"
              className="m-2 p-2 w-full bg-slate-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <input
              type="password"
              placeholder="Password"
              className="m-2 p-2 w-full bg-slate-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            {!isSignIn && (
              <input
                type="password"
                placeholder=" Confirm Password"
                className="m-2 p-2 w-full bg-slate-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            )}

            <button className="m-2 my-4 p-4 w-full bg-red-700 rounded-md font-bold text-white hover:bg-red-800 transition duration-300">
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>

            <p className="text-white m-2">
              {isSignIn ? "New to Netflix?" : "Already a user?"}
              <span
                className="hover:cursor-pointer hover:font-bold underline"
                onClick={ToggleSignInForm}
              >
                {isSignIn ? " Sign Up" : " Sign In"}
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
