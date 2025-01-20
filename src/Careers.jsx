import React from 'react'
import Navbar from './components/Navbar'
import Heading from './components/Heading'
import Info from './components/Info'
import LeftContent from './components/LeftContent'
import RightContent from './components/RightContent'
import Button from './components/Button'
import Footer from './components/Footer'
import CareerList from './components/CareerList'
import { FaUsers, FaGlobe, FaBuilding, FaRecycle, FaHandshake } from "react-icons/fa";






const Careers = () => {
    const info = [
        {
          icon: FaUsers,
          title: "Over 15 K+ Associates",
          description: "Dedicated professionals worldwide",
        },
        {
          icon: FaGlobe,
          title: "Global Reach",
          description: "Serving clients across multiple continents",
        },
        {
          icon: FaBuilding,
          title: "Modern Facilities",
          description: "Cutting-edge production environments",
        },
        {
          icon: FaRecycle,
          title: "Sustainable Practices",
          description: "Eco-friendly methods and materials",
        },
        {
          icon: FaHandshake,
          title: "Co-Creation Platform",
          description: "Collaborative Product Development",
        },
        {
          icon: FaHandshake,
          title: "People First Approach",
          description: "Prioritizing well-being and growth",
        },
      ];

  return (


    <div>
        <Navbar/>
        <Heading heading="CAREERS AT TEXPORT"/>

        <div className="flex justify-between">
            <div className="h-screen w-1/2 relative bg-[#E2E3E6]  flex items-center  ">
                <LeftContent heading="JOIN OUR TEAM" para="At Texport, we design and manufacture products that make a difference. Join a team of creative and dedicated professionals passionate about excellence. Co-create, Collaborate on innovative, cutting-edge and forward-thinking projects, enjoy career growth opportunities, and thrive in a supportive, inclusive culture. " 
                para2="We offer competitive benefits, professional development, and the chance to turn ideas into transformative results making significant contributions. Explore our openings and take your career to the next level."/>

                <div className=" absolute left-[15%] top-[65%] ">
                    <Button buttontext={"APPLY"} path={""}/>
                </div>
            </div>
            <div className="h-screen w-1/2  overflow-hidden object-contain">
                <RightContent image="./images/LandingPage/B.png" />

            </div>

        </div>
        
            {/* info cards */}
        <div className=" py-10 h-screen px-8">
            <div className="h-[100%]  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {info.map((card, index) => (
            <Info
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
            ))}
            </div>
        </div>



        <div className="flex justify-between ">
            <div className=" w-1/2 relative bg-[#E2E3E6] top-[-30%] flex items-center  ">
                <LeftContent heading="Have you got what we need ?" para={<CareerList/>} />

                <div className=" absolute left-[15%] top-[65%] ">
                    <Button buttontext={"APPLY"} path={""}/>
                </div>
            </div>
            <div className="h-screen w-1/2  overflow-hidden object-contain">
                <RightContent image="./images/LandingPage/B.png" />

            </div>

        </div>
        

               {/* footer */}

        <div className="h-[50vh]">
            <Footer />
        </div>

    </div>
  )
}

export default Careers