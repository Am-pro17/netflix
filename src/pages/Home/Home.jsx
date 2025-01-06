import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/Banner/Banner'
import Group from '../../components/Group/Group'
import BannerCarousel from '../../components/Banner/BannerCarousel'

function Home() {
  return (
    <>
    <Header/>
    <BannerCarousel/>
    <Banner/>
    <Group/>
    <Footer/>
    </>
  )
}

export default Home