import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import '../styles/Articles.css'
import {Trans, useTranslation} from 'react-i18next'

const Articles = () => {

  const {t} = useTranslation()

  function navigateTop() {
      
    window.scrollTo(0, 0);

  }

  return (
    <div id='articles'>
      <header>
        <Link to={'/'} onClick={navigateTop}>
            <button className='material-symbols-outlined'>home</button>
        </Link>
        <h1>Razor Blog</h1>
      </header>
        <h2>
          {t("blog.title")}
        </h2>
        <main>
          <Link to={'/article1'} onClick={navigateTop}>
            <div className='thumbnailArticle' id='article1'>
              <span>{t("blog.article1")}</span>
            </div>
          </Link>
            <Link to={'/article2'} onClick={navigateTop}>
              <div className='thumbnailArticle' id='article2'>
                <span>{t("blog.article2")}</span>
              </div>
            </Link>
            <Link to={'/article3'} onClick={navigateTop}>
              <div className='thumbnailArticle' id='article3'>
                <span>{t("blog.article3")}</span>
              </div>
            </Link>
        </main>
        <Footer/>
    </div>
  )
}

export default Articles