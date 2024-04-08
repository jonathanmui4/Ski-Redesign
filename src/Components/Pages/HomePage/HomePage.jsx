import Navbar from "../../Navbar/Navbar";
import Search from "../../Search/Search";
import FrameComponent from "./FrameComponent";
import "./HomePage.css";
import bg from "../../../assets/Images/bg.png";

const HomePage = () => {
  return (
    <div className="home-page">
      <img className="home-page-child" alt="" src={bg} />
      <Navbar />
      <div className="f-r-a-m-e-deals-header">
        <div className="card-list">
          <h2 className="explore-the-exciting">
            EXPLORE THE EXCITING WORLD OF
          </h2>
          <h1 className="ski-resorts">SKI RESORTS</h1>
        </div>
      </div>
      <Search />
      {/* Cards Layout */}
      <FrameComponent />
    </div>
  );
};

export default HomePage;
