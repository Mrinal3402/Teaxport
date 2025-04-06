import React from 'react'


const Info = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-4 text-center justify-center  ">
    <div className="text-[#96C943] text-6xl mb-4">
      <Icon />
    </div>
    <h3 className="text-xl text-black font-custom font-normal mb-2">{title}</h3>
    <p className="text-black">{description}</p>
  </div>  )
}

export default Info