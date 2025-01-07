import React from 'react'
import Navbar from './components/Navbar'
import AboutUsLanding from './components/AboutUsLanding';
import InfoSection from './components/InfoSection';
import LeftContent from './components/LeftContent';
import RightContent from './components/RightContent';
import Cards from './components/Cards';
import NewsAndStories from './components/NewsAndStories';
import Footer from './components/Footer';
import AboutusLeft from './components/AboutusLeft';
import Button from './components/Button';







const About = () => {




    const aboutUsLandingData = {
        image: "./images/AboutUs/About.png", // Replace with your image URL
        title: "About us",
        description:
          "Texport is a global export house in the business of manufacturing and exporting apparel and textile products. Known for its people's first approach in business, the company is committed to sustainably contributing to the spectrum of the textile industry fulfilling the requirements of its customers, associates, society, and the environment.",
        history:
          "Closely held by the Goenka family since its inception in 1978, the company now has the 3rd generation of the family leading the operations. It has installed capacities across South of India, manned by a committed workforce of over 15,000+ personnel delivering distinction through quality products & services.",
      };

      const cardsData = [
        {
          title: "Our Legacy",
          description:
            "Relentless drive towards design & manufacturing excellence for over 5 decades and seeking more.",
          buttonText: "See More",
          path:"/OurLegacy",
        },
        {
          title: "Our Approach",
          description:
            "Forward thinking, purposeful commitment & attaining perfection with a people-first approach.",
          buttonText: "See More",
          path:"/OurApproach",
        },
        {
          title: "Recognitions",
          description:
            "Milestones to savor in our continuous drive to deliver distinction.",
          buttonText: "See More",
          path:"/Recognitions",
        },
      ];



      const cards = [
        {
          title: "Design and Product Development",
          imageUrl: "./images/LandingPage/CL.png", // Replace with dynamic image URL
          buttonText: "Explore",
        },
        {
          title: "Internal Laboratory",
          imageUrl: "./images/LandingPage/CR.png", // Replace with dynamic image URL
          buttonText: "Explore",
        },
       
      ];
      const cards2 = [
        {
          title: "Knitting and processing",
          imageUrl: "./images/LandingPage/CL2.png", // Replace with dynamic image URL
          buttonText: "Explore",
        },
        {
          title: "Garmenting",
          imageUrl: "./images/LandingPage/CR2.png", // Replace with dynamic image URL
          buttonText: "Explore",
        },
       
      ];
    
  return (

    <div>
        <Navbar/>

        <div className=' h-[90vh]'>
        <AboutUsLanding
        image={aboutUsLandingData.image}
        title={aboutUsLandingData.title}
        description={aboutUsLandingData.description}
        history={aboutUsLandingData.history}
          />
        </div>

        {/* Info Card */}

        <div className='h-[45vh]'>
            <InfoSection cards={cardsData} />
        </div>

        {/* left right content */}
        <div className="flex justify-between">

            <div className="h-screen w-1/2 bg-[#E2E3E6] relative flex items-center ">
                <AboutusLeft head="Global Reach" heading="Texport’s reach in the apparel section is across :" Global="Global Reach" Gpara={"Customers in America, Europe & Asia Pacific"} Brands="25+ Brands" Bpara={"Co-creating & Manufacturing"} Associates="15000+ Associates" Apara={"People-first Approach"} Supporting="Supporting" Spara={"Environmental & Human Causes"}/>
            </div>
            <div className="h-screen w-1/2  overflow-hidden object-contain">
                <RightContent image="./images/AboutUs/worldmap.png"/>
            </div>
        </div>

         {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
                {cards.map((card, index) => (
                <Cards
                key={index}
                title={card.title}
                imageUrl={card.imageUrl}
                buttonText={card.buttonText}
                />
            ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
                {cards2.map((card, index) => (
                <Cards
                key={index}
                title={card.title}
                imageUrl={card.imageUrl}
                buttonText={card.buttonText}
                />
            ))}
        </div>

         {/* left right content */}
        <div className="flex bg-[#E2E3E6] justify-between">

            <div className="h-screen relative w-1/2  flex items-center ">
                <LeftContent heading="Leadership Team" para="The Management at Texport believes in empoweing all the teams to deliver excellence by providing performance led culture" />
                <div className=" absolute left-[15.5%] top-[52%] ">
                  <Button buttontext={"EXPLORE"} path={"/Leadership"}/>
                </div>
            </div>
            <div className="h-screen w-1/2 overflow-hidden object-contain">
                <RightContent image="./images/AboutUs/Chess.png"/>
            </div>
        </div>


        {/* News and Stories */}
        <div className="h-screen">
          <NewsAndStories/>
        </div>

        {/* footer */}

        <div className="h-[50vh]">
            <Footer />
        </div>


    </div>


    
  )
}

export default About