import React from 'react'
import { Link } from "react-router-dom";


const Navbar = () => {


  return (
    <nav className="flex justify-around items-center px-0 py-6 bg-gray-100">
    <div className="text-xl ml-0 font-bold text-gray-800">
      <img src="./images/Navbar/logo.png" alt="" />
    </div>
    <ul className="flex text-lg gap-10 text-gray-700">
        <li><Link to="/About">About Us</Link></li>
        <li><Link to="/capabilities">Capabilities</Link></li>
        <li><Link to="/Product">Product</Link></li>
        <li><Link to="/People">People</Link></li>
        <li><Link to="/Culture">Culture</Link></li>
        <li><Link to="/Careers">Careers</Link></li>
        <li><Link to="/News">News</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
    </ul>
      <div className="">
        <ul>
          <li className='font-bold text-black'>Search</li>
         </ul>
      </div>
  </nav>  )
}

export default Navbar

