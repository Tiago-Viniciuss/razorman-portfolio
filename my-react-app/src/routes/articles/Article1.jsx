import React from 'react'
import { Link } from 'react-router-dom'
import '/src/styles/Articles.css'
import Footer from '../../components/Footer'
import {Trans, useTranslation} from 'react-i18next'

const Article1 = () => {

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
        <h1 id='article1Title'>{t("blog.article1")}</h1>
      </header>
      <div className='backgroundArticle' id='razor'></div>
      <article>
        <h3>
          {t("article1.title1")}
        </h3>
          <p>
          {t("article1.paragraph1")}
          </p>
          <h3>
          {t("article1.title2")}
          </h3>
          <p>
            {t("article1.paragraph2")}
          </p>
          <figure>
            <div className='imgArticle' id='greek'></div>
            <figcaption>{t("article1.figcaption1")}</figcaption>
          </figure>
          
          <h3>
            {t("article1.title3")}
          </h3>
          <p>
            {t("article1.paragraph3")}
          </p>    
            <h3>
              {t("article1.title4")}
            </h3>
          <p>
            {t("article1.paragraph4")}
          </p>
          <h3>
            {t("article1.title5")}
          </h3>
          <p>
            {t("article1.paragraph5")}
          </p>
          <figure>
            <div className='imgArticle' id='barbers'></div>
            <figcaption>{t("article1.figcaption2")}</figcaption>
          </figure>
          <h3>
            {t("article1.title6")}
          </h3>
          <p>
            {t("article1.paragraph6")}
          </p>
          <figure>
            <div className='imgArticle' id='gillete'></div>
            <figcaption>{t("article1.figcaption3")}</figcaption>
          </figure>
          <h3>
            {t("article1.title7")}
          </h3>
          <p>
            {t("article1.paragraph7")}
          </p>
          <figure>
            <div className='imgArticle' id='barberChair'></div>
            <figcaption>{t("article1.figcaption4")}</figcaption>
          </figure>
      </article>
            <aside>
              <h3>{t("blog.morearticles")}</h3>
              <div className='links'>
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
              </div>
            </aside>
      <Footer/>
    </div>
  )
}

export default Article1