import React from 'react'
import LandingPage from './LandingPage'
import About from './About'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OurApporach from './OurApporach';
import Leadership from './Leadership';
import OurLegacy from './OurLegacy';
import Product from './Product';
import Womens from './Womens';
import Kids from './Kids';
import KnittedFabrics from './KnittedFabrics';
import Scrolltop from './components/Scrolltop';
import Mens from './components/Mens';
import People from './People';
import Culture from './Culture';
import Contact from './Contact';
import News from './News';
import Careers from './Careers';




const App = () => {
  return (
    <div  className="h-screen ">
     <Router basename="/Teaxport/">
      <Scrolltop/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Product" element={<Product/>} />
        <Route path="/People" element={<People/>} />
        <Route path="/Culture" element={<Culture/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/News" element={<News/>} />
        <Route path="/Careers" element={<Careers/>} />
        <Route path="/Mens" element={<Mens/>} />
        <Route path="/Womens" element={<Womens/>} />
        <Route path="/Kids" element={<Kids/>} />
        <Route path="/KnittedFabrics" element={<KnittedFabrics/>} />
        <Route path="/OurApproach" element={<OurApporach />} />
        <Route path="/OurLegacy" element={<OurLegacy />} />
        <Route path="/Leadership" element={<Leadership />} />
      </Routes>
     </Router>

    </div>
  )
}

export default App


// Install GSAP if not already installed: npm install gsap
// Import necessary GSAP plugins
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // Register the ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const MultiSectionAnimation = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const sections = document.querySelectorAll(".section");
//     const rightPanels = document.querySelectorAll(".right-panel");

//     sections.forEach((section, index) => {
//       const rightPanel = rightPanels[index];

//       if (rightPanel) {
//         gsap.timeline({
          
//           scrollTrigger: {
//             trigger: section,
//             start: "top top",
//             end: "bottom top",
//             pin:".right-panel",
//             pinType:"fixed",
//             scrub: true,
//           },
//         });
//       }
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <div ref={containerRef} style={{ overflow: "hidden" }}>
//       {/* Section 1 */}
//       <div className="section" style={{ display: "flex", height: "100vh" ,width:"100vw"}}>
//         <div style={{ flex: 1, backgroundColor: "#f0f0f0", padding: "20px" }}>
//           <h1>Section 1 - Left</h1>
//           <p>This is the left panel content for section 1.</p>
//         </div>
//         <div
//           className="right-panel"
//           style={{
//             flex: 1,
//             backgroundColor: "#333",
//             color: "white",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             position: "sticky",
//             top: 0,
//           }}
//         >
//           <h1>Section 1 - Right</h1>
//         </div>
//       </div>

//       {/* Section 2 */}
//       <div className="section" style={{ display: "flex", height: "100vh",width:"100vw" }}>
//         <div style={{ flex: 1, backgroundColor: "#ffa500", padding: "20px" }}>
//           <h1>Section 2 - Left</h1>
//           <p>This is the left panel content for section 2.</p>
//         </div>
//         <div
//           className="right-panel"
//           style={{
//             flex: 1,
//             backgroundColor: "#444",
//             color: "white",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             position: "sticky",
//             top: 0,
//           }}
//         >
//           <h1>Section 2 - Right</h1>
//         </div>
//       </div>

//       {/* Section 3 */}
//       <div className="section" style={{ display: "flex", height: "100vh" ,width:"100vw"}}>
//         <div style={{ flex: 1, backgroundColor: "#ffcc00", padding: "20px" }}>
//           <h1>Section 3 - Left</h1>
//           <p>This is the left panel content for section 3.</p>
//         </div>
//         <div
//           className="right-panel"
//           style={{
//             flex: 1,
//             backgroundColor: "#555",
//             color: "white",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             position: "sticky",
//             top: 0,
//           }}
//         >
//           <h1>Section 3 - Right</h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MultiSectionAnimation;
