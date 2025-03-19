import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './Pages/Navbar'
import Hero from './Pages/Hero';
import WhatWeDo from './Pages/Whatwedo';
import Meetheteam from './Pages/Meetheteam';
import PlanProject from './Pages/buttonsection';

export default function App() {
  return (
    <div>
      <CustomNavbar/>
      <Hero/>
      <WhatWeDo/>
      <Meetheteam/>
      <PlanProject/>
      
    </div>
  )
}
