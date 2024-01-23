import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './components/Header'

function App() {

  return (
      <div className='App'>
        <Header/>
        <Outlet/>
      </div>
  )
}

export default App
