import React from 'react'
// import { FaUsers, FaGlobe, FaBuilding, FaRecycle, FaHandshake } from "react-icons/fa";


const Info = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-4 text-center justify-center bg-gray-400 rounded-lg shadow-sm">
    <div className="text-green-500 text-4xl mb-4">
      {/* <Icon /> */}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>  )
}

export default Info