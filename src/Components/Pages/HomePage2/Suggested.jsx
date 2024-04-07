import Card from "./Card";
import GarmischImage from "../../../assets/Images/Garmisch.png";
import GrandvaliraImage from '../../../assets/Images/Grandvalira.png';
import MonteImage from '../../../assets/Images/Monte.png';
import "./Suggested.css";

const Suggested = () => {
  return (
    <div className="suggested">
      {/* <div className="card1">
        <div className="image1">
          <div className="top-aligned-0px-wrapper1">
            <div className="favorite-border-frame">
              <img
                className="favorite-border-icon2"
                loading="lazy"
                alt=""
                src="/favoriteborder@2x.png"
              />
            </div>
          </div>
          <div className="center-aligned-0px-wrapper2">
            <div className="wrapper1">
              <div className="vertical-shift-50-height1">
                <div className="aspect-ratio-keeper-rotated1" />
              </div>
              <div className="center-aligned-0px-wrapper3">
                <div className="frame-div">
                  <img className="favorite-border-icon3" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="aspect-ratio1">
            <img
              className="aspect-ratio-keeper-addition1"
              loading="lazy"
              alt=""
              src="/aspect-ratio-keeper--additionally-45-rotated-auto-layout@2x.png"
            />
          </div>
          <div className="bottom-aligned-0px-wrapper1">
            <div className="elements-placeholder1">
              <div className="swap-me-with1">
                Swap me with your AL Component
              </div>
            </div>
          </div>
        </div>
        <div className="body1">
          <div className="text-container1">
            <div className="heading-text1">Grandvalira, Andorra</div>
            <b className="body-text1">
              <p className="nights-for-400">7 nights for $400</p>
              <p className="p">{` `}</p>
            </b>
          </div>
          <button className="rectangle-group">
            <div className="rectangle1" />
            <div className="details1">Details</div>
          </button>
        </div>
      </div> */}
      <Card
          favoriteBorder="/favoriteborder@2x.png"
          favoriteBorder1="/favoriteborder-1@2x.png"
          aspectRatioKeeperAddition="/aspect-ratio-keeper--additionally-45-rotated-auto-layout@2x.png"
          headingText="Grandvalira, Andorra"
          nightsFor400="7 nights for $400"
          prop=" "
          propBackgroundImage={GrandvaliraImage}
        />
        <Card
          favoriteBorder="/favoriteborder-2@2x.png"
          favoriteBorder1="/favoriteborder-3@2x.png"
          aspectRatioKeeperAddition="/aspect-ratio-keeper--additionally-45-rotated-auto-layout-1@2x.png"
          headingText="Garmisch, Munich"
          nightsFor400="3 nights for $150 "
          prop="including ski equipment "
          propBackgroundImage={GarmischImage}
          propColor="#979ca6"
        />
        <Card
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
  );
};

export default Suggested;
