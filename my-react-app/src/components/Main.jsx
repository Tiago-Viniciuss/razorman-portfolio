import React from 'react'
import '../styles/Main.css'
import ImageCarousel from '../components/ImageCarousel'

const Main = () => {
  return (
    <div>
        <main id='mainPage'>
            <div id='mainTitle'>
                <h1>Tiago Razorman</h1>
                <h2>Barbeiro</h2>
                <h2 className='redTitle'>Profissional</h2>
                <p>Bem-vindo ao meu portfólio! Encontre aqui um pouco da minha história e inspirações para cortes de cabelo e barba.</p>
                <button className='btn btn-danger'>
                <a href="https://wa.me/351911905251" target='_blank'>Entre em Contato</a>
                </button>
            </div>
            <div id='mainPictureContainer'>
             <ImageCarousel/>
            </div>
        </main>
    </div>
  )
}

export default Main