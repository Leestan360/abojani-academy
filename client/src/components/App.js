import React from "react";
import EnrolledCourse from "./EnrolledCourse";
import AddToCart from "./AddToCart";
import AddToCheckOut from "./AddToCheckOut";
import ConfirmPurchase from "./ConfirmPurchase";
import Purchased from "./Purchased";

{/* 
EnrolledCourse component---see figma on User viewing course details Enrolled course

AddToCart component---from User viewing course details and purchasing---see figma on User viewing course details

AddToCheckOut component--see figma User purchasing courses,course details and price

ConfirmPurchase component--see figma payment options in Buying a course checkout

Purchased component---from final transaction  "checkout"---see figma on Buying a course checkout
*/}

function App() {

  return (
    <div>
      <Purchased/>
    </div>
  )
}

export default App;