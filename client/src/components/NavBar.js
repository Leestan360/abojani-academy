import React from "react";
import { BsCart2, BsBell } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

function NavBar({ user }) {
  return (
    <div
      className="flex justify-between h-16 w-screen fixed bg-white"
      style={{ boxShadow: "0px 4px 9px 4px rgba(0, 0, 0, 0.25)" }}
    >
      <h3 className="ml-8 my-auto">
        <span
          style={{
            color: "rgb(109, 199, 122)",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "37px",
          }}
        >
          Abojani
        </span>{" "}
        <span
          style={{
            color: "rgb(241, 116, 37)",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "37px",
          }}
        >
          Academy
        </span>
      </h3>
      <div className="flex text-xl">
        <p className="mx-4 my-auto">
          {" "}
          <BsCart2 className="hover:text-green-500 cursor-pointer " />
        </p>
        <p className="mx-4 my-auto">
          <BsBell className="hover:text-orange-500 cursor-pointer" />
        </p>
        <p className="mr-12 ml-4 my-auto flex items-center text-2xl">
          <FaUser className="mr-1"/> {user.username}
        </p>
      </div>
    </div>
  );
}

export default NavBar;
