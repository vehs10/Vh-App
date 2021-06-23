import React from 'react';

const CardDetail = (props) => {
    let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png`;
    return (
        <div id="home" className="row">
            <div className="col-12 col-lg-6">
                <img src={url} />
            </div>
            <div className="col-12 col-lg-4 mt-4">
                <h3>Nombre de Pokemon:{props.name}</h3>
                <p>Tipo:</p>
                <p>Peso{props.weight}</p>
                <p>Descripcion:orem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseñ</p>
            </div>

        </div>

    );

}
export default CardDetail;