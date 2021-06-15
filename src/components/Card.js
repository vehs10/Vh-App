import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function Card() {
  /*LOGICA PARA LOS BOTONES DE AÑADIR O QUITAR POKEMONES*/
  const [clicks, setClicks] = React.useState(0);

 

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
  /*lLAMANDO A LA API*/

  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=25&offset=0")
      .then((response) => response.json())
      .then((response) => {
        setData(response.results);
      });
  }, []);

  return (
    <div className="row">
      {data !== null ? (
        data.map((data, index) => {
          return (
            <div className="card col-lg-2 col-sm-10 m-3">
              <img src={data.type} alt="img-Card" />
              <div className="card-body">
                <h4 className="card-title">#{index +1} {data.name}</h4>
                <p className="card-text text-center"></p>
                <Button className="mr-2" variant="success" onClick={aumentarContador}> +{" "}</Button>
                <Button variant="danger" onClick={restarContador}> -{" "} </Button>
                <p className="m-3 font-weight-bold">{`Nivel de tu Pokemon: ${clicks}`}</p>
                <p className=" m-1 font-weight-light">Nivel Maximo de Pokemon: 5</p>
                <p className=" m-1 font-weight-light"> + Nivel el precio aumentara</p>
                <Button variant="primary">Obtener</Button>
              </div>
            </div>
          );
        })
      ) : (
        <h3>Cargada</h3>
      )}
    </div>
  );
}
export default Card;
