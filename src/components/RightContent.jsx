import React from 'react'

const RightContent = ({image,heading,desc}) => {
  return (
    <div className="w-full relative">
    <div className=" h-1/6 flex flex-col justify-center items-start ml-20  top-[30%] w-full z-50 absolute text-white">
      <h1 className='  text-4xl font-custom font-normal mb-3'>{heading}</h1>
      <p>{desc}</p>
    </div>
    <img 
      src= {image}
      alt="Factory Scene"
      className="shadow-lg w-screen absolute"
    />
  </div> 
    
)
}

export default RightContent