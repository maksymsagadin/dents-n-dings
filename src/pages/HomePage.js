import React from 'react'
import WorkSection from '../components/WorkSection/WorkSection'
import Features from '../components/Features/Features'
import Hero from '../components/Hero/Hero'
import Info from '../components/Info/Info'

const HomePage = ({ heroSection, aboutSection, servicesSection, gallerySection }) => {
  return (
    <>
      <Hero heroData={heroSection}/>
      <Features id='services' servicesData={servicesSection} />
      <Info id='about' aboutData={aboutSection} />
      <WorkSection id='work' galleryData={gallerySection}/>
    </>
  )
}

export default HomePage