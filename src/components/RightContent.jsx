import React from 'react'

const RightContent = ({image}) => {
  return (
    <div className="w-full">
    <img 
      src= {image}
      alt="Factory Scene"
      className="shadow-lg w-screen"
    />
  </div>  )
}

export default RightContent