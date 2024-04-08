import React, { useState } from 'react';
import styles from "./Search.module.css";
import { useNavigate } from 'react-router-dom'; // Import useHistory hook

const Search = () => {
    const [inputValue, setInputValue] = useState('');
    const history = useNavigate(); // Get the history object

    const handleSearch = () => {
        console.log(inputValue); // Here, you can replace the console.log with any functionality you need.
        const destinationLink = getDestinationLink(); // Get the destination link
        history.push(destinationLink); // Navigate to the destination link
    };

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
        <div className={styles.favoriteBorderShape}>
            <div className={styles.searchBar}>
                <div className={styles.inputWrapper}>
                    <div className={styles.input}>
                        <input
                            type="text"
                            className={styles.title}
                            placeholder="Search for ski resorts, regions, terms ..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <div className={styles.textButtonWrapper} onClick={() => setInputValue('')}>
                            <div className={styles.textButton}>
                                <b className={styles.clear}>Clear</b>
                            </div>
                        </div>
                    </div>
                </div>
                <button className={styles.detailsContainer} onClick={handleSearch}>
                    <b className={styles.search}>Search</b>
                </button>
            </div>
        </div>
    );
};

export default Search;
