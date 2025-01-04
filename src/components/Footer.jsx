import React from 'react';
// import { Link } from 'react-router-dom';

function Footer() {
  return (
  <nav className="bg-[#1D1F20] h-full text-white p-4 flex justify-evenly items-start ">

        
      
    <div className="container   h-[80%] flex  items-start">

      <div className="text-lg ml-16 w-80 font-nlight tracking-wide mt-10 font-custom">
          Bringing excellence by redefining <br/>the possibilities and delivering distinction
      </div>
        
      <div className="flex space-x-10 h-full ml-20 mt-10  w-[50%]  justify-around">

          <div className=''>
            <h3 className="text-lg font-semibold tracking-wider font-custom">Company</h3>
            <ul className="mt-3 text-sm font-custom leading-loose">
              <li>Capabilities</li>
              <li>Transparency</li>
              <li>People</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className=''>
            <h3 className="text-lg font-semibold tracking-wider font-custom">Product</h3>
            <ul className="mt-3 text-sm font-custom leading-loose">
              <li>Mens wear</li>
              <li>Womens wear</li>
              <li>Kids wear</li>
              <li>Knitted fabrics</li>
            </ul>
          </div>

          <div className=''>
            <h3 className="text-lg font-semibold tracking-wider font-custom">Connect</h3>
            <ul className="mt-3 text-sm font-custom leading-loose">
              <li>Linkedin</li>
              <li>Instagram</li>
              <li>Facebook</li>
            </ul>
          </div>

      </div>
    </div>
  </nav>
  );
}

export default Footer;
