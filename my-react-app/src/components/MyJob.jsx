import React from 'react'
import '../styles/MyJob.css'
import { Trans, useTranslation } from 'react-i18next'

const MyJob = () => {
    const {t} = useTranslation()
  return (
    <div id='myJob'>
        <h4>
           {t("myjob.title")}
        </h4>
        <p>
        {t("myjob.subtitle")}
        </p>
        <section id='jobSection'>
            <div className='pictureBorder'>
                <div id="picture1" className='jobPicture'></div>
            </div>
            <div className='pictureBorder'>
                <div id="picture2" className='jobPicture'></div>
            </div>
            <div className='pictureBorder'>
                <div id="picture3" className='jobPicture'></div>
            </div>
            <div className='pictureBorder'>
                <div id="picture4" className='jobPicture'></div>
            </div>
            <div className='pictureBorder'>
                <div id="picture5" className='jobPicture'></div>
            </div>
            <div className='pictureBorder'>
                <div id="picture6" className='jobPicture'></div>
            </div>
            <div className='pictureBorder'>
                <div id="picture7" className='jobPicture'></div>
            </div>
            <div className='pictureBorder'>
                <div id="picture8" className='jobPicture'></div>
            </div>
            <div className='pictureBorder'>
                <div id="picture9" className='jobPicture'></div>
            </div>
            <div className='pictureBorder'>
                <div id="picture10" className='jobPicture'></div>
            </div>
            <div className='pictureBorder'>
                <div id="picture11" className='jobPicture'></div>
            </div>
            <div className='pictureBorder'>
                <div id="picture12" className='jobPicture'></div>
            </div>
        </section>
    </div>
  )
}

export default MyJob