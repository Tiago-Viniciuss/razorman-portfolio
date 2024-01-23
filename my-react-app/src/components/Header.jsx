import React, { useEffect, useState } from 'react'
import '../styles/Header.css'

const Header = () => {

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

  


  return (
    <div>
         <header id='header'>
            <h1 id='headerTitle' className={`headerTitle ${isVisible ? 'visible' : 'hidden'}`}>Tiago Razorman</h1>
            <button className='material-symbols-outlined' id='menuButton'>menu</button>
        </header>
    </div>
  )
}

export default Header