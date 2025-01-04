import React from 'react'
import Navbar from './components/Navbar'
import LegacyContent from './components/LegacyContent'
import FamilyList from './components/FamilyList';
import TeamList from './components/TeamList';
import NewsAndStories from './components/NewsAndStories'
import Footer from './components/Footer';
import LeadershipLanding from './components/LeadershipLanding';





const Legacy = () => {



  const members = [
    {
      title: 'Late D.G. Goenka',
      description: 'Founder of the organization and a visionary leader.',
      image: "./images/Family/NARENDRA_GOENKA.png", // Replace with actual URL

    },
    {
      title: 'Sajjan Kumar Goenka',
      description: 'A key contributor to the success of the family business.',
      image: "./images/Family/NARENDRA_GOENKA.png", // Replace with actual URL

    },
    {
      title: 'Suresh Kumar Goenka',
      description: 'Leads the operations with precision and dedication.',
      image: "./images/Family/NARENDRA_GOENKA.png", // Replace with actual URL

    },
    {
      title: 'Narendra Goenka',
      description: 'Mr. Harminder Sahni has completed his M.B.A. from IMS, Indore, and is a Textile Engineer from TITS, Bhiwani. He is the Founder and Managing Director of Wazir Advisors. He has been advising various consumer-centric businesses and carries with him immense experience of over two decades as a management consultant in the Consumer Goods, Retail and Textile sectors. He has been guiding various Indian and International companies on corporate strategy, business creation, diversification, and performance enhancement.',
      image: "./images/Family/NARENDRA_GOENKA.png", // Replace with actual URL
    },
    {
      title: 'Arun Goenka',
      description: 'Handles logistics and ensures seamless operations.',
      image: "./images/Family/NARENDRA_GOENKA.png", // Replace with actual URL

    },
    {
      title: 'Neeraj Goenka',
      description: 'Specializes in marketing and customer relations.',
      image: "./images/Family/NARENDRA_GOENKA.png", // Replace with actual URL

    },
  ];
  const team_members = [
    {
      name: 'SASI SEKAR',
      details: 'Founder of the organization and a visionary leader.',
    },
    {
      name: 'DINESH PAL',
      details: 'A key contributor to the success of the family business.',
    },
    {
      name: 'RAGHAVENDRA SHAH',
      details: 'Leads the operations with precision and dedication.',
    },
    {
      name: 'SURESH JAIN',
      details: 'Focused on innovative strategies and growth.',
      // image: "./public//images/Family/NARENDRA_GOENKA.png", // Replace with actual URL
    },
    {
      name: 'PADMANABHAN MADHAVAN',
      details: 'Handles logistics and ensures seamless operations.',
    },
    {
      name: 'BIJU THANKAPPAN',
      details: 'Specializes in marketing and customer relations.',
    },
    {
      name: 'VARUN BHASKAR',
      details: 'Specializes in marketing and customer relations.',
    },
    {
      name: 'GAURAV SHARMA',
      details: 'Specializes in marketing and customer relations.',
    },
  ];
  


  return (
    <div>
        <Navbar/>

{/* landing */}

        <div className=' h-[90vh] '>
        <LeadershipLanding/>
        </div>

      {/* legacy content  */}

        <div className=" h-[50vh] ">
            <LegacyContent/>
        </div>

     

<div className="min-h-screen  flex flex-col  relative items-center pt-28 justify-center p-4">
      <h1 className=" top-12 left-36  absolute font-custom text-xl ">The Family</h1>
      <div className="w-[80vw]  ">

        <FamilyList data={members} />
      </div>
    </div>



    <div className="min-h-screen  flex flex-col relative items-center pt-28 justify-center p-4">
      <h1 className=" top-12 left-36  absolute font-custom text-xl ">The Team</h1>
      <div className="w-[70vw]  ">

        <TeamList data={team_members} />
      </div>
    </div>


      {/* News and stories */}
    <div className="h-[100vh] mt-24">
      <NewsAndStories/>
    </div>

      {/* footer */}

      <div className="h-[50vh]">
            <Footer />
        </div>

    </div>
  )
}

export default Legacy