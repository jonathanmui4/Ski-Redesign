import Suggested from "./Suggested";
import NavigationBar from "./NavigationBar";
import "./AsymmetricalHomePage.css";
import bg from "../../../assets/Images/bg.png";

const AsymmetricalHomePage = () => {
  return (
    <div className="asymmetrical-home-page">
      <img
        className="asymmetrical-home-page-child"
        alt=""
        src={bg}
      />
      <NavigationBar />
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
        <button className="search-wrapper">
          <b className="search">Search</b>
        </button>
      </div>
      <div className="asymmetrical-home-page-item" />
      <h2 className="explore-the-exciting">EXPLORE THE EXCITING WORLD OF</h2>
      <h1 className="ski-resorts">SKI RESORTS</h1>
      <div className="frame-parent">
        <div className="frame-group">
          <div className="vector-wrapper">
            <img
              className="frame-child"
              loading="lazy"
              alt=""
              src="/line-1.svg"
            />
          </div>
          <h3 className="best-ski-resort">{`Best Ski Resort Deals `}</h3>
          <div className="vector-container">
            <img
              className="frame-item"
              loading="lazy"
              alt=""
              src="/line-1.svg"
            />
          </div>
        </div>
        <Suggested />
      </div>
    </div>
  );
};

export default AsymmetricalHomePage;
