import React, { useReducer, useState, useEffect } from "react";
import Navbar from "../../Navbar/Navbar";
import FilterDropdown from "../../Filters/FilterDropdown";
import Slider from "../../Filters/Slider";
import AdditionalFilters from "../../Filters/AdditionalFilters";
import ResultCard3Column from "../../Cards/ResultCard3Column";
import { resorts } from "../../../content";
import { initialState, ThreeColumnReducer } from "./ThreeColumnReducer";
import styles from "./ResultsPage3Column.module.css";

const ResultsPage3Column = () => {
    const [state, dispatch] = useReducer(ThreeColumnReducer, initialState);

    const [clickCount, setClickCount] = useState(0);

    useEffect(() => {
        const handleClick = () => {
            setClickCount((prevCount) => prevCount + 1);
        };

        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []);

    useEffect(() => {
        sessionStorage.setItem("clicksr3", clickCount);
    }, [clickCount]);

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
            // if (state.filters.length === 0) return true;
            if (resort.price < minPrice || resort.price > maxPrice)
                return false;
            if (
                state.filters.includes("For Beginners") &&
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

    // Test States
    // useEffect(() => {
    //     console.log("Filters: ", state.filters);
    //     console.log("Primary Filter: ", state.priFilter);
    // }, [state.filters, state.priFilter]);

    // useEffect(() => {
    //     console.log("min price: ", minPrice);
    //     console.log("max price: ", maxPrice);
    // }, [minPrice, maxPrice]);

    return (
        <div className={styles.resultsPageSingle3Col}>
            <div className={styles.content}>
                <div className={styles.sortAndFilter}>
                    <div className={styles.frame}>
                        <div className={styles.filterByParent}>
                            <FilterDropdown addFilter={setPriFilter} />
                            {state.priFilter && (
                                <Slider
                                    min={0}
                                    max={500}
                                    onChange={({ min, max }) => {
                                        // console.log(
                                        //     `min = ${min}, max = ${max}`
                                        // );
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
                            <ResultCard3Column
                                key={index}
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
            <Navbar />
        </div>
    );
};

export default ResultsPage3Column;
