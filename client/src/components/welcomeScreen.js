import React from 'react';
import { NavLink } from 'react-router-dom';

function WelcomeScreen(){
  
  return(
    <div>
        <div className="h-full w-full flex welcome-screen-div-one">
          <div className="w-2/4 ">
            <img src="https://github.com/Elvis-Munene/Abojani-Academy-web-app/blob/main-page/assets/images/main-image-signup.png?raw=true" alt=""/>
          
          </div>
            <div className="bg-green-500 text-white w-2/4 h-screen  grid-rows-1 grid-cols-1 grid ">
            <div className="border border-black max-w-lg p-8 bg-white grid w-3/5 m-40 rounded-xl" >
              <h2 className=" w-36 h-10 left-5/6 top-56 text-3xl pb-5 text-black" >
                Welcome
              </h2>
              <h1 className="text-4xl font-semibold text-green-700 pb-8">Abojani <span className="text-amber-600">Academy</span></h1>
              <p className="text-2xl text-black pb-5 leading-6 ">
                We shorten the time between learning and investing and saving by connecting our clients
              </p>
              <NavLink to="/Log in"><button className="bg-amber-600 py-3 px-9 text-2xl rounded cursor-pointer shadow-slate-400 border-none m-2 ">Log in</button> </NavLink>
              <NavLink to="/Sign up"><button className="bg-white py-1 px-2 text-2xl rounded cursor-pointer text-amber-600 shadow-slate-400 border border-solid border-amber-600 m-0">Create Account</button></NavLink>
              
            </div>
          </div>
        </div>
      </div>
      
    


  )
}
export default WelcomeScreen;




