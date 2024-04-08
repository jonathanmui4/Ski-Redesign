import React, { useState } from 'react';
import Suggested from './Suggested';
import Navbar from '../../Navbar/Navbar';
import Search from '../../Search/Search';
import styles from './AsymmetricalHomePage.module.css';
import bg from '../../../assets/Images/bg.png';

const AsymmetricalHomePage = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSearch = () => {
    console.log(inputValue); // Here, you can replace the console.log with any functionality you need.
  };

  return (
    <div className={styles.asymmetricalHomePage}>
      <img
        className={styles.asymmetricalHomePageChild}
        alt=""
        src={bg}
      />
      <Navbar />
      <Search />
      <div className={styles.asymmetricalHomePageItem} />
      <h2 className={styles.exploreTheExciting}>EXPLORE THE EXCITING WORLD OF</h2>
      <h1 className={styles.skiResorts}>SKI RESORTS</h1>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.vectorWrapper}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/line-1.svg"
            />
          </div>
          <h3 className={styles.bestSkiResort}>Best Ski Resort Deals</h3>
          <div className={styles.vectorContainer}>
            <img
              className={styles.frameItem}
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
