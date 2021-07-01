import React, { useEffect, useState } from "react";
import CardDetail from "./CardDetail";
import {useParams} from 'react-router-dom';


function CardDetailContainer() {
  let {id} = useParams();
  const [item, Setitem] = useState(null);
  let Pokeurl = `https://pokeapi.co/api/v2/pokemon/${id}`;
 //console.log(Pokeurl);
  useEffect(() =>{
    fetch(Pokeurl)
    .then((response) => response.json())
    .then((response) =>{
      Setitem(response)
     // console.log(response);
     // console.log(item);
    })
  
  }, [])
    
  return (
    <div className="">
      <h3 className="text-center p-3">Detalle del Pokemon</h3>
     {item !==  null ?
     <CardDetail  pokemon={item}  /> 
     : <h2>Cargando...</h2>}
   </div>
  );
  
  }

export default CardDetailContainer;
