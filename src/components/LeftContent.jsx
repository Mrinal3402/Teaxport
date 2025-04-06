import React from 'react'
const LeftContent = ({heading,para,head,para2}) => {
  
  return (
    <div className="relative flex flex-col   top-[-9%] p-8">
      <p className='text-lg px-10 ml-3 text-gray-800 mb-6'>{head}</p>
    <h1 className="text-5xl font-custom ml-12 font-medium text-gray-800 mb-4">
      {heading}
    </h1>
    <p className="text-lg px-10 ml-3 text-gray-800 mb-6">
      {para}
    </p>
    <p className="text-lg px-10 ml-3 text-gray-800 mb-6">
      {para2}
    </p>


    
        
  </div>
)
}

export default LeftContent