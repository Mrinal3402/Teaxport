import React from 'react'


const Info = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-4 text-center justify-center rounded-lg shadow-sm">
    <div className="text-[#96C943] text-4xl mb-4">
      <Icon />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>  )
}

export default Info