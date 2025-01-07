import React from 'react'
import Navbar from './components/Navbar'
import AboutUsLanding from './components/AboutUsLanding';
import SmallAboutLanding from './components/SmallAboutLanding';
import ValuesSection from './components/ValueSection';
import Footer from './components/Footer';
import NewsAndStories from './components/NewsAndStories';



const OurApporach = () => {

    const ourapproachLandingData = {
        image: "./images/Our Approach/OALanding.png", // Replace with your image URL
        title: "Our Approach",
        description:
          "At Texport, innovation and collaboration go hand-in-hand for our never-ending pursuit of delivering happiness to the customers and our associates. It is our constant endeavour to attain perfection through forward thinking, meticulous planning and impeccable execution. We dare to dream and revel in challenges and prosper in unique situations facing all odds",
        history:
        "While sustainability is the need of the hour, Texport has been practizing it since its inception through the years. We believe in being a force to bring about a positive change and creating value and delivering distinction across all the spectrums of the Textile Industry"
      };

    const smallaboutlanding ={text:"To deliver happiness by redefining possibilities, forward thinking, collaboration and never-ending pursuit of excellence",
        image:"./images/Our Approach/Vision.png",
        heading:"Our Providence"
    } 
    const smallaboutlanding2 ={text:"To create a ecosystem which has meaningful relationship with every customer and associates in our quest for success in business and giving back to the society and the environment.",
        image:"./images/Our Approach/Mission.png",
        heading:"Making Lives Better"
    } 

  return (
    <div>
        <Navbar/>

        <div className=' h-[90vh]'>
        <AboutUsLanding
        image={ourapproachLandingData.image}
        title={ourapproachLandingData.title}
        description={ourapproachLandingData.description}
        history={ourapproachLandingData.history}
          />
        </div>

        <div className='h-[50vh]'>
            <SmallAboutLanding smallaboutlanding={smallaboutlanding.text} image={smallaboutlanding.image} heading={smallaboutlanding.heading} />
         </div>

         <div className="">
            <ValuesSection/>    
         </div>

         <div className='h-[50vh]'>
            <SmallAboutLanding smallaboutlanding={smallaboutlanding2.text} image={smallaboutlanding2.image}heading={smallaboutlanding2.heading} />
         </div>

         <div className="h-screen">
          <NewsAndStories/>
        </div>

         <div className="h-[50vh]">
            <Footer />
        </div>
    </div>
  )
}

export default OurApporach
