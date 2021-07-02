import React, {useState, useEffect} from 'react'
import useCartContext from '../context/CartContext'

function Cart() {
  const {pokemon} = useCartContext();
  const [Equipo, setEquipo] = useState(null);

  useEffect(() => {
      if(pokemon){
          setEquipo(pokemon)
      }else {
          setEquipo([]);
      }
  }, []);

    return (
        <div>    
            <h4>Equipo Elegido</h4>  
            {Equipo !==  null ?
          <CardDetail  pokemon={item}  /> 
            : <h2>Cargando...</h2>}
        </div>
    );
               
   
}

export default Cart;
