import React from 'react'
import { Button, Card } from "react-bootstrap";
import {Link} from 'react-router-dom'

function PokeCard(props) {
    //let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.index +1}.png`;
    let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.index +1}.png`;
  

    return (   
      <Card className="mt-3" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>#{props.index +1 } {props.pokemon}</Card.Title>
        <Link to={`/pokemon/${props.index + 1}`} variant="primary" className="btn btn-primary">Obtener</Link>      
      </Card.Body>
    </Card>
    )
}

export default PokeCard
