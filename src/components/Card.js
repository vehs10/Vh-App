import React from "react";
import { Button } from "react-bootstrap";

function Card(props) {

  const [clicks, setClicks] = React.useState(0);

  function aumentarContador(event) {
    clicks < 5
    ? setClicks(clicks + 1)
    : console.log('Valor maximo por pokemon 5');
  }

  function restarContador(event) {
    clicks > 0 
    ? setClicks(clicks - 1)
    : console.log('La cantidad debe ser  mayor o igual a  0');
  }

  

  return (
    <div className="card col-lg-3 col-sm-10 m-3">
      <img src="" alt="img-Card" />
      <div className="card-body">
        <h4 className="card-title">{props.name}</h4>
        <p className="card-text text-center">Type: {props.type}</p>
        <Button className="mr-2" variant="success" onClick={aumentarContador}>+</Button>
        <Button variant="danger" onClick={restarContador}>-</Button>
        <p>{`Cantidad:${clicks}`}</p>
        <Button variant="primary">Obtener</Button>
      </div>
    </div>
  );
}
export default Card;
