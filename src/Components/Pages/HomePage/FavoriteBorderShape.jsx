import "./FavoriteborderShape.css";

const FavoriteborderShape = () => {
  return (
    <div className="favoriteborder-shape">
      <div className="search-bar">
        <div className="input-wrapper">
          <div className="input">
            <div className="title">
              Search for ski resorts, regions, terms ...
            </div>
            <div className="text-button-wrapper">
              <div className="text-button">
                <b className="clear">Clear</b>
              </div>
            </div>
          </div>
        </div>
        <button className="details-container">
          <b className="search">Search</b>
        </button>
      </div>
    </div>
  );
};

export default FavoriteborderShape;
