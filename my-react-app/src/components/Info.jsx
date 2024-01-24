import React from 'react'
import '../styles/Info.css'

const Info = () => {

    function openHaircut() {
        const haircut = document.getElementById('haircut')
        const button = document.getElementById('openHaircut')
        haircut.classList.add('active')
        button.style.display = 'none'
    }

    function closeHaircut() {
        const haircut = document.getElementById('haircut')
        const button = document.getElementById('openHaircut')
        haircut.classList.remove('active')
        button.style.display = 'block'
    }

    function openBeard() {
        const beard = document.getElementById('beard')
        const button = document.getElementById('openBeard')
        beard.classList.add('active')
        button.style.display = 'none'
    }

    function closeBeard() {
        const beard = document.getElementById('beard')
        const button = document.getElementById('openBeard')
        beard.classList.remove('active')
        button.style.display = 'block'
    }


  return (
    <div className='infoContainer'>
        <h5>
            Minhas Habilidades
        </h5>
        <div >
            <button id='openHaircut' onClick={openHaircut}>Corte de Cabelo</button>
            <div id='haircut' className='infoBox'>
                <button onClick={closeHaircut}>X</button>
            </div>
        </div>
        <div>
            <button id='openBeard' onClick={openBeard}>Barba</button>
            <div id='beard' className='infoBox'>
            <button onClick={closeBeard}>X</button>
            </div>
        </div>
    </div>
  )
}

export default Info