import React from 'react';

const CardDetail = (props) => {
    return (
        <div className="row">
            <div className="col-12 col-lg-8">
                <img src={props.img} />
            </div>
            <div className="col-12 col-lg-4">
                <h3>{props.name}</h3>
                <p>{props.type}</p>
                <p>{props.description}</p>
            </div>

        </div>

    );

}
export default CardDetail