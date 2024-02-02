import React from 'react'
import { Link } from 'react-router-dom'
import '/src/styles/Articles.css'
import Footer from '../../components/Footer'

const Article1 = () => {
  return (
    <div className='articlesAll'>
      <header>
        <Link to={'/articles'}>
            <button className='material-symbols-outlined'>arrow_back_ios</button>
        </Link>
        <h1>A história da barbearia</h1>
      </header>
      <div className='backgroundArticle' id='razor'></div>
      <article>
        <h3>
          A Evolução da Barbearia: Uma Viagem Através do Tempo
        </h3>
          <p>
            A prática de cuidar da barba e do cabelo remonta a tempos imemoriais, refletindo não apenas a vaidade, mas também as mudanças culturais e sociais ao longo da história. A história da barbearia é fascinante, marcada por uma evolução que vai desde rituais antigos até o renascimento moderno das barbas bem cuidadas.
          </p>
          <h3>
            Era Antiga: Rituais e Cuidados Pessoais
          </h3>
          <p>
            Os registros históricos indicam que a barbearia tem raízes profundas na antiguidade. Civilizações como os egípcios, gregos e romanos praticavam a arte da barba e da depilação. Na Grécia Antiga, por exemplo, a barba era associada à virilidade, mas os soldados a raspavam para evitar que os inimigos a usassem como alça em batalhas. Os egípcios, por sua vez, faziam uso de navalhas de cobre e ouro para aparar a barba.
          </p>
          <figure>
            <div className='imgArticle' id='greek'></div>
            <figcaption>Estátua representando um grego com barba.</figcaption>
          </figure>
          
          <h3>
            Idade Média: Barbearias e Sociedade
          </h3>
          <p>
            Durante a Idade Média, a prática de barbear ganhou mais estrutura, com o surgimento das primeiras barbearias. Estes estabelecimentos não eram apenas locais para cuidados com a barba, mas também espaços sociais onde homens se reuniam para conversar e compartilhar notícias. As barbearias tornaram-se centros comunitários, proporcionando mais do que apenas serviços de barbear.
          </p>    
            <h3>
              Renascimento: Estilos e Elegância
            </h3>
          <p>
            Com o Renascimento, houve um ressurgimento do interesse pela estética pessoal. A barba voltou a ser vista como um símbolo de status e estilo. Pinturas famosas da época retratam homens com barbas bem cuidadas, refletindo a influência da moda na sociedade da época. As barbearias continuaram a ser locais importantes para encontros sociais, onde as conversas se misturavam com o som das navalhas.
          </p>
          <h3>
            Século XIX: A Era Dourada das Barbearias
          </h3>
          <p>
            O século XIX testemunhou o auge das barbearias, especialmente na Europa e nos Estados Unidos. Homens frequentavam esses estabelecimentos não apenas para aparar a barba, mas também para experiências de cuidados pessoais mais amplas, como banhos e massagens. A popularidade das barbearias estava relacionada ao crescente foco na higiene pessoal e no bem-estar.
          </p>
          <figure>
            <div className='imgArticle' id='barbers'></div>
            <figcaption>Barbeiros trabalhando no século XIX.</figcaption>
          </figure>
          <h3>
            Século XX: Declínio e Ressurgimento
          </h3>
          <p>
            Com o advento das lâminas de barbear descartáveis e a simplificação dos cuidados pessoais em casa, as barbearias enfrentaram um declínio no século XX. Muitas delas fecharam suas portas, e a prática de barbear tornou-se mais uma atividade doméstica. No entanto, a virada do século XXI trouxe consigo um ressurgimento do interesse pela barba e pela estética masculina. Barbearias modernas combinam o charme vintage com serviços contemporâneos, proporcionando aos clientes uma experiência única.
          </p>
          <figure>
            <div className='imgArticle' id='gillete'></div>
            <figcaption>Lâmina de barbear caseira com pincel.</figcaption>
          </figure>
          <h3>
            Atualidade: O Renascimento das Barbearias Modernas
          </h3>
          <p>
            As barbearias modernas tornaram-se verdadeiros refúgios para homens em busca de cuidados pessoais especializados. Oferecendo serviços que vão além do simples corte de cabelo e barba, esses estabelecimentos são projetados para criar experiências únicas. A cultura da barba floresceu novamente, refletindo uma sociedade que valoriza a individualidade e a expressão pessoal.
            Em conclusão, a história da barbearia é uma jornada fascinante através do tempo, refletindo as mudanças nas atitudes culturais e sociais em relação à estética masculina. Desde os rituais antigos até as barbearias modernas, a prática de barbear evoluiu, mas sua importância como um ritual de cuidado pessoal e espaço social permanece inegável.
          </p>
          <figure>
            <div className='imgArticle' id='barberChair'></div>
            <figcaption>Barbearia moderna do século XXI.</figcaption>
          </figure>
      </article>
      <Footer/>
    </div>
  )
}

export default Article1