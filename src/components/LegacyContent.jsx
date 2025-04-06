import React from 'react'

const LegacyContent = ({p1,p2}) => {
  return (
    <div className=" h-[50vh] bg-[#E2E3E6] text-left relative ">

            <div className="flex flex-col justify-center items-center gap-6 absolute left-[26%] top-[26%]  w-1/2" >

            <p>{p1}</p >
            <p>
              {p2}

            </p>

            </div>

        
    </div>
  )
}

export default LegacyContent