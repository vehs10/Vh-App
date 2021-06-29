import React, { useEffect, useState } from "react";
import PokeCard from './PokeCard';

function ListCard() {
  /*LOGICA PARA LOS BOTONES DE AÑADIR O QUITAR POKEMONES*/
  
  /*lLAMANDO A LA API*/

  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=27&offset=0")
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
           <PokeCard key={index} pokemon={data.name} index={index} />
          );
        })
      ) : (
        <h3>Cargando...</h3>
      )}
    </div>
  );
}
export default ListCard;
