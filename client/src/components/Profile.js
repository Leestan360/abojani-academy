import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import pic3 from "./images/Screenshot.png"

function Profile(){
    const navigate = useNavigate()
    const [user, setUser] = useState(null);

    useEffect(() => {
      fetch("/me").then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user));
        }
      });
    }, []);

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
            navigate("/login");
          }
        });
      }

    return(
        <div className="grid place-items-center px-auto pt-32 pl-72">
            <div className="w-96 bg-[#e7e7e7] h-[400px] rounded-lg profile-div">
                <img className="w-1/4 rounded-full my-8" src={pic3} alt="" />
                <div className="flex flex-col justify-center items-center">
                    <p className="mb-4 text-2xl font-bold"></p>
                    <p className="mb-4"></p>
                    <button className="center mt-12 px-6 py-3 bg-[#f17425] rounded-md text-[#fff]" onClick={handleLogoutClick}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Profile