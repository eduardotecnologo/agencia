import React from 'react';
import ListaPost from '../components/ListaPost';
import ListaCategorias from '../components/ListaCategorias';
import Carousel from '../components/Carrosel';

const Home = () => {

  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Sua Agência Criativa, especialista em Tecnologias React</h2>
      </div>
        <Carousel />
        <ListaCategorias/>
        <ListaPost url={'/posts'}/>
    </main>
  )
}
export default Home