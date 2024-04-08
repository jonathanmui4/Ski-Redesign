import React from 'react';
import HomeCard from "../../HomeCards/HomeCard";
import GarmischImage from "../../../assets/Images/Garmisch.png";
import GrandvaliraImage from '../../../assets/Images/Grandvalira.png';
import MonteImage from '../../../assets/Images/Monte.png';
import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <footer className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.vectorWrapper}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/line-1.svg"
          />
        </div>
        <h3 className={styles.bestSkiResort}>{`Best Ski Resort Deals `}</h3>
        <div className={styles.vectorContainer}>
          <img className={styles.frameItem} loading="lazy" alt="" src="/line-2.svg" />
        </div>
      </div>
      <div className={styles.suggested}>
        <HomeCard
          favoriteBorder="/favoriteborder@2x.png"
          favoriteBorder1="/favoriteborder-1@2x.png"
          aspectRatioKeeperAddition="/aspect-ratio-keeper--additionally-45-rotated-auto-layout@2x.png"
          headingText="Grandvalira, Andorra"
          nightsFor400="7 nights for $400"
          prop=" "
          propBackgroundImage={GrandvaliraImage}
        />
        <HomeCard
          favoriteBorder="/favoriteborder-2@2x.png"
          favoriteBorder1="/favoriteborder-3@2x.png"
          aspectRatioKeeperAddition="/aspect-ratio-keeper--additionally-45-rotated-auto-layout-1@2x.png"
          headingText="Garmisch, Munich"
          nightsFor400="3 nights for $150 "
          prop="including ski equipment "
          propBackgroundImage={GarmischImage}
          propColor="#979ca6"
        />
        <HomeCard
          favoriteBorder="/favoriteborder-4@2x.png"
          favoriteBorder1="/favoriteborder-5@2x.png"
          aspectRatioKeeperAddition="/aspect-ratio-keeper--additionally-45-rotated-auto-layout-2@2x.png"
          headingText="Monte Pora, Milan"
          nightsFor400="2 nights for $50"
          prop="including breakfast"
          propBackgroundImage={MonteImage}
          propColor="#979ca6"
        />
      </div>
    </footer>
  );
};

export default FrameComponent;
