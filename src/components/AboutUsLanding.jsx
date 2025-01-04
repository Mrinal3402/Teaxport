import React from 'react'

const AboutUsLanding = ({ image, title, description, history }) => {
  return (
    <div className="relative min-h-full bg-gray-800 text-white py-10 px-20 ">
    <div className="absolute inset-0">
      <img
        src={image}
        alt="About us"
        className="w-full h-full object-cover opacity-50"
      />
    </div>
    <div className="relative z-10 max-w-4xl top-28">
      <h2 className="text-6xl md:text-6xl font-normal font-custom mb-">{title}</h2>
      <p className="w-[85%] text-lg font-normal font-custom md:text-xl leading-relaxed mt-10">{description}</p>
      <p className="w-[85%] text-md font-normal font-custom md:text-lg leading-relaxed mt-8">{history}</p>
    </div>
  </div>
  )
}

export default AboutUsLanding