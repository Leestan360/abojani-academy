import React from "react";

function NavBar() {
  return (
    <div
      className="flex justify-between h-16 w-screen fixed"
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
        <p className="mx-4 my-auto">Cart</p>
        <p className="mx-4 my-auto">Notifications</p>
        <p className="mr-24 ml-4 my-auto">User</p>
      </div>
    </div>
  );
}

export default NavBar;
