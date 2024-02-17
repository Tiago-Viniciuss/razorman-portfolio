import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AppointmentButton = () => {

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
            <button id='appButton' className={`headerTitle ${isVisible ? 'visible' : 'hidden'} btn btn-dark`}>Agendar</button>
        </Link>
    </div>
  )
}

export default AppointmentButton