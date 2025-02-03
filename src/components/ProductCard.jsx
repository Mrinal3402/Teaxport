import React from 'react'

const ProductCard = ({ title, imageUrl, buttonText }) => {
  return (<div
    className="relative flex items-center justify-center w-full h-full md:p-20 bg-cover bg-center bg-[#E2E3E6]"
    // style={{ backgroundImage: `url(${imageUrl})` }}
  >
    <div className="absolute h-[95%] w-[95%] md:h-[90%] md:w-[95%]">
        <img className='object-cover h-full w-full' src={`${imageUrl}`} alt="" />
    </div>
    <div className="relative z-10 text-center text-white">
      <h2 className="text-5xl md:text-8xl font-normal font-custom mb-4">{title}</h2>
      <button className="px-8 mt-5 py-4 font text-sm font-semibold text-white border border-white rounded-full hover:bg-white hover:text-black transition">
        {buttonText}
      </button>
    </div>
  </div>
  )
}

export default ProductCard