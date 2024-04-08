import React, { useState } from 'react';
import styles from "./Search.module.css";

const Search = () => {
    const [inputValue, setInputValue] = useState('');
    const handleSearch = () => {
        console.log(inputValue); // Here, you can replace the console.log with any functionality you need.
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
