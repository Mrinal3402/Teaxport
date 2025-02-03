import React from 'react'
import Navbar from './components/Navbar'
import LeftContent from './components/LeftContent'
import RightContent from './components/RightContent'
import Cards from './components/Cards'
import ProductCard from './components/ProductCard'
import Info from './components/Info'
import NewsAndStories from './components/NewsAndStories'
import Footer from './components/Footer'
import Button from './components/Button'
import HeroSlider from './components/HeroSlider'

import { FaUsers, FaGlobe, FaBuilding, FaRecycle, FaHandshake } from "react-icons/fa";






const LandingPage = () => {

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

  const productCard = {
    title: "Our Products",
    imageUrl: "./images/LandingPage/Product.png", // Replace with dynamic image URL
    buttonText: "Explore",
  };

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
    <div className='overflow-hidden sm:w-[100vw] text-white bg-[#E2E3E6]'>

      {/* Navbar rendring */}
      <Navbar/>

      {/* 1,2,3 pages */}
      <div className="md:hidden">
        <HeroSlider/>
      </div>

      <div className="hidden md:block">

      <div className="md:flex md:justify-between">

        <div className="hidden relative md:h-screen md:w-1/2  md:flex md:items-center ">
          <LeftContent heading="Setting New Standards in Apparel Exports" para="Crafting quality apparel with a commitment to ethical practices and sustainability since 1978" />
          <div className=" absolute left-[15%] top-[55%] ">
          <Button buttontext={"SEE MORE"} path={""}/>
          </div>

        </div>
        <div className=" h-[60vh] md:min-h-screen md:w-1/2 relative overflow-hidden md:object-contain object-contain">
          <RightContent image="./images/LandingPage/A.png" heading={"Setting New Standards in Apparel Exports"} desc={"Crafting quality apparel with a commitment to ethical practices and sustainability since 1978"}/>
        
        </div>

      </div>
      <div className="md:flex md:justify-between">

        <div className="hidden  md:h-screen md:w-1/2 relative md:flex md:items-center ">
          <LeftContent heading="Setting New Standards in Apparel Exports" para="Crafting quality apparel with a commitment to ethical practices and sustainability since 1978" />
          <div className="  absolute left-[15%] top-[55%]">
          <Button buttontext={"SEE MORE"} path={""}/>
          </div>

        </div>
        <div className=" h-[60vh] md:min-h-screen md:w-1/2 relative overflow-hidden md:object-contain object-contain">
          <RightContent image="./images/LandingPage/B.png" heading={"Our Initiatives"} desc={"We believe in living in harmony with the environment and we as a business have a very vital role to play to champion the cause"}/>
        
        </div>

      </div>
      <div className="md:flex md:justify-between">

        <div className="hidden relative md:h-screen md:w-1/2  md:flex md:items-center ">
          <LeftContent heading="Setting New Standards in Apparel Exports" para="Crafting quality apparel with a commitment to ethical practices and sustainability since 1978" />
          <div className="  absolute left-[15%] top-[55%] ">
          <Button buttontext={"SEE MORE"} path={""}/>
          </div>

        </div>
        <div className=" h-[60vh] md:min-h-screen md:w-1/2 relative overflow-hidden md:object-contain object-contain">
          <RightContent image="./images/LandingPage/C.png" heading={"Your Partner since 1978"} desc={"Texport is a well-recognized business house in the apparel industry.It is amongst the initiators of apparel exports from India."}/>
        
        </div>

      </div>
      </div>



{/* Card rendring */}


      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 md:p-8">
      {cards.map((card, index) => (
        <Cards
          key={index}
          title={card.title}
          imageUrl={card.imageUrl}
          buttonText={card.buttonText}
        />
      ))}
    </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 md:p-8">
      {cards2.map((card, index) => (
        <Cards
          key={index}
          title={card.title}
          imageUrl={card.imageUrl}
          buttonText={card.buttonText}
        />
      ))}
    </div>

    {/*product card  */}
    <div className="h-[80vh] md:h-[100vh]">

    <ProductCard
        title={productCard.title}
        imageUrl={productCard.imageUrl}
        buttonText={productCard.buttonText}
      />

    </div>


    {/* info cards */}
    <div className=" py-10 md:h-screen  px-8">
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

    {/* News and Stories */}
        <div className="h-screen">
          <NewsAndStories/>
        </div>
{/* footer */}

<div className=" h-[100vh] md:h-[50vh]">
  <Footer />
</div>

    </div>
  )
}

