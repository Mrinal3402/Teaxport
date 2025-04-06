import React from 'react'
import Navbar from './components/Navbar'
import Heading from './components/Heading'
import LegacyContent from './components/LegacyContent'
import Cards from './components/Cards'
import RightContent from './components/RightContent'
import AboutusLeft from './components/AboutusLeft'
import NewsAndStories from './components/NewsAndStories'
import Footer from './components/Footer'







const Capabilities = () => {

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
    <>
    <Navbar/>
    <Heading heading={"Capabilities"}/>

    <div className=" h-[50vh] ">
            <LegacyContent p1="Texport specializes in collaborating and co-creating with the clients. The close team-work between our in-house design, innovation and
the merchandising teams ensure a streamlined transition from concept to finished product maintaining high class quality and on-time
delivery. The accredited in-house laboratory supports the above teams seamlessly to align and guarantee exceptional transparency and
superior quality control as per the requirement of the clients." p2="Our state-of-the-art knitting mill specializes in producing high quality fabric, using premium yarns sourced from trusted suppliers from
around the globe."/>
        </div>


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
        <div className="flex justify-between">

            <div className="h-screen w-1/2 bg-[#E2E3E6] relative flex items-center ">
                <AboutusLeft head="Garmenting" heading="Vertically integrated operations specializing in Men’s, Women’s & Kid’s Products :" Global="10 Modern Factories" Gpara={"Across 4 states in India"} Brands="12000+ Associates" Bpara={"More than 85% of work-force are Women"} Associates="7000+ Machines" Apara={"Producing 30Mn pcs per annum"} Supporting="400+ Embroidery Heads + Laundry" Spara={"Supporting the best Brands"}/>
            </div>
            <div className="h-screen w-1/2  overflow-hidden object-contain">
                <RightContent image="./images/AboutUs/worldmap.png"/>
            </div>
        </div>

        <div className="flex justify-between">

            <div className="h-screen w-1/2 bg-[#E2E3E6] relative flex items-center ">
                <AboutusLeft head="Design & Product development" heading="Co-creating with better focus to align design ethos, philosophy & heritage :" Global="15+ Designers" Gpara={"Specializing across disciplines for best service"} Brands="Supporting" Bpara={"20+ Brands across the World"} Associates="Trend Reports" Apara={"Custom Curation using Web-based Research, Inspirational Shopping and Trend Forecasting Agencies"} Supporting="Co-creation & Collaboration" Spara={"Offer innovative solutions to Brand Partners curating personalized presentations in 3D as well as with samples"}/>
            </div>
            <div className="h-screen w-1/2  overflow-hidden object-contain">
                <RightContent image="./images/AboutUs/worldmap.png"/>
            </div>
        </div>

        <div className="flex justify-between">

            <div className="h-screen w-1/2 bg-[#E2E3E6] relative flex items-center ">
                <AboutusLeft head="Knitting" heading="Vertical, Green and Sustainable Fabric Mill offering agility and flexibility :" Global="3.6Mn+ kgs" Gpara={"Circular & Flat Knitting Capacity"} Brands="Automation" Bpara={"Automated Lab & Automated dye dispensing for minimal wastage & colour consistency"} Associates="Capabilities" Apara={"Yarn-dyeing, Fabric-dyeing, Brushing & Sueding"} Supporting="Sustainibility" Spara={"ZLD Unit & Solar Powered Mill"}/>
            </div>
            <div className="h-screen w-1/2  overflow-hidden object-contain">
                <RightContent image="./images/AboutUs/worldmap.png"/>
            </div>
        </div>

        <div className="flex justify-between">

            <div className="h-screen w-1/2 bg-[#E2E3E6] relative flex items-center ">
                <AboutusLeft head="Internal Laboratory" heading="Driving Quality, Consistency & Customer Experience :" Global="8+ Brand Accreditatiion" Gpara={"Building Trust & Credibility, ensuring Compliance, Consistency & Quality"} Brands="Capabilities" Bpara={"Test for Raw materials, Trimmings & Garments"} Associates="Standards" Apara={"Producing 30Mn pcs per annum"} Supporting="400+ Embroidery Heads + Laundry" Spara={"Supporting the best Brands"}/>
            </div>
            <div className="h-screen w-1/2  overflow-hidden object-contain">
                <RightContent image="./images/AboutUs/worldmap.png"/>
            </div>
        </div>


        {/* News and Stories */}
        <div className="h-screen">
          <NewsAndStories/>
        </div>

        {/* footer */}

        <div className="h-screen md:h-[50vh]">
            <Footer />
        </div>

        
    </>
  )
}

export default Capabilities