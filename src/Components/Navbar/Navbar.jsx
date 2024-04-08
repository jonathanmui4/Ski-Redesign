import React, { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import styles from "./Navbar.module.css";
import CountryImage from '../../assets/Images/sg.png';
import Logo from '../../assets/Images/logo.png';

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState('Singapore');

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
                                    <a href="" target="_blank" rel="noopener noreferrer">
                                        <b className={styles.tab1}>All Ski Resorts</b>
                                    </a>
                                    <div className={styles.borders}>
                                        <div className={styles.rectangle} />
                                    </div>
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
