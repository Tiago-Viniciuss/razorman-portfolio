import React, { useEffect, useState } from 'react'
import '../styles/Header.css'
import { Link } from 'react-router-dom';
import {Trans, useTranslation} from 'react-i18next'
import ChangeLanguage from '../components/ChangeLanguage'

const Header = () => {

  const {t} = useTranslation()

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = 50;

      if (scrollY > triggerPoint) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function openMenu() {
      const menu = document.getElementById('navMenu')
      if(window.innerWidth < 999) {
        menu.classList.toggle('visible')
      }
      
  }

  function closeMenu() {
    const menu = document.getElementById('navMenu')
    
    if(window.innerWidth < 999) {
      menu.classList.toggle('visible')
    }
  }

  function navigateTop() {
    const menu = document.getElementById('navMenu')

    window.scrollTo(0, 0);
    menu.classList.toggle('visible')
}


  return (
    <div>
         <header id='header'>
            <h1 id='headerTitle' className={`headerTitle ${isVisible ? 'visible' : 'hidden'}`}><a href="#mainPage"><div id='titleImage'></div></a></h1>
            <div id='changeLanguage'><span className='material-symbols-outlined'>language</span><ChangeLanguage/></div>
            <button className='material-symbols-outlined' id='menuButton' onClick={openMenu}>menu</button>
        </header>
        <menu id='navMenu'>
            <a href="#" onClick={closeMenu}>Home</a>
            <a href="#aboutMe" onClick={closeMenu}>{t("menu.aboutme")}</a>
            <a href="#myJob" onClick={closeMenu}>{t("menu.myjob")}</a>
            <a href="#footer" onClick={closeMenu}>{t("menu.contact")}</a>
            <Link onClick={navigateTop} to={'/articles'}>Razor Blog</Link>
        </menu>
    </div>
  )
}

export default Header