import React from 'react'

const LeadershipLanding = ({ image, title, description, history }) => {
  return (
    <div className="relative min-h-full bg-gray-800 text-white py-10 px-20 ">
    <div className="absolute inset-0">
      <img
        src={"./images/Leadership/Leadership.png"}
        alt="About us"
        className="w-full h-full object-cover opacity-50"
      />
    </div>
    <div className="absolute z-10 max-w-4xl ml-6  bottom-[20%]">
      <h2 className="text-xl md:text-xl font-normal font-custom mb-5">{"Our Leadership"}</h2>
      <p className="text-5xl w-[100%] font-normal font-custom md:text-5xl leading-loose tracking-wide ">Inspiring to dream, empowering to <br/>learn, committing to deliver <br/> excellence.</p>
    </div>
  </div>
  )
}

export default LeadershipLanding