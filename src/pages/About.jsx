import React from 'react'

import '../assets/css/components/cartao.css';

const About = () => {
  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Sobre a Agência</h2>
      </div>
      <section className="container flex flex--centro">
        <article className="cartao">
          O blog da Agência foi criado para tirar diversas dúvidas sobre o mundo do desenvolvimento, 
          marketing e UX design
        </article>
      </section>
    </main>
  )
}

export default About