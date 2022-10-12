import React, { useEffect, useState } from "react";
import Login from "./Login";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

function App() {
  const [user, setUser] = useState(null);


  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);


  if (!user) return <Login onLogin={setUser} />;
  return (
    <div>
      {/* <NavBar />
      <div>
      <SideBar />
      </div> */}
      <Login />
    </div>
  )
}

export default App;