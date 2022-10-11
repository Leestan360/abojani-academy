import React, { useState } from "react";
import pic2 from "./images/main-image-signup.png"

function SignupForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  // const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    // setErrors([]);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        password_confirmation: passwordConfirmation,
      }),
    })
    // .then((r) => {
    //   if (r.ok) {
    //     r.json().then((user) => onLogin(user));
    //   } else {
    //     r.json().then((err) => setErrors(err.errors));
    //   }
    // });
  }

  return (
    <div className="h-full w-full flex signup-form-div-one">

      <div className="w-2/4" >
        <img w-full src={pic2} alt="" />
      </div>

      <div className="signup-form-div-two w-2/4">
        <form onSubmit={handleSubmit} className="signup-form">
          <div >
            <input
              placeholder="Username"
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <input
              placeholder="Email"
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <input
              placeholder="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>

          <div>
            <input
              placeholder="Confirm password"
              type="password"
              id="password_confirmation"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              autoComplete="current-password"
            />
          </div>
          
          <button className="signup-form-btn" type="submit">Signup</button>
            
          {/* {errors.map((err) => (
            <Error key={err}>{err}</Error>
          ))} */}
          <p className="text-center mt-8 text-[#fff]">Already have an account? Login</p>
         </form>
      </div>

    </div>
    
  );
}
  
export default SignupForm;