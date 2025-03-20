import React from 'react'
import HeroSection from '../Pages/Hero'
import Whatwedo from '../Pages/Whatwedo'
import Meetheteam from '../Pages/Meetheteam'
import ProjectPlan from '../Pages/buttonsection'

export default function Homepage() {
  return (
    <div>
        <HeroSection/>
        <Whatwedo/>
        <Meetheteam/>
        <ProjectPlan/>
      
    </div>
  )
}
