import "./NavigationBar.css";
import CountryImage from '../../../assets/Images/sg.png';
import Logo from '../../../assets/Images/logo.png';

const NavigationBar = () => {
  return (
    <div className="navigation-bar-wrapper">
      <header className="navigation-bar">
        <div className="tabs-parent">
          <div className="tabs">
            <div className="frame">
              <div className="logo">
                <img
                  className="skiresort-logo-icon"
                  loading="lazy"
                  alt=""
                  src={Logo}
                />
              </div>
              <div className="frame1">
                <div className="tab">
                  <b className="tab-1">All Ski Resorts</b>
                  <div className="borders">
                    <div className="rectangle" />
                  </div>
                </div>
                <div className="tab1">
                  <b className="tab-11">Test Reports</b>
                  <div className="borders1">
                    <div className="rectangle1" />
                  </div>
                </div>
                <div className="tab2">
                  <b className="tab-12">Comparison</b>
                  <div className="borders2">
                    <div className="rectangle2" />
                  </div>
                </div>
                <div className="tab3">
                  <b className="tab-13">Weather</b>
                  <div className="borders3">
                    <div className="rectangle3" />
                  </div>
                </div>
                <div className="tab4">
                  <b className="tab-14">Ski Lifts</b>
                  <div className="borders4">
                    <div className="rectangle4" />
                  </div>
                </div>
                <div className="tab5">
                  <b className="tab-15">Accommodations</b>
                  <div className="borders5">
                    <div className="rectangle5" />
                  </div>
                </div>
                <div className="tab6">
                  <b className="tab-16">About Us</b>
                  <div className="borders6">
                    <div className="rectangle6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="country-wrapper">
            <div className="country">
              <img
                className="country-child"
                loading="lazy"
                alt=""
                src={CountryImage}
              />
              <div className="singapore-wrapper">
                <b className="singapore">Singapore</b>
              </div>
              <div className="t-e-x-t-search-label">
                <img
                  className="teenyiconsdown-solid"
                  loading="lazy"
                  alt=""
                  src="/teenyiconsdownsolid.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavigationBar;
