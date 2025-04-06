import React from 'react'

const AboutUsLanding = ({ image, title, description, history }) => {
  return (
    <div className="  relative h-[80vh] md:h-[90vh] w-[100vw]  md:px-16 ">
    <div className="absolute inset-0">
      <img
        src={image}
        alt="About us"
        className="h-[100%] w-[100%] object-cover opacity-100"
      />
    </div>
    <div className=" absolute  text-white opacity-80 z-10 max-w-4xl top-28">
      <h2 className="text-3xl md:text-6xl text-center md:text-left font-light md:mb-16 font-custom ">{title}</h2>
      <p className="w-[100%] md:w-[80%] text-md font-normal font-custom md:text-xl leading-relaxed mt-10">{description}</p>
      <p className="w-[100%] md:w-[80%] text-md font-normal font-custom md:text-lg leading-relaxed mt-8">{history}</p>
    </div>
  </div>
  )
}

export default AboutUsLanding