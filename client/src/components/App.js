import React from "react";
import Community from "./Community";
import Home from "./Home"
import Profile from "./Profile";
import SignupForm from "./signupForm";

function App() {

  return (
    <div>
      <Home/>
      <SignupForm/>
      <Community/>
      <Profile/>
    </div>
  )
}

export default App;