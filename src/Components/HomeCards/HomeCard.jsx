import React, { useMemo } from "react";
import styles from "./HomeCard.module.css";

const HomeCard = ({
  favoriteBorder,
  favoriteBorder1,
  aspectRatioKeeperAddition,
  headingText,
  nightsFor400,
  prop,
  propBackgroundImage,
  propColor,
}) => {
  const imageStyle = useMemo(() => {
    return {
      backgroundImage: `url(${propBackgroundImage})`,
    };
  }, [propBackgroundImage]);

  const bodyTextStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <div className={styles.aspectRatio} style={imageStyle}>
          <img
            className={styles.aspectRatioKeeperAddition}
            loading="lazy"
            alt=""
            src={propBackgroundImage}
          />
        </div>
        <div className={styles.bottomAligned0PxWrapper}>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.textContainer}>
          <div className={styles.headingText}>{headingText}</div>
          <b className={styles.bodyText} style={bodyTextStyle}>
            <p className={styles.nightsFor400}>{nightsFor400}</p>
            <p className={styles.p}>{prop}</p>
          </b>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.rectangle7} />
          <div className={styles.details}>Details</div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
