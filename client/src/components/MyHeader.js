import {BsCart2,BsBell}from  'react-icons/bs';
import {FaUser}from  'react-icons/fa';
import { Link} from "react-router-dom";

function MyHeader() {
  return (
    <>
  <nav className='sticky top-0 shadow-sm bg-slate-50 shadow-slate-400 w-full mb-8 font-serif'>
       <div className='w-5/6 my-0'>
       <div className='flex justify-around py-8 px-0 bg-white-500 '>
        <div>
        <img src="https://raw.githubusercontent.com/Elvis-Munene/Abojani-Academy-web-app/master/assets/images/Abojani-Academy-logo.png" alt="Abojani Academy Logo" class="logo" />
        </div>
        <div className='flex justify-around items-center gap-32 text-black'>
        <BsCart2 className='hover:text-green-500 cursor-pointer '/>
        <BsBell className='hover:text-orange-500 cursor-pointer'/>
        </div>
        <div className="flex items-center gap-9.6 text-black" >
        <FaUser/>
        <Link className='flex justify-around items-center hover:text-green-500 '>Collins Bii</Link>
        </div>
       </div>
       </div>
      </nav>

    </>
  )
}

export default MyHeader