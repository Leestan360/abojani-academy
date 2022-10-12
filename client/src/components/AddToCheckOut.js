import { Link} from "react-router-dom";
import Header from "./Header";

function AddToCheckOut() {
  return (
    <>

<main className="font-serif  grid place-items-center h-screen ">
            <div className="w-full">


               <div className="flex flex-col justify-center items-center my-0 mx-auto w-3/5   h-96 bg-slate-100 rounded-3xl  ">
                
                <div className="pt-10 pl-4">
                  
                  
                
                <div className="flex items-start mb-3 pb-5 pl-4">
                  <div className="pr-5 pt-5">
                  <h1 className="text-sm font-bold pb-2">Personal Finance Masterclass</h1>

                    <img src="https://raw.githubusercontent.com/Elvis-Munene/Abojani-Academy-web-app/master/assets/images/Rectangle1648.png" alt=""  width="330"  height="500"/>

                <h1 className="text-sm font-bold pt-2 ">Instructors</h1>
                <p className="text-xs">James Omwami,Paul Gadot</p>
                  </div>
                <div className="pl-14  w-fit  p-6 rounded-2xl mr-10 ">
                   <p style={{left: "1024px",top: "427px"}} className="text-black h-4 w-48 font-semibold pb-5 text-xs">Price</p>
                   <h1 className="h-10 text-lg top-96  pb-8 font-black">KES 25,000</h1>
                   <span   className="h-4 w-16 text-xs font-bold text-black"><p>Discount</p></span>
                   <p className="h-5,w-14 top-96 py-10 text-xs text-orange-600">25% off</p>

                    
                    <Link><button  className='bg-orange-500 text-white border-none p-2 rounded-md  w-40 h-10 text-sm cursor-pointer hover:bg-green-500 hover:text-black font-bold '>Add to Checkout</button></Link>
                </div>
                </div>
            </div>
          </div>  




            </div>
        </main>
   
   </>
  )
}

export default AddToCheckOut