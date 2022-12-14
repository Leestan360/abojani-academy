import React from "react";
import { Route, Routes } from "react-router-dom";
import Community from "./Community";
import Home from "./Home";
import NavBar from "./NavBar";
import Profile from "./Profile";
import SideBar from "./SideBar";
import Courses from "./Courses";

function HomeNavSide({ user, setUser }) {
  return (
    <div>
      <NavBar user={user} />
      <div>
        <SideBar />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/courses" element={<Courses />} />
          <Route exact path="/communities" element={<Community />} />
          <Route
            exact
            path="/profile"
            element={<Profile user={user} setUser={setUser} />}
          />
          {/* <Route exact path="/settings" element={< />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default HomeNavSide;
