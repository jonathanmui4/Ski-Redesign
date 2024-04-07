import React from "react";
import FrameComponent1 from "./HomePage/FrameComponent1";
import FilterDropdown from "../Filters/FilterDropdown";
import Slider from "../Filters/Slider";
import AdditionalFilters from "../Filters/AdditionalFilters";
import ResultCard3Column from "../Cards/ResultCard3Column";
import styles from "./ResultsPage3Column.module.css";

const ResultsPage3Column = () => {
    return (
        <div className={styles.resultsPageSingle3Col}>
            <div className={styles.content}>
                <div className={styles.sortAndFilter}>
                    <div className={styles.frame}>
                        <div className={styles.filterByParent}>
                            <FilterDropdown />
                            <Slider
                                min={0}
                                max={100}
                                onChange={({ min, max }) =>
                                    console.log(`min = ${min}, max = ${max}`)
                                }
                            />
                            <AdditionalFilters />
                        </div>
                    </div>
                    <div className={styles.searchButton}>
                        <div className={styles.search}>Search</div>
                    </div>
                </div>
                <div className={styles.cards}>
                    <ResultCard3Column />
                    <ResultCard3Column />
                    <ResultCard3Column />
                    <ResultCard3Column />
                    <ResultCard3Column />
                    <ResultCard3Column />
                </div>
            </div>
            <div className={styles.frame62}>
                <div className={styles.searchWrapper}>
                    <div className={styles.search1}>Search</div>
                </div>
                <div className={styles.frame63}>
                    <div className={styles.searchForSki}>
                        Search for ski resorts, regions, terms ...
                    </div>
                </div>
            </div>
            <FrameComponent1 />
        </div>
    );
};

export default ResultsPage3Column;
