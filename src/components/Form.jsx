import React from 'react'

const Form = () => {
  return (

   


        <form action=""className='bg-white h-[110vh] p-20'>

            
        <h1 className='text-4xl'>Want more details ?</h1>
        <div className="justify-center  flex-col">

        <div className="flex gap-14 justify-center  mt-14 flex-wrap ">
         <input className='border-gray-500 border-2 px-10 py-5 text-xl w-[45%]' type="text" placeholder='Your name'/>
         <input className='border-gray-500 border-2 px-10 py-5 text-xl w-[45%]' type="text" placeholder='Designation'/>
         <input className='border-gray-500 border-2 px-10 py-5 text-xl w-[45%]' type="email" placeholder='Your email'/>
         <input className='border-gray-500 border-2 px-10 py-5 text-xl w-[45%]' type="text" placeholder='Subject'/>

        </div>

         <textarea className='border-gray-500 border-2 text-xl w-[94%] mt-14 min-h-[25vh] max-h-[25vh] ml-10' name="" id="" placeholder='Enter your message'></textarea>

        <div className="flex   mt-7  justify-between px-10">
            <div className="flex gap-4">
                <input  className='h-8 w-8' type="checkbox" name="" id="" />
                <p className='text-xl'>I hereby confirm that I have read and understood the Privacy Policy  made  <br />available <a className='text-green-500'>here</a> and provide my consent.</p> 
             </div>
             <div className="flex gap-4">
                <input className='h-8 w-8' type="checkbox" name="" id="" />
                <p className='text-xl'>I am not a Robot</p>
             </div>
        </div>

        <div className="flex justify-center mt-8">

        <input className='bg-black text-white  mt-5 border-black h-10 w-32  rounded-2xl   border-2 text-center' placeholder='submit' type="submit" value="Submit" />
        </div>

        </div>

        </form>

         

    
  )
}

export default Form