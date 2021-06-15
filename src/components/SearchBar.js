import React from 'react';

const SearchBar = () => {
    return (
        <div className="searchbar-container">
          <div className="searchbar">
            <input placeholder="Buscar pokemon..."  />
          </div>
          <div className="searchbar-btn">
            <button>Buscar</button>
          </div>
        </div>
      );
}
export default SearchBar