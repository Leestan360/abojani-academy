  import React from 'react'
  import {BsPlayCircle}from  'react-icons/bs';
  import {VscUnlock}from  'react-icons/vsc';
  import Header from './Header';




  function EnrolledCourse() {
    return (
      <>
     
    <Header/>
      <main className='mt-8 ml-9 font-serif'>
      <div className='mr-32 w-80 h-fit'>
       <div className='w-full'>
        <div className='flex justify-between p-4'>
        <div>
          <iframe className='rounded-3xl' width="560" height="315" src="https://www.youtube.com/embed/Ytw_qqgRBOY"
                 title="YouTube video player" frameborder="0"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                 allowfullscreen></iframe>

            <div className='mt-20 leading-4 text-black'>
               <h2 className='leading-5'>01. Introduction to Stock Analysis</h2>
                <p className='leading-5 text-xs font-light'>Learn the basics of Stock market.</p> <br/>
                <h3 className='leading-5 text-sm'>Instructors</h3>
              <p className='leading-5 text-xs font-light'>James Omwami, Paul Gadot</p>
            </div>

        </div>

        <div className='bg-slate-200 ml-60 mt-5 w-85 rounded-lg h-fit '>

        <div className="flex justify-around w-50 m-4 px-8  ">

                  <button className="w-full text-orange-500  hover:text-green-500 border-0 pr-5 cursor-pointer " ><h2>All</h2></button>
                  <button className='text-green-500 border-0 hover:text-orange-500'><h2>Enrolled</h2></button>
                </div>
              <div>

           <div className="flex justify-between items-center bg-white py-2 px-4 rounded-lg w-75 my-1">
            <img src="https://raw.githubusercontent.com/Elvis-Munene/Abojani-Academy-web-app/master/assets/images/Rectangle%2091.png" alt="" className='mr-2 rounded-lg' />
             <div className="mr-8 leading-4">
               <h4 className='text-sm font-semibold'>Stock Analysis Masterclass</h4>
               <p className='text-xs'> James Omwami, Paul Gadot</p>
               <h4 className='text-sm font-semibold'>KES 25,000</h4>
             </div>
           </div>
    

           <div className="flex justify-between items-center bg-white py-2 px-4 rounded-lg w-75 my-1">
            <img src="https://raw.githubusercontent.com/Elvis-Munene/Abojani-Academy-web-app/master/assets/images/Rectangle%2091.png" alt="" className='mr-2 rounded-lg' />
             <div className="mr-8 leading-4">
               <h5 className='text-sm font-semibold'>Stock Analysis Masterclass</h5>
               <p className='text-xs'> James Omwami, Paul Gadot</p>
               <h4 className='text-sm font-semibold'>KES 25,000</h4>
             </div>
           </div>

           <div className="flex justify-between items-center bg-white py-2 px-4 rounded-lg w-75 my-1">
            <img src="https://raw.githubusercontent.com/Elvis-Munene/Abojani-Academy-web-app/master/assets/images/Rectangle%2091.png" alt="" className='mr-2 rounded-lg' />
             <div className="mr-8 leading-4">
               <h4 className='text-sm font-semibold'>Stock Analysis Masterclass</h4>
               <p className='text-xs'> James Omwami, Paul Gadot</p>
               <h4 className='text-sm font-semibold'>KES 25,000</h4>
             </div>
           </div>
           </div>      
        </div>
        </div>
       </div>
      </div>

     
      <div className="bg-slate-200 max-w-sm rounded-lg p-1 object-contain">
            <div className="flex justify-between bg-white m-1 p-1 rounded-lg ">
              <div >
                <h2 className='font-extrabold text-sm'>02. What is S&P Index?</h2><br/>
                <p className='text-xs'><BsPlayCircle/> 3 Mins</p>
              </div>
              <p><VscUnlock/></p>
            </div>


            <div className="flex justify-between bg-white m-1 p-1 rounded-lg">
              <div >
                <h2 className='font-extrabold text-sm'>03. What is S&P Index?</h2><br/>
                <p className='text-xs'><BsPlayCircle/> 5 Mins</p>
              </div>
              <p><VscUnlock/></p>
            </div>

            <div className="flex justify-between bg-white m-1 p-1 rounded-lg">
              <div >
                <h2 className='font-extrabold text-sm'>04. What is S&P Index?</h2><br/>
                <p className='text-xs'><BsPlayCircle/> 5 Mins</p>
              </div>
              <p><VscUnlock/></p>
            </div>

        </div>
      </main>  
      </>
    )
  }
  
  export default EnrolledCourse