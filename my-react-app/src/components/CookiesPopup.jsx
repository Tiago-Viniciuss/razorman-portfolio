import React, { useEffect, useState } from 'react';
import '../styles/Cookies.css'
import {Trans, useTranslation} from 'react-i18next'

const CookiesPopup = () => {
   
  const {t} = useTranslation()

  const [isVisible, setIsVisible] = useState(true);

  const handleAcceptCookies = () => {
    setIsVisible(false); 
    const Accept = 'Accepted'
    localStorage.setItem('CookieAccepted', Accept)
    localStorage.removeItem('CookieDeclined')
  };

  const handleDeclineCookies = () => {
    setIsVisible(false);

    const Decline = 'Declined'
    localStorage.setItem('CookieDeclined', Decline)
    localStorage.removeItem('CookieAccepted')
  };

  useEffect(()=> {
    const cookiesAccepted = localStorage.getItem('CookieAccepted')
    const cookiesDeclined = localStorage.getItem('CookieDeclined')
    if(cookiesAccepted || cookiesDeclined) {
        setIsVisible(false)
    } 
  }) 

  return (
    isVisible && (
      <div className="cookiePopup">
        <div className="cookiContent">
          <h2>{t("cookies.title")}</h2>
          <p>{t("cookies.subtitle")}</p>
          <div className="buttonContainer">
            <button onClick={handleAcceptCookies}>{t("cookies.button1")}</button>
            <button onClick={handleDeclineCookies}>{t("cookies.button2")}</button>
          </div>
        </div>
      </div>
    )
  );
};

export default CookiesPopup;
