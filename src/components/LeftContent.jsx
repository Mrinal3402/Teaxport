import React from 'react'
import Button from './Button'
const LeftContent = ({heading,para,buttontext,head,para2}) => {
    function click(){
        console.log('click')
    }
  return (
    <div className="relative flex flex-col bg-[#E2E3E6] top-[-9%] p-8">
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