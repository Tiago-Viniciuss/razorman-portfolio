import React from 'react'
import '../styles/Home.css'
import Main from '../components/Main'
import AboutMe from '../components/AboutMe'
import MyJob from '../components/MyJob'
import Info from '../components/Info'

const Home = () => {
  return (
    <div>
        <Main/>
        <AboutMe/>
        <MyJob/>
        <Info/>
    </div>
  )
}

export default Home