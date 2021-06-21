import React from 'react';

const CardDetail = (props) => {
    let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.index +1}.png`;
    return (
        <div className="row">
            <div className="col-12 col-lg-6">
                <img src={url} />
            </div>
            <div className="col-12 col-lg-4">
                <h3>{props.pokemon}</h3>
                <p>{props.description}</p>
            </div>

        </div>

    );

}
export default CardDetail