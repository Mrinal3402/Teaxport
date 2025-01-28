import React from 'react'
import Navbar from './Navbar'
import AboutUsLanding from './AboutUsLanding'
import RightContent from './RightContent'
import Button from './Button'
import Form from './Form'
import Footer from './Footer'




const Mens = () => {
  return (
    <div>
        <Navbar/>
        <div className="h-[90vh]">
            <AboutUsLanding image='./images/Mens/MensL.png'/>
        </div>

        <div className="flex justify-between">

            <div className="h-screen w-1/2 relative overflow-hidden object-contain ">
            <RightContent image="./images/Mens/Mens1.png" heading={"Trend 1"} desc={"description"} />
                <div className=" absolute left-[15%] top-[55%] ">
                    <Button buttontext={"EXPLORE"} path={"/"}/>
                </div>
            </div>
            <div className="h-screen w-1/2 relative overflow-hidden object-contain">
                <RightContent image="./images/Mens/Mens2.png" heading={"Trend 1"} desc={"description"}/>
                <div className=" absolute left-[15%] top-[55%] ">
                    <Button buttontext={"EXPLORE"} path={"/"}/>
                </div>
            </div>

        </div>
        <div className="flex justify-between">

            <div className="h-screen w-1/2 relative overflow-hidden object-contain ">
            <RightContent image="./images/Mens/Mens3.png" heading={"Trend 1"} desc={"description"} />
                <div className=" absolute left-[15%] top-[55%] ">
                    <Button buttontext={"EXPLORE"} path={"/"}/>
                </div>
            </div>
            <div className="h-screen w-1/2 relative overflow-hidden object-contain">
                <RightContent image="./images/Mens/Mens3.png" heading={"Trend 1"} desc={"description"}/>
                <div className=" absolute left-[15%] top-[55%] ">
                    <Button buttontext={"EXPLORE"} path={"/"}/>
                </div>
            </div>

        </div>
       

        <Form />

{/* footer */}

        <div className="h-[50vh]">
            <Footer />
        </div>


    </div>
  )
}

export default Mens