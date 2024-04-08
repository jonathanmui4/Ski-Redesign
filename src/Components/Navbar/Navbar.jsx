import React, { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import styles from "./Navbar.module.css";
import CountryImage from '../../assets/Images/sg.png';
import Logo from '../../assets/Images/logo.png';
import {Link} from 'react-router-dom';

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState('Singapore');

    // Get the current URL
    const currentURL = window.location.href;

    // Parse the URL
    const url = new URL(currentURL);

    // Extract the path from the URL
    const path = url.pathname;

    // Extract the ID from the path
    const id = path.substring(1); // Remove the leading slash

    // Function to determine the destination link based on id.
    const getDestinationLink = () => {
        switch (id) {
            // AS1
            case "/AS1/home":
                return "/AS1/results-1";
            case "/AS2/home":
                return "/AS2/results-2";
            case "/AS3/home":
                return "/AS3/results-3";
            // CS1
            case "/CS1/home":
                return "/CS1/results-1";
            case "/CS2/home":
                return "/CS2/results-2";
            case "/CS3/home":
                return "/CS3/results-3";
            // CM1
            case "/CM1/home":
                return "/CM1/results-1";
            case "/CM2/home":
                return "/CM2/results-2";
            case "/CM3/home":
                return "/CM3/results-3";
            // AM1
            case "/AM1/home":
                return "/AM1/results-1";
            case "/AM2/home":
                return "/AM2/results-2";
            case "/AM3/home":
                return "/AM3/results-3";
            default:
                return "/";
        }
    };
    
    return (
        <div className={styles.navigationBarWrapper}>
            <header className={styles.navigationBar}>
                <div className={styles.tabsParent}>
                    <div className={styles.tabs}>
                        <div className={styles.frame}>
                            <div className={styles.logo}>
                                <img
                                    className={styles.skiResortLogoIcon}
                                    loading="lazy"
                                    alt=""
                                    src={Logo}
                                />
                            </div>
                            <div className={styles.frame1}>
                                <div className={styles.tab}>
                                    {/* Search Results 1/2/3 columns */}
                                    <Link to={getDestinationLink()} className={styles.tab1}>All Ski Resorts</Link>
                                </div>
                                <div className={styles.tab1}>
                                    <b className={styles.tab11}>Test Reports</b>
                                    <div className={styles.borders1}>
                                        <div className={styles.rectangle1} />
                                    </div>
                                </div>
                                <div className={styles.tab2}>
                                    <b className={styles.tab12}>Comparison</b>
                                    <div className={styles.borders2}>
                                        <div className={styles.rectangle2} />
                                    </div>
                                </div>
                                <div className={styles.tab3}>
                                    <b className={styles.tab13}>Weather</b>
                                    <div className={styles.borders3}>
                                        <div className={styles.rectangle3} />
                                    </div>
                                </div>
                                <div className={styles.tab4}>
                                    <b className={styles.tab14}>Ski Lifts</b>
                                    <div className={styles.borders4}>
                                        <div className={styles.rectangle4} />
                                    </div>
                                </div>
                                <div className={styles.tab5}>
                                    <b className={styles.tab15}>Accommodations</b>
                                    <div className={styles.borders5}>
                                        <div className={styles.rectangle5} />
                                    </div>
                                </div>
                                <div className={styles.tab6}>
                                    <b className={styles.tab16}>About Us</b>
                                    <div className={styles.borders6}>
                                        <div className={styles.rectangle6} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.countryWrapper}>
                        <div className={styles.country} onClick={() => setDropdownOpen(!dropdownOpen)}>
                            <img className={styles.countryChild} loading="lazy" alt="" src={CountryImage} />
                            <div className={styles.singaporeWrapper}>
                                <b className={styles.singapore}>{selectedCountry}</b>
                                <ArrowDropDownIcon style={{ margin: 0 }} fontSize="small" />
                            </div>
                        </div>
                        {dropdownOpen && (
                            <div className={styles.countryDropdown}>
                                {['Austria', 'China', 'France', 'Italy', 'Japan', 'New Zealand', 'Switzerland', 'USA'].map((country) => (
                                    <div
                                        key={country}
                                        className={styles.countryOption}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedCountry(country);
                                            setDropdownOpen(false);
                                        }}
                                    >
                                        {country}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Navbar;
