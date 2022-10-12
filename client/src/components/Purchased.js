import React from 'react'
import Header from './Header'

function Purchased() {
  return (
   <>
   
<main className="font-serif bg-slate-200  grid place-items-center h-screen
">

    <div className="mr-8 w-11/12 ">

    <div  className="flex flex-col justify-center items-center my-0 mx-auto w-3/6 border-2  h-96 bg-white rounded-3xl ">
        <div >
            <img src="https://raw.githubusercontent.com/Elvis-Munene/Abojani-Academy-web-app/master/assets/images/Ellipse19.png" alt="" className='p-5'  width="120"  height="500"/>
        </div>
        <div class="text-purchase">
            <h1 className='text-lg font-bold  pl-4 pb-0'>Investing Masterclass</h1><br/>
            <p className='text-xs pl-9'>Ezekiel Mbuvi,Mary Anne</p>
        </div>
            <div className="p-5">
                <img src="https://raw.githubusercontent.com/Elvis-Munene/Abojani-Academy-web-app/master/assets/images/circle-check-solid%201.png" alt=""/>
            </div>
            <div>
                <h1 className='text-lg font-bold pb-10'>The course has been purchased!</h1>
            </div>

        </div>
    </div>

</main>
    </> 

  )
}

export default Purchased