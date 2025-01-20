import React from 'react'
import Navbar from './components/Navbar'
import Heading from './components/Heading'
import NewsAndStories from './components/NewsAndStories'
import Footer from './components/Footer'


const News = () => {
  return (
    <div>
        <Navbar/>
        <Heading heading='Our News and Stories'/>
        <div className="h-[100vh]">
            <NewsAndStories/>
        </div>

        {/* footer */}

        <div className="h-[50vh]">
            <Footer />
        </div>
    </div>
  )
}

export default News