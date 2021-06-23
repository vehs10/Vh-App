import React from "react";
import SearchBar from "./SearchBar";
import ListCard from "./ListCard";

const ContainerCard = () => {
  return (
    <div className="text-center mt-4 pt-4">
      <h1>POKEDEX</h1>
      <div className="container mt-2 mb-3">
        <SearchBar />
      </div>
      <ListCard />
    </div>
  );
};
export default ContainerCard;
