import React from 'react'
import '../styles/MyJob.css'
import LazyLoad from 'react-lazy-load';

const MyJob = () => {

  return (
    <div id='myJob'>
        <h4>
            Meu trabalho
        </h4>
        <section id='jobSection'>
            <div className='pictureBorder'>
                <LazyLoad height={250} offset={100}>
                    <img src="/public/picture1.jpg" alt="Example" />
                </LazyLoad>
            </div>
            <div className='pictureBorder'>
                <LazyLoad height={250} offset={100}>
                    <img src="/public/picture2.jpg" alt="Example" />
                </LazyLoad>
            </div>
            <div className='pictureBorder'>
                <LazyLoad height={250} offset={100}>
                    <img src="/public/picture3.jpg" alt="Example" />
                </LazyLoad>
            </div>
            <div className='pictureBorder'>
                <LazyLoad height={250} offset={100}>
                    <img src="/public/picture4.jpg" alt="Example" />
                </LazyLoad>
            </div>
            <div className='pictureBorder'>
                <LazyLoad height={250} offset={100}>
                    <img src="/public/picture5.jpg" alt="Example" />
                </LazyLoad>
            </div>
            <div className='pictureBorder'>
                <LazyLoad height={250} offset={100}>
                    <img src="/public/picture6.jpg" alt="Example" />
                </LazyLoad>
            </div>
        </section>
    </div>
  )
}

export default MyJob