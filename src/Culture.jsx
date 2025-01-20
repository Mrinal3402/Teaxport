import React from 'react'
import Navbar from './components/Navbar'
import AboutUsLanding from './components/AboutUsLanding'
import InfoSection from './components/InfoSection'
import LegacyContent from './components/LegacyContent'
import LeftContent from './components/LeftContent'
import RightContent from './components/RightContent'
import Footer from './components/Footer'




const Culture = () => {

    const cardsData = [
        {
          title: "Corporate Social Responsibility",
          description:
            "",
          buttonText: "See More",
          path:"/",
        },
        {
          title: "Community",
          description:
            "",
          buttonText: "See More",
          path:"/",
        },
        {
          title: "Planet",
          description:
            "",
          buttonText: "See More",
          path:"/",
        },
      ];

  return (
    <div>
        <Navbar/>
        <div className="h-[90vh] bg-slate-600">
            <AboutUsLanding/>
        </div>
        <div className="h-[40vh]">
        <InfoSection cards={cardsData}/>

        </div>

        <div className="h-[100vh] bg-slate-600">
            <AboutUsLanding/>
        </div>

        <div className=" h-[50vh] ">
            <LegacyContent/>
        </div>

        <div className="flex bg-[#E2E3E6] justify-between">
            <div className="h-screen relative w-1/2  flex items-center ">
                <LeftContent heading="Corporate Social Responsibility" para="We are committed to corporate social
responsibility, integrating ethical
practices, sustainability, and
community engagement into every
aspect of our business. By prioritizing
people, the planet, and progress, we
create meaningful impact and drive
positive change for future
generations.
" 

para2='"For it is in giving that we receive".
- St. Francis of Assisi'/>
                
            </div>
            <div className="h-screen w-1/2 overflow-hidden object-contain">
                <RightContent image="./images/AboutUs/Chess.png"/>
            </div>
        </div>

        <div className="flex bg-[#E2E3E6] justify-between">
            <div className="h-screen relative w-1/2  flex items-center ">
                <LeftContent heading="Community" para="We are deeply committed to
supporting the communities we
serve. Through partnerships,
volunteerism, and meaningful
initiatives, we aim to make a positive
impact, fostering growth,
connection, and shared success for a
stronger, more vibrant future
together." 

para2="“Alone we can do so little; together,
we can do so much”.
- Helen Keller"/>
                
            </div>
            <div className="h-screen w-1/2 overflow-hidden object-contain">
                <RightContent image="./images/AboutUs/Chess.png"/>
            </div>
        </div>

        <div className="flex bg-[#E2E3E6] justify-between">
            <div className="h-screen relative w-1/2  flex items-center ">
                <LeftContent heading="Planet" para="We are dedicated to protecting the
planet by embracing sustainable
practices and reducing our
environmental footprint. Through
innovation, resource efficiency, and
eco-friendly initiatives, we strive to
create a healthier, more sustainable
world for future generations.
" 

para2="“Preserve and cherish the pale blue
dot, the only home we’ve ever
known”.
- Carl Sagan"/>
                
            </div>
            <div className="h-screen w-1/2 overflow-hidden object-contain">
                <RightContent image="./images/AboutUs/Chess.png"/>
            </div>
        </div>

        {/* footer */}

        <div className="h-[50vh]">
            <Footer />
        </div>
    </div>
  )
}

export default Culture