import React from 'react'
import Navbar from './components/Navbar'
import AboutUsLanding from './components/AboutUsLanding'
import LeftContent from './components/LeftContent'
import RightContent from './components/RightContent'
import Button from './components/Button'
import Form from './components/Form'
import Footer from './components/Footer'



const KnittedFabrics = () => {

const content={
    title:"Our Products",
    description:"It is our continuous endeavour to keep evolving through Innovation & Technology to stay relevant to the present. We provide solutions by identifying methods indegeniously as well as by co-creation and offer products that are unique and diverse across categories and price points.",
    history:"Texport offers quality products in Menswear, Womenswear, Kids wear and Knitted Fabrics that are best-in-class and customized using best available technology and best industry practices.."
}


  return (
    <div>
        <Navbar/>

        <div className=" h-[90vh]">
            <AboutUsLanding title={content.title} description={content.description} history={content.history}/>
        </div>


        <div className="flex justify-between">

            <div className="h-screen bg-[#E2E3E6]  w-1/2 relative flex items-center  ">
                <LeftContent heading="Trend 1" para="Co-creating exceptional designs, innovations, quality craftmanship and sustainability. Crafting Menswear that elevate and create timeless and quality apparel." />
                <div className=" absolute left-[15%] top-[55%] ">
                    <Button buttontext={"EXPLORE"} path={"/Mens"}/>
                </div>
            </div>
            <div className="h-screen w-1/2  overflow-hidden object-contain">
                <RightContent image="./images/LandingPage/B.png" />
            </div>

        </div>
        <div className="flex justify-between">

            <div className="h-screen bg-[#E2E3E6]  w-1/2 relative flex items-center  ">
                <LeftContent heading="Trend 2" para="Curating exceptional womenswear with innovative design, expert craftsmanship, and tailored solutions to create elegant, timeless, and trend-forward collections"  />
                <div className=" absolute left-[15%] top-[55%] ">
                    <Button buttontext={"EXPLORE"} path={"/Womens"}/>
                </div>
            </div>
            <div className="h-screen w-1/2  overflow-hidden object-contain">
                <RightContent image="./images/LandingPage/B.png" />
            </div>

        </div>
        <div className="flex justify-between">

            <div className="h-screen bg-[#E2E3E6]  w-1/2 relative flex items-center  ">
                <LeftContent heading="Trend 3" para="Designing and manufacturing high-quality kids wear with innovative, comfortable, and trendy designs that prioritize durability, fun, and imaginative expression.." />
                <div className=" absolute left-[15%] top-[55%] ">
                    <Button buttontext={"EXPLORE"} path={"/Kids"}/>
                </div>
            </div>
            <div className="h-screen w-1/2  overflow-hidden object-contain">
                <RightContent image="./images/LandingPage/B.png" />
            </div>

        </div>
        


        <Form/>

          {/* footer */}

          <div className="h-[50vh]">
            <Footer />
        </div>



    </div>
  )
}

export default KnittedFabrics