import React,{useState} from 'react'
import { FaOutdent } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Nav = () => {
    const[Nav,setNav]=useState(false)
    function handleToogle(){
        setNav(!Nav)
    }

  return (
    <div>
      <div className="flex items-center justify-center flex-col gap-5">
        <h1 className="text-[#51B73B] font-bold text-[25px] ">Freebiestech</h1>
        <ul className="flex gap-5 max-sm:hidden ">
          <li className="hover:text-[#51B73B]">Home</li>
          <li className="hover:text-[#51B73B]">About</li>
          <li className="hover:text-[#51B73B]">Privacy Policy</li>
          <li className="hover:text-[#51B73B]">Contact Us</li>
        </ul>
        <button onClick={handleToogle} className="hidden max-sm:flex mt-10 pl-80"> {Nav ? <IoMdClose /> : <FaOutdent />} </button>
      </div>
      <div
        className={`${
          Nav ? "top-[0%]" : "top-[-54%]"
        }  md:hidden  absolute ransition-all duration-1000 mt-20 bg-blue text-black flex items-center justify-center h-[25vh] flex-col gap-[10px] w-full`}
      >
        <ul className="flex gap-5 flex-col ">
          <li className="hover:text-[#51B73B]">Home</li>
          <li className="hover:text-[#51B73B]">About</li>
          <li className="hover:text-[#51B73B]">Privacy Policy</li>
          <li className="hover:text-[#51B73B]">Contact Us</li>
        </ul>
      </div>
    </div>
  );
}

export default Nav
