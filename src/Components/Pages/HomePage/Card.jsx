import { useMemo } from "react";
import "./Card.css";

const Card = ({
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
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const bodyTextStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="card">
      <div className="image" style={imageStyle}>
        <div className="top-aligned-0px-wrapper">
          <div className="favorite-border-wrapper">
            <img
              className="favorite-border-icon"
              loading="lazy"
              alt=""
              src={favoriteBorder}
            />
          </div>
        </div>
        <div className="center-aligned-0px-wrapper">
          <div className="wrapper">
            <div className="vertical-shift-50-height">
              <div className="aspect-ratio-keeper-rotated" />
            </div>
            <div className="center-aligned-0px-wrapper1">
              <div className="favorite-border-container">
                <img
                  className="favorite-border-icon1"
                  alt=""
                  src={favoriteBorder1}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="aspect-ratio">
          <img
            className="aspect-ratio-keeper-addition"
            loading="lazy"
            alt=""
            src={propBackgroundImage}
          />
        </div>
        <div className="bottom-aligned-0px-wrapper">
          <div className="elements-placeholder">
            <div className="swap-me-with">Swap me with your AL Component</div>
          </div>
        </div>
      </div>
      <div className="body">
        <div className="text-container">
          <div className="heading-text">{headingText}</div>
          <b className="body-text" style={bodyTextStyle}>
            <p className="nights-for-400">{nightsFor400}</p>
            <p className="p">{prop}</p>
          </b>
        </div>
        <div className="rectangle-parent">
          <div className="rectangle7" />
          <div className="details">Details</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
