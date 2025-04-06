import React from 'react'
import Navbar from './components/Navbar'
import Years from './components/Years'
import Timeline from './components/Timeline'
import NewsAndStories from './components/NewsAndStories'
import Footer from './components/Footer'


const Ancestry = () => {
    
  return (
    <div className=' relative  max-w-[99vw] '>
            <Navbar/>
<div className=" ">

            <div className="sticky top-0 w-full h-[80vh] right-0">
            <Timeline year="1977" paragraph={`Inception of Texport in Bombay, now Mumbai`} image="./images/Ancestry/2011.png"/>
            </div>


            <div className="sticky top-0 w-full h-[80vh] right-0">
            <Timeline year="1978" paragraph="First facility operational in Mumbai" image="./images/Ancestry/2017.png"/>
            </div>

            <div className="sticky top-0 right-0 w-full h-[80vh]">
            <Timeline year="1991" paragraph="First facility outside ofMumbai, located in Bangalore" image="./images/Ancestry/2011.png"/>
            </div>

            <div className="sticky top-0 right-0 w-full h-[80vh]">
<Timeline year="2000" paragraph="Complete operations moved to Bangalore" image="./images/Ancestry/2017.png"/>
            </div>

            <div className="sticky top-0 right-0 w-full h-[80vh]">
<Timeline year="2001" paragraph="Launched Robert Graham, a high fashion eclectic brand" image="./images/Ancestry/2011.png"/>
            </div>

            <div className="sticky top-0 right-0 w-full h-[80vh]">
<Timeline year="2011" paragraph="Started the first large span single floor facility" image="./images/Ancestry/2017.png"/>
            </div>
  
            <div className="sticky top-0 right-0 w-full h-[80vh]">
<Timeline year="2017" paragraph="Started the Fabric Mill, with knitting & Processing Facility in Hindupur" image="./images/Ancestry/2011.png"/>
            </div>

            <div className="sticky top-0 right-0 w-full h-[80vh]">
            <Timeline year="2020" paragraph="JV with Luen Thai Holdings" image="./images/Ancestry/2017.png"/>
            </div>

            <div className="sticky top-0 right-0 w-full h-[80vh]">
<Timeline year="2022" paragraph="Launched VIE, a domestic womenswear Brand" image="./images/Ancestry/2011.png"/>
            </div>

            <div className="sticky top-0 right-0 w-full h-[80vh]">
            <Timeline year="2024" paragraph="Texcana, JV with Busana Apparel Group" image="./images/Ancestry/2017.png"/>
            </div>
</div>


            <div className="h-[100vh] mt-24 bg-white w-full">
                <NewsAndStories/>
            </div>        

            {/* footer */}

            <div className="h-[70vh] z-50">
                <Footer />
            </div>

            <Years/>

    </div>
  )
}

export default Ancestry