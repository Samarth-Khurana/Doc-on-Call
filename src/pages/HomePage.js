import React from 'react'
import Header from '../components/Header'
import HeaderSection from '../components/HeaderSection'
import AnimatedCards from '../components/AnimatedCards'
import InfoSection from '../components/InfoSection'
import ServiceSection from '../components/ServiceSection'

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeaderSection />
      <AnimatedCards />
      <AnimatedCards />
      <AnimatedCards />
      <ServiceSection />
      <InfoSection />
    </div>
  )
}

export default HomePage
