import React from 'react'
import Header from './Header'

function Purchased() {
  return (
   <>
   <Header/>
<main className="mt-8 font-serif">

    <div className="mr-8 w-11/12 h-fit">

    <div style={{borderRadius:"2%"}} className="flex flex-col justify-center items-center my-0 mx-auto w-3/6 mt-32 h-3/4">
        <div >
            <img src="../images/Ellipse 19.png" alt="" className='pt-0'/>
        </div>
        <div class="text-purchase">
            <h1 className='text-lg font-bold  pl-4 pb-0'>Investing Masterclass</h1><br/>
            <p className='text-xs pl-9'>Ezekiel Mbuvi,Mary Anne</p>
        </div>
            <div className="p-4">
                <img src="https://raw.githubusercontent.com/Elvis-Munene/Abojani-Academy-web-app/master/assets/images/circle-check-solid%201.png" alt=""/>
            </div>
            <div className="last-purchase-statement">
                <h1 className='text-lg font-bold'>The course has been purchased!</h1>
            </div>

        </div>
    </div>

</main>
    </> 

  )
}

export default Purchased