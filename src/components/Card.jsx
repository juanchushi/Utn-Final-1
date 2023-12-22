const Card = ({ nombre, genero, especie, imagen }) => {

    return (
        <div className="card">
            <h1>{nombre}</h1>
            <h2>Genero: {genero}</h2>
            <div>
                <p>Especie: {especie}</p>
                <div>
                    <img src={imagen} className="imagen"/>
                </div>
            </div>
        </div>
    )
}

export default Card