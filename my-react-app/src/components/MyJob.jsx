import React from 'react'
import '../styles/MyJob.css'

const MyJob = () => {
  return (
    <div id='myJob'>
        <h4>
            Meu trabalho
        </h4>
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
        </section>
    </div>
  )
}

export default MyJob