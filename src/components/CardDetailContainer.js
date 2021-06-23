import React, { useEffect, useState } from "react";
import CardDetail from "./CardDetail";


function CardDetailContainer() {
  const [item, Setitem] = useState(null);
  let Pokeurl = `https://pokeapi.co/api/v2/pokemon/1`;

  useEffect(() =>{
    fetch(Pokeurl)
    .then((response) => response.json())
    .then((response) =>{
      Setitem(response)
      console.log(response);
      console.log(item);
    })
  
  }, [])
    
  return (
    <div className="">
     {item !==  null ?
     <CardDetail pokemon={item} /> 
     : <h2>Cargando</h2>}
   </div>
  );
  
  }

export default CardDetailContainer;
