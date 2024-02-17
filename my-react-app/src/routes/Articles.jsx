import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import '../styles/Articles.css'

const Articles = () => {



  return (
    <div id='articles'>
      <header>
        <Link to={'/'}>
            <button className='material-symbols-outlined'>home</button>
        </Link>
        <h1>Razor Blog</h1>
      </header>
        <h2>
          Curiosidades e ensinamentos dentro da área da barbearia
        </h2>
        <main>
          <Link to={'/article1'}>
            <div className='thumbnailArticle' id='article1'>
              <span>A história da Barbearia</span>
            </div>
          </Link>
            <div className='thumbnailArticle' id='article2'>
              <span>Como controlar a caspa</span>
            </div>
            <div className='thumbnailArticle' id='article3'>
              <span>Cuidados para a barba</span>
            </div>
        </main>
        <Footer/>
    </div>
  )
}

export default Articles