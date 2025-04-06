import React from 'react';
// import Button from './components/Button';

const VisionSection = ({ smallaboutlanding ,heading, image}) => {
  return (
    <section className="relative w-full h-full  flex items-center justify-center py-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover object-contain"
        >
        
        <img className='w-full h-full ' src={image} alt="" />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>

      {/* Content */}
      <div className="relative ml-20 right-[20%] z-10 max-w-4xl text-left text-white px-4 sm:px-8">
        <h2 className="text-base sm:text-xs md:text-lg font-normal font-custom leading-tight">
        {heading}
        </h2>
        <p className="mt-4 text-lg w-[55%] sm:text-xl md:text-2xl font-normal font-custom">{smallaboutlanding}</p>


        
      </div>

      
     
      
    </section>
  );
};

export default VisionSection;