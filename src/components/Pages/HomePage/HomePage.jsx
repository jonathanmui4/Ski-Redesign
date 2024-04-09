import React, { useEffect, useState } from 'react';
import Navbar from "../../Navbar/Navbar";
import Search from "../../Search/Search";
import FrameComponent from "./FrameComponent.jsx";
import styles from "./HomePage.module.css";
import bg from "../../../assets/Images/bg.png";

const HomePage = () => {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const handleClick = () => {
      setClickCount(prevCount => prevCount + 1);
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    sessionStorage.setItem('homec', clickCount);
  }, [clickCount]);

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
