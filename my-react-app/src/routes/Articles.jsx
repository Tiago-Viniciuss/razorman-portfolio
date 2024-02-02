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
        <h1>Artigos</h1>
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
          <Link to={'/article2'}>
            <div className='thumbnailArticle' id='article2'>
              <span>Como controlar a caspa</span>
            </div>
          </Link>
          <Link to={'/article3'}>
            <div className='thumbnailArticle' id='article3'>
              <span>Cuidados para a barba</span>
            </div>
          </Link>
        </main>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti harum quod blanditiis ut aliquid placeat dolorum saepe laboriosam sapiente voluptatibus non expedita, id, praesentium natus eos dolor distinctio quis quisquam? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure optio temporibus autem blanditiis nam nihil rem. Adipisci quam aut, quo laboriosam cupiditate repellendus, nobis nesciunt illum unde nostrum molestiae corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sit enim officia quaerat ipsum quo aperiam eveniet obcaecati aut dolore eaque commodi optio dolores sint, error assumenda distinctio, dolorum veniam?
        </p>
        <Footer/>
    </div>
  )
}

export default Articles