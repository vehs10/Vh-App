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
         return (<p className="font-weight-bold">{data.Pokemon}  Nivel: {data.Nivel}</p>)
          
        })
      ) : (
        <h3>Cargando...</h3>
      )}
 </div>
    );
               
   
}
export default Cart;
