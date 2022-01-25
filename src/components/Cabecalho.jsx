import React from 'react'
import { Link } from 'react-router-dom'
import { FaRocket } from 'react-icons/fa';
import '../assets/css/components/cabecalho.css'

const Cabecalho = () => { 
  return(
    <header className="cabecalho container">
      <div className="menu-hamburger">
        <span className="menu-hamburger__icone">
        </span>
      </div>
      <div className="cabecalho-container">
        <Link to="/" className="flex flex--centro">
            <FaRocket style={{ position: 'absolute', top: '28px', height: '50px', width:'45px'}}/>
          <h1 className="cabecalho__titulo">React</h1>
        </Link>
      </div>

      <nav className="menu-cabecalho">
        <ul className="menu-itens">
          <li><Link to="#" className="menu-item menu-item--entrar">Entrar</Link></li>
          <li><Link to="#" className="menu-item">Serviços</Link></li>
          <li><Link to="/" className="menu-item">Blog</Link></li>
          <li><Link to="/sobre" className="menu-item">Sobre</Link></li>
        </ul>

      </nav>
      <div className="menu-cabecalho-background"></div>
    </header>
  )
}


export default Cabecalho