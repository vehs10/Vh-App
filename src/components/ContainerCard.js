import React from 'react';
import SearchBar from './SearchBar'
import Card from './Card'

const ContainerCard = () => {
return(

<div className="text-center mt-3">
    <h1 >POKEDEX</h1>
    <div className="container mt-2 mb-3">
    <SearchBar />
    </div>
    <Card />
</div>
);
}
export default ContainerCard