import React from 'react'
import {Button} from 'react-bootstrap'


function Card(props) {
    return(
        <div className="card col-lg-3 col-sm-10 m-3">
            <img src="" alt="img-Card" />
            <div className="card-body">
                <h4 className="card-title">{props.name}</h4>
                <p className="card-text text-center">Type: {props.type}</p>
                <Button variant="primary">Obtener</Button>
            </div>
            
        </div>
    )
}
export default Card