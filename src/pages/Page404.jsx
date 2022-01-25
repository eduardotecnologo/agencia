import React from 'react';
import '../assets/css/404.css';

const Pagina404 = () => {
    return(
        <main className="container flex flex--centro flex--coluna">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="-27 0 80 30" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="naoencontrado-texto">
                Nãoo! Página não encontrada! 
            </p>
        </main>
    )
}

export default Pagina404;