export default LandingPage




// import React, { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import LeftContent from "./components/LeftContent";
// import RightContent from "./components/RightContent";
// import Button from "./components/Button";

// // Register ScrollTrigger with GSAP
// gsap.registerPlugin(ScrollTrigger);

// const LandingPage = () => {
//   useEffect(() => {
//     // Loop through each section and create scroll-triggered animations
//     document.querySelectorAll('.section').forEach((section, index) => {
//       // Pin the right content for each section
//       ScrollTrigger.create({
//         trigger: section.querySelector('.right-content'),
//         start: "top top", // Pin when the top of the section hits the top of the viewport
//         end: "+=100%", // Unpin when the next section reaches,
//         pin: true, // Pin the right content
//         pinSpacing: false, // No extra spacing after unpinning
//         scrub: true, // Smooth scrolling
//         markers: false, // Optional: Show markers for debugging
//       });

//       // ScrollTrigger for each section to manage smooth scrolling
//       ScrollTrigger.create({
//         trigger: section,
//         start: "top top", // Start when the top of the section reaches the top of the viewport
//         end: "+=100%", // End when the next section begins
//         scrub: true, // Smooth transition between sections
//         markers: false, // Optional: Show markers for debugging
//       });
//     });
//   }, []);

//   return (
//     <div className="relative">
//       {/* Section 1 */}
//       <div className="section flex" data-scroll-section>
//         {/* Left Content */}
//         <div className="w-1/2 h-screen bg-[#E2E3E6] flex items-center relative">
//           <LeftContent
//             heading="Setting New Standards in Apparel Exports"
//             para="Crafting quality apparel with a commitment to ethical practices and sustainability since 1978"
//           />
//           <div className="absolute left-[8%] top-[65%]">
//             <Button buttontext={"SEE MORE"} path={""} />
//           </div>
//         </div>

//         {/* Right Content (Pinned) */}
//         <div className="right-content w-1/2 h-screen relative overflow-hidden">
//           <RightContent image="./images/LandingPage/A.png" />
//         </div>
//       </div>

//       {/* Section 2 */}
//       <div className="section flex" data-scroll-section>
//         {/* Left Content */}
//         <div className="w-1/2 h-screen flex bg-[#E2E3E6] items-center relative">
//           <LeftContent
//             heading="Your Partner since 1978"
//             para="Texport is a well-recognized business house in the apparel industry. It is amongst the initiators of apparel exports from India."
//             head="About Us"
//           />
//           <div className="absolute left-[15%] top-[55%]">
//             <Button buttontext={"SEE MORE"} path={""} />
//           </div>
//         </div>

//         {/* Right Content (Pinned) */}
//         <div className="right-content w-1/2 h-screen relative overflow-hidden">
//           <RightContent image="./images/LandingPage/B.png" />
//         </div>
//       </div>

//       {/* Section 3 */}
//       <div className="section flex" data-scroll-section>
//         {/* Left Content */}
//         <div className="w-1/2 h-screen bg-[#E2E3E6] flex items-center relative">
//           <LeftContent
//             heading="Our Initiatives"
//             para="We believe in living in harmony with the environment and we as a business have a very vital role to play to champion the cause"
//           />
//           <div className="absolute left-[16%] top-[52%]">
//             <Button buttontext={"SEE MORE"} path={""} />
//           </div>
//         </div>

//         {/* Right Content (Pinned) */}
//         <div className="right-content w-1/2 h-screen relative overflow-hidden">
//           <RightContent image="./images/LandingPage/C.png" />
//         </div>
//       </div>

//       {/* Section 4 (Example) */}

//     </div>
//   );
// };

// export default LandingPage;
