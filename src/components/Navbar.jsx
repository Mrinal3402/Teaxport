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
        <li><Link to="/product">Product</Link></li>
        <li><Link to="/people">People</Link></li>
        <li><Link to="/transparency">Transparency</Link></li>
        <li><Link to="/careers">Careers</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/contact">Contact</Link></li>
    </ul>
      <div className="">
        <ul>
          <li className='font-bold text-black'>Search</li>
         </ul>
      </div>
  </nav>  )
}

export default Navbar

