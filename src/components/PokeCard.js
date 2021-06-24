import React from 'react'
import { Button, Card } from "react-bootstrap";

function PokeCard(props) {
    //let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.index +1}.png`;
    let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.index +1}.png`;
  

    return (   
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>#{props.index +1} {props.pokemon}</Card.Title>
        <Button variant="primary">Obtener</Button>      
      </Card.Body>
    </Card>
    )
}

export default PokeCard
