import React from "react";
import { Button } from "react-bootstrap";

function Card(props) {
  function aumentarContador(event) {
    setClicks(clicks + 1);
  }

  function restarContador(event) {
    setClicks(clicks - 1);
  }

  const [clicks, setClicks] = React.useState(0);

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
