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

  <button onClick={''}
  
  class="flex mt-10 justify-center text-white left-[-42%] gap-2 items-center mx-auto  text-lg bg-black-50 backdrop-blur-md lg:font-semibold isolation-auto border-white before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-white hover:text-black before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border rounded-full group"
>
  Explore
  <svg
    className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-black text-black ease-linear duration-300 rounded-full border border-gray-50 group-hover:border-none p-2 rotate-45"
    viewBox="0 0 16 19"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
      className="fill-gray-50 group-hover:fill-gray-50"
    ></path>
  </svg>
</button>
        
      </div>

      
     
      
    </section>
  );
};

export default VisionSection;