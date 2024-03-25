import React from 'react'
import '../styles/Footer.css'
import { Trans, useTranslation } from 'react-i18next'

const Footer = () => {

const {t} = useTranslation()

  return (
    <div>
      <footer id='footer'>
        <h3>
          {t("h3.title")}
        </h3>
        <section id='socialMedia'>
          <a href="https://wa.me/351911905251">
            <div id='whatsapp' className='footerImg'></div>
          </a>
          <a href="https://www.instagram.com/tiagorazorman/" target='_blank'>
            <div id='instagram' className='footerImg'></div>
          </a>
          <a href="https://www.linkedin.com/in/tiago-vinicius/" target='_blank'>
            <div id='linkedin' className='footerImg'></div>
          </a>
        </section>
        <p className='copyright'>
          &copy;
          <a href="https://github.com/Tiago-Viniciuss" target='_blank'>Tiago Razorman. </a>
          {t("rights.title")}<span></span>
        </p>
      </footer>
    </div>
  )
}

export default Footer