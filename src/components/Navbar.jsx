import React from 'react'
import { Link } from "react-router-dom";
import { RiMenu2Fill } from "react-icons/ri";
import { useState } from "react";
import { Menu, X } from "lucide-react";




const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };




  return (
    <nav className=" relative flex justify-between w-[100vw] z-50 items-center mx-auto py-6 bg-white ">
    <div className="text-xl ml-5 z-50 font-bold text-gray-800">
    <Link to="//">      
    <img src="./images/Navbar/logo.png" alt="" />
    </Link>
    </div>
    <div className={`absolute  md:left-[58%] lg:left-[50%] md:top-[50%] lg:top-[50%] md:transform -translate-x-1/2 -translate-y-1/2  top-[-210%] transition-all duration-300 bg-white  z-20  md:w-[90%]   ${isOpen ? "top-[274%] left-[50%] justify-center flex min-w-[100vw] " : " left-[50%] justify-center  flex md:min-w-[50%] w-[100vw]"}`} >
    <ul className="flex md:flex-row md:items-center md:gap-4   lg:gap-10 flex-col  text-lg lg:text-lg md:text-base  gap-4 mb-4 md:mb-0 text-gray-700">
        <li><Link to="/About">About Us</Link></li>
        <li><Link to="/Capabilities">Capabilities</Link></li>
        <li><Link to="/Product">Product</Link></li>
        <li><Link to="/People">People</Link></li>
        <li><Link to="/Culture">Culture</Link></li>
        <li><Link to="/Careers">Careers</Link></li>
        <li><Link to="/News">News</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
    </ul>
    </div>
      <div className="lg:hidden   text-3xl cursor-pointer  mr-[8%] text-gray-700">
        <ul>
        <button onClick={toggleMenu} className="p-2 rounded-lg focus:outline-none">
      {isOpen ? <X size={32} /> : <Menu size={32} />}
    </button>
         </ul>
      </div>
  </nav>  )
}

export default Navbar

