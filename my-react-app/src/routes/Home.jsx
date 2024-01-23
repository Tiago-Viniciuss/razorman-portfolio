import React from 'react'
import '../styles/Home.css'
import Main from '../components/Main'
import AboutMe from '../components/AboutMe'
import MyJob from '../components/MyJob'

const Home = () => {
  return (
    <div>
        <Main/>
        <AboutMe/>
        <MyJob/>
    </div>
  )
}

export default Home