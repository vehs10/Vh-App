import React, {createContext, useState, useContext} from 'react';


const StoreContext = createContext();

const useCardContext = () => useContext(StoreContext);

export const StoreProvider = ({children}) => {
    const [pokemon, setPokemon] = useState([])

    const addItem = (item, quantity) =>{
        setPokemon([...pokemon,{'Pokemon': item, 'Nivel': quantity}]);
    }

    return(
       <StoreContext.Provider value={{pokemon, addItem}}>
           {console.log(pokemon)}
           {children}

       </StoreContext.Provider>
    )
}
export default useCardContext