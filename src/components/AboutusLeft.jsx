import React from 'react'

const AboutusLeft = ({heading,para,head , Global , Brands ,Associates ,Supporting,Gpara,Bpara,Spara,Apara}) => {
  return (
    <div className=" flex flex-col absolute top-[8%]    p-8">
    <p className='text-lg px-10 ml-3 text-gray-800 mb-6'>{head}</p>
  <h1 className="text-6xl font-custom ml-12 font-normal text-gray-800 mb-10">
Texport’s reach in <br/>
the apparel section<br/>
is across :
  </h1>
 

  <h3 className="text-xl font-custom ml-12 font-semibold text-gray-800 ">
    {Global}
  </h3>
  <p className="text-lg px-9 ml-3 text-gray-800 mb-8">
    {Gpara}
  </p>
  <h3 className="text-xl font-custom ml-12 font-semibold text-gray-800">
    {Brands}
  </h3>
  <p className="text-lg px-9 ml-3 text-gray-800 mb-8">
    {Bpara}
  </p>
  <h3 className="text-xl font-custom ml-12 font-semibold text-gray-800">
    {Associates}
  </h3>
  <p className="text-lg px-9 ml-3 text-gray-800 mb-8">
    {Apara}
  </p>
  <h3 className="text-xl font-custom ml-12 font-semibold text-gray-800">
    {Supporting}
  </h3>
  <p className="text-lg px-9 ml-3 text-gray-800 mb-8">
    {Spara}
  </p>


      
</div>
  )
}

export default AboutusLeft