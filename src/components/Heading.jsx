import React from 'react'

const Heading = ({heading}) => {
  return (
    <div className='flex justify-center  relative items-center h-[30vh] bg-black'>
        <h1 className='text-6xl absolute top-20 text-white h-[25vh]'>{heading}</h1>
    </div>
  )
}

export default Heading