import React from "react";
import CommunityInformation from "./CommunityInformation.js";
import Courses from "./Courses";

function App() {
  return (
    <div>
      <p className="text-green-400">Project</p>
      <Courses />
      <CommunityInformation />
    </div>
  );
}

export default App;
