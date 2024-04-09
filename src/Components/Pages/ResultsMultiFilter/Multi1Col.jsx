import React, { useReducer, useState, useEffect } from "react";
import MultiFilter from "../../Filters/MultiFilter";
import FilterDropdown from "../../Filters/FilterDropdown";
import Slider from "../../Filters/Slider";
import Navbar from "../../Navbar/Navbar";
import { resorts } from "../../../content";
import { initialState, OneColumnReducer } from "./OneColumnReducer";
import styles from "./Multi1Col.module.css";
import HorizontalCard from "../../Cards/HorizontalCard";

const Multi1Col = () => {
    const [state, dispatch] = useReducer(OneColumnReducer, initialState);

    const addFilter = (filter) => {
        dispatch({ type: "ADD_FILTER", payload: filter });
    };

    const removeFilter = (filter) => {
        dispatch({ type: "REMOVE_FILTER", payload: filter });
    };

    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(500);
    const [minRating, setMinRating] = useState(0);
    const [maxRating, setMaxRating] = useState(5);
    const [filteredAndSortedResorts, setFilteredAndSortedResorts] = useState(
        []
    );

    useEffect(() => {
        // Filter and sort resorts based on the applied filters
        const filteredResorts = resorts.filter((resort) => {
            if (state.filters.length === 0) return true;
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
            else if (resort.price < minPrice || resort.price > maxPrice)
                return false;
            else if (resort.rating < minRating || resort.rating > maxRating)
                return false;
            return true; // Modify this line with your filtering logic
        });

        // Sort the filtered resorts based on price
        const sortedResorts = filteredResorts.sort((a, b) => {
            if (state.filters.includes("Best Ratings")) {
                return b.rating - a.rating;
            } else if (state.filters.includes("Cheap Resorts")) {
                return a.price - b.price;
            }
            return a.name - b.name;
        });

        setFilteredAndSortedResorts(sortedResorts);
    }, [state.filters, minPrice, maxPrice, minRating, maxRating]);

    // Test states
    // useEffect(() => {
    //     console.log("Filters: ", state.filters);
    //     console.log("Primary Filter: ", state.priFilter);
    // }, [state.filters, state.priFilter]);

    // useEffect(() => {
    //     console.log("min price: ", minPrice);
    //     console.log("max price: ", maxPrice);
    //     console.log("min rating: ", minRating);
    //     console.log("max rating: ", maxRating);
    // }, [minPrice, maxPrice, minRating, maxRating]);

    return (
        <div className={styles.resultsPageMulti1Col}>
            <div className={styles.content}>
                <div className={styles.sortAndFilter}>
                    <div className={styles.frame}>
                        <div className={styles.filterByParent}>
                            <MultiFilter
                                addFilters={addFilter}
                                removeFilter={removeFilter}
                                setMinPrice={setMinPrice}
                                setMaxPrice={setMaxPrice}
                                setMinRating={setMinRating}
                                setMaxRating={setMaxRating}
                            />
                        </div>
                    </div>
                    <div className={styles.searchButton}>
                        <div className={styles.search}>Search</div>
                    </div>
                </div>
                <div className={styles.cards}>
                    {filteredAndSortedResorts.map((resort, index) => {
                        return (
                            <HorizontalCard
                                key={index}
                                idx={index}
                                name={resort.name}
                                price={resort.price}
                                rating={resort.rating}
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

export default Multi1Col;
