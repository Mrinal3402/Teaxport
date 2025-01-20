import React from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import Footer from './components/Footer'
import ContactDet from './components/ContactDet'
import Heading from './components/Heading'


const Contact = () => {
  return (
    <div>
        <Navbar/>
        <Heading heading="Contact Us"/>
        <Form/>
        <ContactDet/>
        {/* footer */}

        <div className="h-[50vh]">
            <Footer />
        </div>
    </div>
  )
}

export default Contact