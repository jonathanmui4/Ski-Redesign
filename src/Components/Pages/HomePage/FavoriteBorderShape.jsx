import React, { useState } from 'react';
import "./FavoriteborderShape.css";

const FavoriteborderShape = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSearch = () => {
    console.log(inputValue); // Here, you can replace the console.log with any functionality you need.
  };

  return (
    <div className="favoriteborder-shape">
      <div className="search-bar">
        <div className="input-wrapper">
          <div className="input">
            <input
              type="text"
              className="title"
              placeholder="Search for ski resorts, regions, terms ..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div className="text-button-wrapper" onClick={() => setInputValue('')}>
              <div className="text-button">
                <b className="clear">Clear</b>
              </div>
            </div>
          </div>
        </div>
        <button className="details-container" onClick={handleSearch}>
          <b className="search">Search</b>
        </button>
      </div>
    </div>
  );
};

export default FavoriteborderShape;
