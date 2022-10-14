import React from "react";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import { IoBookSharp } from "react-icons/io5";

function SideBar() {
  return (
    <div className="pt-16 fixed">
      <div
        className="flex flex-col h-screen bg-white shadow w-72 pt-20"
        style={{ backgroundColor: "rgb(109, 199, 122)" }}
      >
        <div className="space-y-3 w-72">
          <div className="flex-1 pt-12">
            <ul className="pt-2 pb-10 space-y-1 text-white">
              <li className="">
                <NavLink
                  to="/home"
                  className="flex items-center p-2 space-x-3 text-xl pl-12"
                >
                  <AiFillHome />
                  <span className="text-2xl">Home</span>
                </NavLink>
              </li>
              <li className="rounded-sm">
                <NavLink
                  to="/courses"
                  className="flex items-center p-2 space-x-3 text-xl pl-12"
                >
                  <IoBookSharp />
                  <span className="text-2xl">Courses</span>
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="/communities"
                  className="flex items-center p-2 space-x-3 text-xl mb-8 pl-12"
                >
                  <BsPeopleFill />
                  <span className="text-2xl">Communities</span>
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="/profile"
                  className="flex items-center p-2 pt-4 space-x-3 text-xl border-t-2 border-white pl-12"
                >
                  <FaUser className="mr-1" /> 
                  <span className="text-2xl">Profile</span>
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="/settings"
                  className="flex items-center p-2 space-x-3 text-xl pl-12"
                >
                  <AiFillSetting />
                  <span className="text-2xl">Settings</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
