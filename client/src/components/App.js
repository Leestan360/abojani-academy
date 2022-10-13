import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import HomeNavSide from "./HomeNavSide";
import Login from "./Login";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import SignupForm from "./signupForm";
import WelcomeScreen from "./welcomeScreen";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  // if (!user) return <Login onLogin={setUser} />;
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<WelcomeScreen />} />
        if (!user) return{" "}
        <Route exact path="/login" element={<Login onLogin={setUser} />} />
        <Route
          exact
          path="/signup"
          element={<SignupForm onLogin={setUser} />}
        />
      </Routes>
      <HomeNavSide />
    </div>
  );
}

export default App;
