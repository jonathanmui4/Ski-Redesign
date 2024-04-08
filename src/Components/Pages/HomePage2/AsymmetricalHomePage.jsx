import React, { useState } from 'react';
import Suggested from "./Suggested";
import Navbar from "../../Navbar/Navbar";
import Search from "../../Search/Search";
import "./AsymmetricalHomePage.css";
import bg from "../../../assets/Images/bg.png";

const AsymmetricalHomePage = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSearch = () => {
    console.log(inputValue); // Here, you can replace the console.log with any functionality you need.
  };

  return (
    <div className="asymmetrical-home-page">
      <img
        className="asymmetrical-home-page-child"
        alt=""
        src={bg}
      />
      <Navbar />

      <Search />

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
        {/* Cards Layout */}
        <Suggested />
      </div>
    </div>
  );
};

export default AsymmetricalHomePage;
