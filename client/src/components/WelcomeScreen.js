import React from "react";
import { NavLink } from "react-router-dom";

function WelcomeScreen() {
  return (
    <div>

      <div className="h-screen w-full flex welcome-screen-div-one">
        <div className="w-2/4 h-screen">
          <img
          className="h-screen w-full"

            src="https://github.com/Elvis-Munene/Abojani-Academy-web-app/blob/main-page/assets/images/main-image-signup.png?raw=true"
            alt=""
          />
        </div>

        <div className="bg-green-500 text-white w-2/4 h-screen  grid-rows-1 grid-cols-1 grid place-items-center">
          <div className="border max-w-lg p-8 bg-white grid w-3/5 h-3/4 rounded-xl pt-10 px-10">

            <h2 className=" w-36 h-10 left-5/6 top-56 text-3xl pb-5 text-black">
              Welcome
            </h2>
            <h1 className="text-4xl font-semibold text-green-700 pb-8">
              Abojani <span className="text-amber-600">Academy</span>
            </h1>

            <p className="text-xl text-black pb-5 leading-6 ">
              We shorten the time between learning and investing and saving by
              connecting our clients
            </p>
            <NavLink to="/login">
              <button className="bg-amber-600 w-80 py-2 px-9 text-2xl rounded cursor-pointer shadow-slate-400 border-none my-2 mx-auto ">
                Log in
              </button>{" "}
            </NavLink>
            <NavLink to="/signup">
              <button className="bg-white w-80 py-2 px-2 text-2xl rounded cursor-pointer text-amber-600 shadow-slate-400 border border-solid border-amber-600 m-0">

                Create Account
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WelcomeScreen;
