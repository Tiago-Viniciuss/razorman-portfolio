import React from 'react'
import '../styles/AboutMe.css'
import { Trans, useTranslation } from 'react-i18next'

const AboutMe = () => {
  const {t} = useTranslation()
  return (
    <div id='aboutMe'>
          
          <h3>{t("aboutme.title")}</h3>
          <p>"
          {t("aboutme.subtitle")}"
          </p>
          <div id='razormanPicture'></div>
    </div>
  )
}

export default AboutMe