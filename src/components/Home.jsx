import { useEffect, useState } from "react"
import Card from "./Card"
import Paginacion from './Paginacion'

const Home = () => {
    const [data, setData] = useState()
    const [pagina, setPagina] = useState(1)

    useEffect(() => {
        async function fetchData() {
            fetch('https://rickandmortyapi.com/api/character').then(response => response.json()).then(data => setData(data))
        }
        fetchData()
    }, [])

    console.log(data)
    
    if (data) return (
        <div className="body">
            <div className="header">
                <h1>Rick & Morty API</h1>
            </div>
            <div className="cards">
                {data.results.map((personaje) => (
                    <Card nombre={personaje.name} genero={personaje.gender} especie={personaje.species} imagen={personaje.image} />
                ))}
            </div>
            <div>
                <Paginacion pagina={pagina} setPagina={setPagina} setData={setData} />
            </div>
            <footer>
                <p>
                    Implementacion de la API de Rick & Morty para el trabajo final de la primera parte, Desarrollador web Fullstack.
                </p>
                <br />
                <p>Si usted tiene alguna duda al respecto o algun comentario: </p>
                <a href="mailto:juanmartino88@hotmail.com">Contacteme</a>
                <section>
                    <br />
                    <a href=".header">Ir al inicio</a>
                </section>
            </footer>
        </div>
    )
}

export default Home 