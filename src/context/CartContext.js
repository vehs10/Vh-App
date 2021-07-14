import React, { createContext, useState, useContext } from "react";

const StoreContext = createContext();

const useCartContext = () => useContext(StoreContext);

export const StoreProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState([]);
 

  const addItem = (id, item, quantity) => {
    setPokemon([...pokemon, { id: id, Pokemon: item, Nivel: quantity }]);
  };
  
  const DeleteTeam = () => {
    setPokemon([]);
  };

  
  return (
    <StoreContext.Provider value={{ pokemon, addItem, DeleteTeam }}>
      {" "}
      {console.log(pokemon)} {children}
    </StoreContext.Provider>
  );
};
export default useCartContext;
