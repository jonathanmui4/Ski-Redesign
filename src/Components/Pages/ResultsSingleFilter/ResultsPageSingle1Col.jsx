import React, { useReducer, useState, useEffect } from "react";
import ResultCard1ColumndiffArra from "../../Cards/ResultCard1ColumndiffArra";
import AdditionalFilters from "../../Filters/AdditionalFilters";
import FilterDropdown from "../../Filters/FilterDropdown";
import Slider from "../../Filters/Slider";
import Navbar from "../../Navbar/Navbar";
import { resorts } from "../../../content";
import { initialState, OneColumnReducer } from "./OneColumnReducer";
import styles from "./ResultsPageSingle1Col.module.css";

const ResultsPageSingle1Col = () => {
    const [state, dispatch] = useReducer(OneColumnReducer, initialState);

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
    const [filteredAndSortedResorts, setFilteredAndSortedResorts] = useState(
        []
    );

    useEffect(() => {
        // Filter and sort resorts based on the applied filters
        const filteredResorts = resorts.filter((resort) => {
            if (state.filters.length === 0) return true;
            if (
                state.filters.includes("Beginner") &&
                !resort.tags.includes("Beginner")
            )
                return false;
            else if (
                state.filters.includes("Eco-friendly") &&
                !resort.tags.includes("Eco-friendly")
            )
                return false;
            else if (
                state.filters.includes("With Parking") &&
                !resort.tags.includes("Parking")
            )
                return false;
            return true; // Modify this line with your filtering logic
        });

        // Sort the filtered resorts based on price
        const sortedResorts = filteredResorts.sort((a, b) => {
            if (
                state.priFilter === "Rating" ||
                state.filters.includes("Best Ratings")
            ) {
                return b.rating - a.rating;
            } else if (
                state.priFilter === "Price" ||
                state.filters.includes("Price")
            ) {
                return a.price - b.price;
            }
            return a.name - b.name;
        });

        setFilteredAndSortedResorts(sortedResorts);
    }, [state.filters, state.priFilter, minPrice, maxPrice]);

    useEffect(() => {
        console.log("Filters: ", state.filters);
        console.log("Primary Filter: ", state.priFilter);
    }, [state.filters, state.priFilter]);

    useEffect(() => {
        console.log("min price: ", minPrice);
        console.log("max price: ", maxPrice);
    }, [minPrice, maxPrice]);

    return (
        <div className={styles.resultsPageSingle1Col}>
            <div className={styles.content}>
                <div className={styles.sortAndFilter}>
                    <div className={styles.frame}>
                        <div className={styles.filterByParent}>
                            <FilterDropdown addFilter={setPriFilter} />
                            {state.priFilter && (
                                <Slider
                                    min={0}
                                    max={100}
                                    onChange={({ min, max }) => {
                                        console.log(
                                            `min = ${min}, max = ${max}`
                                        );
                                        setMinPrice(min);
                                        setMaxPrice(max);
                                    }}
                                />
                            )}
                            {state.priFilter && (
                                <AdditionalFilters
                                    addFilters={addFilter}
                                    removeFilter={removeFilter}
                                />
                            )}
                        </div>
                    </div>
                    <div className={styles.searchButton}>
                        <div className={styles.search}>Search</div>
                    </div>
                </div>
                <div className={styles.cards}>
                    {filteredAndSortedResorts.map((resort, index) => {
                        return (
                            <ResultCard1ColumndiffArra
                                idx={index}
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
            <div className={styles.frame19}>
                <div className={styles.searchWrapper}>
                    <div className={styles.search1}>Search</div>
                </div>
                <div className={styles.frame20}>
                    <div className={styles.searchForSki}>
                        Search for ski resorts, regions, terms ...
                    </div>
                </div>
            </div>
            <Navbar />
        </div>
    );
};

export default ResultsPageSingle1Col;
