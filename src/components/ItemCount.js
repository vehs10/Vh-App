import React from 'react'
import {Button} from 'react-bootstrap'

 function ItemCount(props) {

    const [clicks, setClicks] = React.useState(1);

    function aumentarContador(e) {
       clicks < 5 ?
        setClicks(clicks + 1) : console.log(e)
           
    }

    function restarContador(e) {
        clicks > 1 ?
            setClicks(clicks - 1) :
            console.log(e)
    }

    function AddToCard(){
        props.onAdd(props.setClicks);
    }

    return ( 
        <div>
             <Button className="mr-2" variant="success" onClick={aumentarContador}> +</Button>
                <Button variant="danger" onClick={restarContador}> - </Button>
                <p className="mt-2 font-weight-bold">{`Nivel de tu Pokemon: ${clicks}`}</p>
                <p className="font-weight-light">Nivel Maximo de Pokemon: 5</p>
                <Button variant="primary m-2" onClick={AddToCard}>Agregar</Button>
        </div>
    )
}
export default ItemCount;