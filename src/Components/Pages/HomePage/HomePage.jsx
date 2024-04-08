import React from 'react';
import Navbar from "../../Navbar/Navbar";
import Search from "../../Search/Search";
import FrameComponent from "./FrameComponent.jsx";
import styles from "./HomePage.module.css";
import bg from "../../../assets/Images/bg.png";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <img className={styles.homePageChild} alt="" src={bg} />
      <Navbar />
      <div className={styles.frameDealsHeader}>
        <div className={styles.cardList}>
          <h2 className={styles.exploreTheExciting}>
            EXPLORE THE EXCITING WORLD OF
          </h2>
          <h1 className={styles.skiResorts}>SKI RESORTS</h1>
        </div>
      </div>
      <div className={styles.searchBar}>
        <Search />
      </div>
      {/* Cards Layout */}
      <FrameComponent />
    </div>
  );
};

export default HomePage;
