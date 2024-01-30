import React from 'react'
import '../styles/Home.css'
import Main from '../components/Main'
import AboutMe from '../components/AboutMe'
import MyJob from '../components/MyJob'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Main/>
        <AboutMe/>
        <MyJob/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home