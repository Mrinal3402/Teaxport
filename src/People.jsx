import React from 'react'
import Navbar from './components/Navbar'
import AboutUsLanding from './components/AboutUsLanding'
import InfoSection from './components/InfoSection'
import LeftContent from './components/LeftContent'
import RightContent from './components/RightContent'




const People = () => {
    const cardsData = [
        {
          title: "Corporate",
          description:
            "Diverse team drives innovation, growth and success",
          buttonText: "See More",
          path:"/",
        },
        {
          title: "Production units",
          description:
            "Skilled team drives quality, efficiency, safety and continuous improvement",
          buttonText: "See More",
          path:"/",
        },
        {
          title: "Knitting Mill",
          description:
            "Experienced team crafts quality textiles through innovation and collaboration",
          buttonText: "See More",
          path:"/",
        },
      ];
  return (
    <div>
        <Navbar/>

        <div className="h-[90vh] bg-red-400">
            <AboutUsLanding/>
        </div>

        <InfoSection cards={cardsData}/>

         {/* left right content */}
        <div className="flex bg-[#E2E3E6] justify-between">
            <div className="h-screen relative w-1/2  flex items-center ">
                <LeftContent heading="Corporate" para="Our corporate office is the central hub where innovation, strategy, and
leadership converge to drive our
company’s success. Here, a diverse
team of professionals collaborate
across key functions like design,
merchandising, finance, operations,
marketing, and human resources to
support our organization’s goals." 

para2="We prioritize a culture of excellence,
inclusivity, and continuous learning,
empowering our people to excel in
their roles. Together, we build a
strong foundation for growth,
efficiency, and long-term
sustainability, ensuring our
company’s success well into the
future."/>
                
            </div>
            <div className="h-screen w-1/2 overflow-hidden object-contain">
                <RightContent image="./images/AboutUs/Chess.png"/>
            </div>
        </div>

        <div className="flex bg-[#E2E3E6] justify-between">
            <div className="h-screen relative w-1/2  flex items-center ">
                <LeftContent heading="Production Units" para="Our production units are where skill,
innovation, and dedication come
together to create exceptional
products. Staffed by highly trained
professionals, these teams operate
with precision and care, ensuring the
highest quality standards are met." 

para2="We foster a culture of safety,
collaboration, and continuous
improvement, empowering our
workforce to adapt to new
technologies and techniques. By
investing in training and
development, we enable our
production teams to deliver reliable
results that drive our company’s
growth and long-term success."/>
                
            </div>
            <div className="h-screen w-1/2 overflow-hidden object-contain">
                <RightContent image="./images/AboutUs/Chess.png"/>
            </div>
        </div>
        <div className="flex bg-[#E2E3E6] justify-between">
            <div className="h-screen relative w-1/2  flex items-center ">
                <LeftContent heading="Knitting Mill" para="Our knitting mill is powered by a
dedicated team of skilled
professionals who blend
craftsmanship with cutting-edge
technology to produce high-quality
knitted fabrics. They play a vital role in
ensuring precision, consistency, and
adherence to industry-leading standards." 

para2="We prioritize a culture of
collaboration, safety, and innovation,
fostering an environment where
ideas thrive, and expertise grows.
Through continuous training and
development, our team stays ahead
of advancements, delivering
exceptional results that drive our
company’s success and commitment
to sustainability."/>
                
            </div>
            <div className="h-screen w-1/2 overflow-hidden object-contain">
                <RightContent image="./images/AboutUs/Chess.png"/>
            </div>
        </div>
       
    </div>
  )
}

export default People