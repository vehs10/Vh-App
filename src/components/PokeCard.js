import React from 'react'
import { Button, Card } from "react-bootstrap";

function PokeCard(props) {
    const [clicks, setClicks] = React.useState(0);
    //let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.index +1}.png`;
    let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.index +1}.png`;
    function aumentarContador(e) {
      clicks < 5
        ? setClicks(clicks + 1)
        : console.log("Valor maximo por pokemon 5");
    }
    function restarContador(e) {
      clicks > 0
        ? setClicks(clicks - 1)
        : console.log("La cantidad debe ser  mayor o igual a  0");
    }

    return (   
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>#{props.index +1} {props.pokemon}</Card.Title>
        <Button className="mr-2" variant="success" onClick={aumentarContador}> +</Button>
        <Button variant="danger" onClick={restarContador}> - </Button>
        <p className="m-3 font-weight-bold">{`Nivel de tu Pokemon: ${clicks}`}</p>
        <p className=" m-1 font-weight-light">Nivel Maximo de Pokemon: 5</p>
        <p className=" m-1 font-weight-light"> + Nivel el precio aumentara</p>
        <Button variant="primary">Obtener</Button>      
      </Card.Body>
    </Card>
    )
}

export default PokeCard
