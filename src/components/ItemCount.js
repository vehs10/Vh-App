import React from 'react'
import {Button} from 'react-bootstrap'

 function ItemCount() {

    const [clicks, setClicks] = React.useState(0);

    function aumentarContador(e) {
        clicks < 5 ?
            setClicks(clicks + 1) :
            console.log("Valor maximo por pokemon 5");
    }

    function restarContador(e) {
        clicks > 0 ?
            setClicks(clicks - 1) :
            console.log("La cantidad debe ser  mayor o igual a  0");
    }

    return ( 
        <div>
             <Button className="mr-2" variant="success" onClick={aumentarContador}> +</Button>
                <Button variant="danger" onClick={restarContador}> - </Button>
                <p className="mt-2 font-weight-bold">{`Nivel de tu Pokemon: ${clicks}`}</p>
                <p className="font-weight-light">Nivel Maximo de Pokemon: 5</p>
                <p className="font-weight-light"> + Nivel el precio aumentara</p>
        </div>
    )
}
export default ItemCount;