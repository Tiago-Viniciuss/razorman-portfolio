import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Trans, useTranslation} from 'react-i18next'

const AppointmentButton = () => {

    const {t} = useTranslation()

    const [isVisible, setIsVisible] = useState(false);
   
    function navigateTop() {
      window.scrollTo(0, 0);
    }

  useEffect(() => {
      const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = 200;

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


  return (
    <div>
        <Link to={'/appointment'} onClick={navigateTop}>
            <button id='appButton' className={`headerTitle ${isVisible ? 'visible' : 'hidden'} btn btn-dark`}>{t("appointment.title")}</button>
        </Link>
    </div>
  )
}

export default AppointmentButton