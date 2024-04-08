import React from "react";
import FilterDropdown from "../Filters/FilterDropdown";
import Slider from "../Filters/Slider";
import AdditionalFilters from "../Filters/AdditionalFilters";
import ResultsCard2Column from "../Cards/ResultCard2Column";
import FrameComponent1 from "./HomePage/FrameComponent1";
import { resorts } from "../../content";
import styles from "./ResultsPage2Column.module.css";

const ResultsPage2Column = () => {
    return (
        <div className={styles.resultsPageSingle2Col}>
            <div className={styles.content}>
                <div className={styles.sortAndFilter}>
                    <div className={styles.frame}>
                        <div className={styles.ratingSliderWrapper}>
                            <div className={styles.ratingSlider}>
                                <FilterDropdown />
                                <Slider
                                    min={0}
                                    max={100}
                                    onChange={({ min, max }) =>
                                        console.log(
                                            `min = ${min}, max = ${max}`
                                        )
                                    }
                                />
                                <AdditionalFilters />
                            </div>
                        </div>
                    </div>
                    <div className={styles.searchButton}>
                        <div className={styles.search}>Search</div>
                    </div>
                </div>
                <div className={styles.cards}>
                    {resorts.map((resort, index) => {
                        return (
                            <ResultsCard2Column
                                key={index}
                                name={resort.name}
                                rating={resort.rating}
                                price={resort.price}
                                tags={resort.tags}
                                imgUrl={resort.image}
                            />
                        );
                    })}
                </div>
            </div>
            <div className={styles.frame55}>
                <div className={styles.searchWrapper}>
                    <div className={styles.search1}>Search</div>
                </div>
                <div className={styles.frame56}>
                    <div className={styles.searchForSki}>
                        Search for ski resorts, regions, terms ...
                    </div>
                </div>
            </div>
            <FrameComponent1 />
        </div>
    );
};

export default ResultsPage2Column;
