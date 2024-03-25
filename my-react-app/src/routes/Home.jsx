import React from 'react'
import '../styles/Home.css'
import Header from '../components/Header'
import AppointmentButton from '../components/AppointmentButton'
import Main from '../components/Main'
import AboutMe from '../components/AboutMe'
import MyJob from '../components/MyJob'
import Mission from '../components/Mission'
import Footer from '../components/Footer'
import CookiesPopup from '../components/CookiesPopup'

const Home = () => {
  return (
    <div>
        <Header/>
        <CookiesPopup/>
        <Main/>
        <AboutMe/>
        <AppointmentButton/>
        <MyJob/>
        <Mission/>
        <Footer/>
    </div>
  )
}

export default Home