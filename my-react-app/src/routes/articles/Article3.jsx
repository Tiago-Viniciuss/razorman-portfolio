import React from 'react'
import { Link } from 'react-router-dom'
import '/src/styles/Articles.css'
import Footer from '../../components/Footer'

const Article3 = () => {

  function navigateTop() {
      
    window.scrollTo(0, 0);

  }
  
  return (
    <div className='articlesAll'>
      <header>
        <Link to={'/articles'} onClick={navigateTop}>
            <button className='material-symbols-outlined'>arrow_back_ios</button>
        </Link>
        <h1>Cuidados para a barba</h1>
      </header>
      <div className='backgroundArticle' id='beardCare'></div>
      <article>
        <h3>
          Quer cuidar melhor da tua barba? Eu te ajudo!
        </h3>
          <p>
            Ter uma barba bem cuidada não se resume apenas a deixá-la crescer. É necessário dedicar tempo e atenção à sua higiene e uso de produtos adequados. Além disso, não podemos esquecer a importância de visitar regularmente um barbeiro para manter o visual em dia. Neste artigo, vamos explorar os passos essenciais para cuidar da sua barba, desde a higiene até o uso de cosméticos de qualidade, destacando o papel crucial do profissional de barbearia nesse processo.
          </p>
          <h3>
            Higiene Adequada:
          </h3>
          <p>
            Lave a sua barba regularmente com um <strong>shampoo específico para barba</strong>. 
            Evite usar shampoo de cabelo, pois eles podem ressecar a pele e os fios.
            <br />
            Seque bem a barba após lavá-la para evitar o acúmulo de umidade, que pode levar ao surgimento de fungos e bactérias.
            Use um <strong>pente ou escova própria para barba</strong> para desembaraçar os fios e distribuir os óleos naturais ao longo da barba.
            <br />
            É interessante frisar que <strong>não é muito saudável</strong> para a pele do rosto, <strong>lavá-la muitas vezes</strong> durante a semana com <strong>água quente</strong>. A água quente ou morna tende a ressecar a pele e até causar aumento de oleosidade em alguns tipos diferentes de pele. <strong>Opte pela água fria</strong>.
          </p>
          <figure>
            <div className='imgArticle' id='washingFace'></div>
            <figcaption>Homem lavando bem o rosto.</figcaption>
          </figure>
          
          <h3>
            Uso de Cosméticos de Qualidade:
          </h3>
          <p>
            Além da higiene, é importante utilizar produtos de qualidade para manter a saúde e a beleza da sua barba. Aqui estão alguns produtos essenciais:
            <br />
            <strong>Óleo para barba:</strong> O óleo ajuda a hidratar os fios, prevenir o ressecamento e dar brilho à barba. Procure por produtos com ingredientes naturais, como óleos essenciais e extratos de plantas.
            <br />
            <strong>Bálsamo ou cera para barba:</strong> Esses produtos são ideais para modelar a barba e controlar os fios rebeldes. Eles também ajudam a manter a hidratação e proteger a barba de agressões externas.
            <br />
            <strong>Loção pós-barba:</strong> Após o barbear, é importante aplicar uma loção pós-barba para acalmar a pele e prevenir irritações.
          </p>    
          <figure>
            <div className='imgArticle' id='barbershopCosmetics'></div>
            <figcaption>Cosméticos para barba.</figcaption>
          </figure>
            <h3>
                Importância do Barbeiro:
            </h3>
          <p>
          Visitar regularmente um barbeiro é essencial para manter a sua barba saudável e com um visual impecável. Aqui estão algumas razões pelas quais o barbeiro é tão importante:
        <br />
        <strong>Corte e modelagem profissional:</strong> Um barbeiro qualificado saberá como cortar e modelar a sua barba de acordo com o formato do seu rosto e as suas preferências pessoais.
        <br />
        <strong>Tratamentos especializados:</strong> Os barbeiros oferecem uma variedade de tratamentos especializados, como hidratação, tonificação e revitalização da barba.
        <br />
        <strong>Orientação personalizada:</strong> Um bom barbeiro poderá oferecer orientações personalizadas sobre os cuidados com a sua barba, recomendando os produtos e técnicas mais adequados para o seu tipo de pele e estilo de vida.
          </p>
          <figure>
            <div className='imgArticle' id='barberWorking'></div>
            <figcaption>Barbeiro a atender cliente.</figcaption>
          </figure>
          <p>
          Em resumo, cuidar da sua barba envolve uma combinação de higiene adequada, uso de cosméticos de qualidade e visitas regulares ao barbeiro. Ao seguir essas dicas, você poderá manter a sua barba saudável, bonita e com um visual impecável.
          </p>
      </article>
      <Footer/>
    </div>
  )
}

export default Article3