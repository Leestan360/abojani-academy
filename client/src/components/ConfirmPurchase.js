import { Link} from "react-router-dom";



function ConfirmPurchase() {
  return (
    <>


<main className="font-serif  grid place-items-center h-screen ">
            <div className="w-full">


               <div className="flex flex-col justify-center items-center my-0 mx-auto w-3/5   h-96 bg-slate-100 rounded-3xl  ">
                <div className="pt-10 pl-4">
                  <div className="w-3/5 mb-5  flex flex-row justify-evenly  bg-white rounded-2xl ">
                    <div className="p-1.5 ">
                      <img className="h-16" src="https://raw.githubusercontent.com/Elvis-Munene/Abojani-Academy-web-app/master/assets/images/profile.png" alt=""/>
                    </div>
                    <div className="p-2.5">
                      <h1 className='text-sm font-bold'>Investing Masterclass</h1>
                      <p className='text-xs'>Ezekiel Mbuvi,Mary Anne</p>
                    </div>

                    <div className="p-2.5">
                      <p className='text-xs'>Price</p>
                      <h1 className='font-bold'>50,000</h1>
                    </div>
                  </div>
                
                <div className="flex items-start mb-3 pb-5 pl-4">
                  <div className="pr-5 pt-5">
                    <img src="https://raw.githubusercontent.com/Elvis-Munene/Abojani-Academy-web-app/master/assets/images/Rectangle1648.png" alt=""/>
                  </div>
                <div className="pl-14  w-fit bg-white p-5 rounded-2xl mr-10 mt-5 h-70">
                   <p style={{left: "1024px",top: "427px"}} className="text-black h-4 w-48 font-semibold">Pay via</p>
                    <form action="" className="h-full py-4 rounded-xl">
                      <label for="" className='text-xs'>Enter Number</label><br/> 
                      <input  className=" p-1 border border-orange-500 rounded-lg" type="number"/>
                    </form>
                    <Link><button  className='bg-orange-500 text-white border-none p-2.5 rounded-md w-40 h-10 text-sm cursor-pointer hover:bg-green-500 hover:text-black font-bold '>Confirm Payment</button></Link>
                </div>
                </div>
            </div>
          </div>  




            </div>
        </main>


    </>
  )
}

export default ConfirmPurchase