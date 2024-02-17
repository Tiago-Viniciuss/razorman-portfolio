import React from 'react'
import '../styles/Home.css'
import Header from '../components/Header'
import AppointmentButton from '../components/AppointmentButton'
import Main from '../components/Main'
import AboutMe from '../components/AboutMe'
import MyJob from '../components/MyJob'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Header/>
        <Main/>
        <AboutMe/>
        <AppointmentButton/>
        <MyJob/>
        <Footer/>
    </div>
  )
}

export default Home