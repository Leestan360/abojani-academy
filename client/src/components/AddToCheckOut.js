import { Link} from "react-router-dom";
import Header from "./Header";

function AddToCheckOut() {
  return (
    <>
   
<Header/>
    <main className="m-8 font-serif ">
    <div className="mr-8 w-4/5 h-40 ">

        <div className="bg-slate-100 pl-56 ml   ">
          <div className="picture-price">
          <div>
            <h1>Personal Finance Masterclass</h1>
            <div className="pt-2.5 pb-1 ">
              <img src="https://raw.githubusercontent.com/Elvis-Munene/Abojani-Academy-web-app/master/assets/images/Rectangle%209.png" alt="" class="img-marketting"/>
            </div>
              <div>
                <h1>Instructors</h1>
                <p>James Omwami,Paul Gadot</p>
            </div>
          </div>
          <div className="pr-36  ">
            <span  style={{left:"1015"}} className='h-5 w-10 top-80 p-5 font-black'><p>Price</p></span>
            <span className="h-10 w-44 top-96 p-5 font-black"><h1>KES 25,000</h1></span>
            <span   className="h-4 w-16 p-5 text-black"><p>Discount</p></span>

            <span className="h-5,w-14 top-96 p-5 text-red-600"><p>25% off</p></span>
            <div className="p-0">
              <Link style={{boxShadow: "0px 4px 4px 0px #00000040"}} className="bg-orange-600 text-white px-2.5 py-5 rounded-2xl border-none cursor-pointer hover:bg-green-600 hover:text-black">Add to Checkout</Link>
            </div>
          </div>
        </div>


        </div>
       
    </div>

</main></>
  )
}

export default AddToCheckOut