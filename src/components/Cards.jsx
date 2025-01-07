import React from 'react'

const Cards = ({ title, imageUrl, buttonText }) => {
  return (
<div
      className="relative flex items-center justify-center w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* <div className="absolute  inset-0 bg-black bg-opacity-40"></div> */}
      <div className="relative z-10 text-center text-white">
        <h2 className="text-5xl font-custom font-Normal mb-4">{title}</h2>
        <button className="px-8 mt-5 py-4 font-custom text-sm font-semibold text-white border border-white rounded-full hover:bg-white hover:text-black transition">
          {buttonText}
        </button>
      </div>
    </div>  )
}

export default Cards