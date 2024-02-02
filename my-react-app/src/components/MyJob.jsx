import React from 'react'
import '../styles/MyJob.css'

const MyJob = () => {
  return (
    <div id='myJob'>
        <h4>
            Meu trabalho
        </h4>
        <p>
            Costumo fazer os mais variados estilos de corte de cabelo e barba, desde os mais tradicionais até os mais modernos. E o mais impressionante é que alguns cortes clássicos, como o <i>mullet</i>, por exemplo, voltou com força ao mercado e está sendo cada vez mais pedido. Assim como a barba longa ganhou novos holofotes na última década, deixando o tradicional rosto liso para trás. Além de me atualizar em cortes masculinos para adultos, também busco sempre prestar um excelente serviço às crianças e até mulheres. Neste último caso, faço apenas cortes específicos, porém isto torna-me um barbeiro bastante versátil.
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
        </section>
    </div>
  )
}

export default MyJob