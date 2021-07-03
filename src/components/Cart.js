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
      {Equipo !== null ? (
        Equipo.map((data) => {
            console.log('aca', data);
           <p>{data.pokemon}</p>
          
        })
      ) : (
        <h3>Cargando...</h3>
      )}
 </div>
    );
               
   
}
export default Cart;
