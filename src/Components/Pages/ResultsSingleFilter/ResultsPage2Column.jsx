import React, { useReducer, useState, useEffect } from "react";
import FilterDropdown from "../../Filters/FilterDropdown";
import Slider from "../../Filters/Slider";
import AdditionalFilters from "../../Filters/AdditionalFilters";
import ResultsCard2Column from "../../Cards/ResultCard2Column";
import Navbar from "../../Navbar/Navbar";
import { resorts } from "../../../content";
import { initialState, TwoColumnReducer } from "./TwoColumnReducer";
import styles from "./ResultsPage2Column.module.css";

const ResultsPage2Column = () => {
    const [state, dispatch] = useReducer(TwoColumnReducer, initialState);

    const addFilter = (filter) => {
        dispatch({ type: "ADD_FILTER", payload: filter });
    };

    const removeFilter = (filter) => {
        dispatch({ type: "REMOVE_FILTER", payload: filter });
    };

    const setPriFilter = (filter) => {
        dispatch({ type: "SET_PRI_FILTER", payload: filter });
    };

    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(500);

    useEffect(() => {
        console.log("Filters: ", state.filters);
        console.log("Primary Filter: ", state.priFilter);
    }, [state.filters, state.priFilter]);

    useEffect(() => {
        console.log("min price: ", minPrice);
        console.log("max price: ", maxPrice);
    }, [minPrice, maxPrice]);

    return (
        <div className={styles.resultsPageSingle2Col}>
            <div className={styles.content}>
                <div className={styles.sortAndFilter}>
                    <div className={styles.frame}>
                        <div className={styles.ratingSliderWrapper}>
                            <div className={styles.ratingSlider}>
                                <FilterDropdown addFilter={setPriFilter} />
                                <Slider
                                    min={0}
                                    max={500}
                                    onChange={({ min, max }) => {
                                        console.log(
                                            `min = ${min}, max = ${max}`
                                        );
                                        setMinPrice(min);
                                        setMaxPrice(max);
                                    }}
                                />
                                <AdditionalFilters
                                    addFilters={addFilter}
                                    removeFilter={removeFilter}
                                />
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
            <Navbar />
        </div>
    );
};

export default ResultsPage2Column;
