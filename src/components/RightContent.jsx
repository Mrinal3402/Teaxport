import React from 'react'

const RightContent = ({image,heading,desc}) => {
  return (
    <div className="w-full h-full  relative">
    <img 
      src= {image}
      alt="Factory Scene"
      className="shadow-lg w-screen h-full absolute"
    />
    <div className=" md:h-1/6 flex flex-col md:flex md:flex-col justify-center    items-center   top-[30%] md:w-full z-20 absolute text-white">
      <h1 className=' md:hidden md:text-4xl text-3xl  text-center font-custom font-normal mb-3 md:mb-3'>{heading}</h1>
      <p className=' mt-2 text-center md:hidden'>{desc}</p>
    </div>
  </div> 
    
)
}

export default RightContent