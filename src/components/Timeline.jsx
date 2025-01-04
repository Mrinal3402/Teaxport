import React from "react";



const Timeline = ({year,paragraph,image}) => {



  return (
    <div  className='main h-[80vh] flex '>
        <div className="w-[35%] h-full bg-[#E2E3E6] flex relative ">
                <div className=" w-[60%] absolute top-[30%] left-[12%]">
                    <h1 className='text-5xl font-medium mb-6'>{year}</h1>
                    <p className='text-xl text-left'>{paragraph}</p>
                </div>

            
        </div>
        <div className="rightimage w-[65%] bg-[#E2E3E6] overflow-hidden h-full">
            <img className='w-full  ' src={image}alt="" />
        </div>
    </div>
  )
}

export default Timeline