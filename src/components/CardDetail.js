import React from 'react';
import ItemCount from './ItemCount';

const CardDetail = (props) => {
    let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.pokemon.id}.png`;
    //console.log('PROPS', props.pokemon);

  
    
    return (
        <div className="Container row border border-info bg-dark text-white">
            <div className=" col-10 col-lg-4"> 
                <img className="img-fluid" src={url} />
            </div>
            <div className="col-12 col-lg-6 mt-4">   
                <h4>Nombre de Pokemon: {props.pokemon.name}</h4>
                <p><span className="font-weight-bold">ID:</span> {props.pokemon.id}</p>
                <p><span className="font-weight-bold">Peso de Pokemon:</span> {props.pokemon.weight}Kg</p>
                <p><span className="font-weight-bold">Altura:</span> {props.pokemon.height} </p>
                <p><span className="font-weight-bold">Experiencia Base:</span> {props.pokemon.base_experience}</p>
                <ItemCount />
            </div>   
     </div>


    );

}
export default CardDetail;