import React from 'react'
import { Link } from 'react-router-dom'
import '/src/styles/Articles.css'
import Footer from '../../components/Footer'
import {Trans, useTranslation} from 'react-i18next'

const Article2 = () => {

  const {t} = useTranslation()

  function navigateTop() {
      
    window.scrollTo(0, 0);

  }

  return (
    <div className='articlesAll'>
      <header>
        <Link to={'/articles'} onClick={navigateTop}>
            <button className='material-symbols-outlined'>arrow_back_ios</button>
        </Link>
        <h1>{t("blog.article2")}</h1>
      </header>
      <div className='backgroundArticle' id='caspaBack'></div>
      <article>
        <h3>
        {t("article2.title1")}
        </h3>
          <p>
          {t("article2.paragraph1")}
          </p>
          <h3>
          {t("article2.title2")}
          </h3>
          <p>
          {t("article2.paragraph2")}
          </p>
          <figure>
            <div className='imgArticle' id='fungo'></div>
            <figcaption>{t("article2.figcaption1")}</figcaption>
          </figure>
          
          <h3>
          {t("article2.title3")}
          </h3>
          <p>
          {t("article2.paragraph3")}
          </p>    
            
          <figure>
            <div className='imgArticle' id='product'></div>
            <figcaption>{t("article2.figcaption2")}</figcaption>
          </figure>
          <p>
            {t("article2.paragraph4")}
          </p>
          <figure>
            <div className='imgArticle' id='health'></div>
            <figcaption>{t("article2.figcaption3")}</figcaption>
          </figure>
      </article>
      <aside>
              <h3>{t("blog.morearticles")}</h3>
              <div className='links'>
                <Link to={'/article1'} onClick={navigateTop}>
                            <div className='thumbnailArticle' id='article1'>
                <span>{t("blog.article1")}</span>
                            </div>
                          </Link>
                <Link to={'/article3'} onClick={navigateTop}>
                  <div className='thumbnailArticle' id='article3'>
                    <span>{t("blog.article3")}</span>
                  </div>
                </Link>
              </div>
            </aside>
      <Footer/>
    </div>
  )
}

export default Article2