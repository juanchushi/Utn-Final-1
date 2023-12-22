import React from 'react'

function Paginacion({ pagina, setData, setPagina }) {

    const paginaSiguiente = async () => {
        setPagina(pagina + 1)
        fetch('https://rickandmortyapi.com/api/character/?page=' + pagina).then(response => response.json()).then(data => setData(data))
    }

    const paginaPrevia = async () => {
        setPagina(pagina - 1)
        fetch('https://rickandmortyapi.com/api/character/?page=' + pagina).then(response => response.json()).then(data => setData(data))
    }

    return (
        <div className='divNav-container'>
            <div className='divNav'>
                <button className='botonNav' disabled={pagina < 2 ? true : false} onClick={paginaPrevia}>← Anterior</button>
                <p className='pagina'>{pagina}</p>
                <button className='botonNav' onClick={paginaSiguiente}>Siguiente →</button>
            </div>
        </div>
    )
}

export default Paginacion