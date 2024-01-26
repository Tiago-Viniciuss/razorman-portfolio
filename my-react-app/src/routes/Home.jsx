import React from 'react'
import '../styles/Home.css'
import Main from '../components/Main'
import AboutMe from '../components/AboutMe'
import MyJob from '../components/MyJob'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
        <Main/>
        <AboutMe/>
        <MyJob/>
        <Contact/>
    </div>
  )
}

export default Home