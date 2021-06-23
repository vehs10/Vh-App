import React from 'react';
import {Button} from 'react-bootstrap'

const CardDetail = (props) => {
    let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.pokemon.id}.png`;
    console.log('PROPS', props.pokemon);

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
  
    
    return (
        <div className="Container row border border-info bg-dark text-white">
            <div className=" col-10 col-lg-4"> 
                <img className="img-fluid" src={url} />
            </div>
            <div className="col-12 col-lg-6 mt-4">   
                <h4>Nombre de Pokemon: {props.pokemon.name}</h4>
                <p><span className="font-weight-bold">Peso de Pokemon:</span> {props.pokemon.weight}</p>
                <p><span className="font-weight-bold">Descripcion:</span> Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseñ</p>
                <p><span className="font-weight-bold">Experiencia Base:</span> {props.pokemon.base_experience}</p>
                <Button className="mr-2" variant="success" onClick={aumentarContador}> +</Button>
                <Button variant="danger" onClick={restarContador}> - </Button>
                <p className="mt-2 font-weight-bold">{`Nivel de tu Pokemon: ${clicks}`}</p>
                <p className="font-weight-light">Nivel Maximo de Pokemon: 5</p>
                <p className="font-weight-light"> + Nivel el precio aumentara</p>

            </div>   
     </div>


    );

}
export default CardDetail;