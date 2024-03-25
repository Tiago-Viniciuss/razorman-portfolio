import React from 'react'
import { Link } from 'react-router-dom'
import '/src/styles/Articles.css'
import Footer from '../../components/Footer'
import {Trans, useTranslation} from 'react-i18next'

const Article3 = () => {

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
        <h1>{t("blog.article3")}</h1>
      </header>
      <div className='backgroundArticle' id='beardCare'></div>
      <article>
        <h3>
          {t("article3.title1")}
        </h3>
          <p>
          {t("article3.paragraph1")}
          </p>
          <h3>
          {t("article3.title2")}
          </h3>
          <p>
          {t("article3.paragraph2")}
          </p>
          <figure>
            <div className='imgArticle' id='washingFace'></div>
            <figcaption>{t("article3.figcaption1")}</figcaption>
          </figure>
          
          <h3>
          {t("article3.title3")}
          </h3>
          <p>
          {t("article3.paragraph3")}
          </p>    
          <figure>
            <div className='imgArticle' id='barbershopCosmetics'></div>
            <figcaption>{t("article3.figcaption2")}</figcaption>
          </figure>
            <h3>
            {t("article3.title4")}
            </h3>
          <p>
          {t("article3.paragraph4")}
          </p>
          <figure>
            <div className='imgArticle' id='barberWorking'></div>
            <figcaption>{t("article3.figcaption3")}</figcaption>
          </figure>
          <p>
          {t("article3.paragraph5")}
          </p>
      </article>
      <aside>
              <h3>{t("blog.morearticles")}</h3>
              <div className='links'>
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
              </div>
            </aside>
      <Footer/>
    </div>
  )
}

export default Article3