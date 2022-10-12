import {BsLock,BsPlayCircle}from  'react-icons/bs';
import Header from './Header';




function AddToCart(){
  return (
    <>
 <Header/>

  <main className="mt-8 font-serif">
            <div className="mr-8 w-11/12 h-fit">
                <div className="flex justify-between p-5 gap-12 w-full">
                  <div>
                    <img src="https://raw.githubusercontent.com/Elvis-Munene/Abojani-Academy-web-app/master/assets/images/Rectangle%2010.png" alt="" />
                    <div >
                      <h1 className='text-lg pt-2.5 font-bold'>Real Estate Masterclass</h1> 
                      <p className='text-xs leading-4'>Get accurate information on 6000+ stocks including all the companies in the S&P 500 index.</p>
                      <p className='text-xs leading-4'>See stock prices, news, financials, forecasts, charts, and more.</p> 
                      <div className="flex gap-20">
                        <div>
                          <h3 className='font-bold'>Instructors</h3>
                          <p className='text-xs leading-4'>James Omwami, Paul Gadot</p>
                        </div>
                        
                        <div >
                          <h3 className="font-bold">Enrolled Students</h3>
                          <p className='text-xs leading-4'>5k +</p>
                        </div>
                      </div> 

                      <h4 className="font-bold">Price</h4> 
                      <h3  className="text-sm font-bold" >KES 100,000</h3> 
                      <button className='bg-orange-500 text-white border-none p-2.5 rounded-md w-40 h-10 text-sm cursor-pointer hover:bg-green-500 hover:text-black font-bold '>Purchase this course</button>

                    </div>
                  </div>

                  <div>
                    <h1 className='pb-5 text-lg font-bold'>What you'll learn</h1>
                    <div className="bg-slate-100 h-fit rounded-lg p-1.5 mr-15">
                      <div className="flex justify-between bg-white m-2.5 w-96 p-4 rounded-md ">
                        <div>
                          <h3 className='pb-2 font-bold text-sm'>01. What is S&P Index?</h3>
                          < BsPlayCircle/><p className='text-xs font-thin'> 10 Mins</p>
                        </div>
                        <p>< BsLock/></p>
                      </div>

                      <div className="bg-slate-100 h-fit rounded-lg p-1.5 mr-15">
                      <div className="flex justify-between bg-white m-2.5 w-96 p-4 rounded-md ">
                        <div>
                          <h3 className='pb-2 font-bold text-sm'>01. What is S&P Index?</h3>
                          < BsPlayCircle/><p className='text-xs font-thin'> 10 Mins</p>
                        </div>
                        <p>< BsLock/></p>
                      </div>
                      </div>

                      <div className="bg-slate-100 h-fit rounded-lg p-1.5 mr-15">
                      <div className="flex justify-between bg-white m-2.5 w-96 p-4 rounded-md ">
                        <div>
                          <h3 className='pb-2 font-bold text-sm'>01. What is S&P Index?</h3>
                          < BsPlayCircle/><p className='text-xs font-thin'> 10 Mins</p>
                        </div>
                        <p>< BsLock/></p>
                      </div>
                      </div>
                    </div>

                  </div>

                </div>
            </div>

        </main>
      

    </>
  )
}

export default AddToCart