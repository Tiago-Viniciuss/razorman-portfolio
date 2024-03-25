import React from 'react'
import '../styles/Main.css'
import ImageCarousel from '../components/ImageCarousel'
import {Trans, useTranslation} from 'react-i18next'

const Main = () => {
  const {t} = useTranslation();
  return (
    <div>
        <main id='mainPage'>
            <div id='mainTitle'>
                <h1>Tiago Razorman</h1>
                <h2>{t("profession.title")}</h2>
                <h2 className='redTitle'>{t("profession.subtitle")}</h2>
                <p>{t("welcome.title")}</p>
                <button className='btn btn-danger'>
                <a href="https://wa.me/351911905251" target='_blank'>{t("contactbutton.title")}</a>
                </button>
            </div>
            <div id='mainPictureContainer'>
             <ImageCarousel/>
            </div>
        </main>
    </div>
  )
}

export default Main