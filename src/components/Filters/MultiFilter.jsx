import React, { useState, useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import FilterButtons from "./FilterButtons";
import Slider from "./Slider";
import { initialState, MultiFilterReducer } from "./MultiFilterReducer";
import styles from "./MultiFilter.module.css";

const MultiFilter = (props) => {
    const {
        addFilters,
        removeFilter,
        setMinPrice,
        setMaxPrice,
        setMinRating,
        setMaxRating,
    } = props;
    const [state, dispatch] = useReducer(MultiFilterReducer, initialState);

    const setRatingsActive = (isActive) => {
        dispatch({ type: "SET_RATINGS_ACTIVE", payload: isActive });
    };

    const setPriceActive = (isActive) => {
        dispatch({ type: "SET_PRICE_ACTIVE", payload: isActive });
    };

    return (
        <div className={styles.container}>
            <div className={styles.additionalFilters}>Filter By</div>
            <div className={styles.buttonParent}>
                <FilterButtons
                    text="Best Ratings"
                    addFilter={addFilters}
                    removeFilter={removeFilter}
                    setActive={setRatingsActive}
                />
                {state.isRatingsActive && (
                    <div className={styles.sliderParent}>
                        <Slider
                            min={0}
                            max={5}
                            onChange={({ min, max }) => {
                                // console.log(`min = ${min}, max = ${max}`);
                                setMinRating(min);
                                setMaxRating(max);
                            }}
                        />
                    </div>
                )}
                <FilterButtons
                    text="Cheap Resorts"
                    addFilter={addFilters}
                    removeFilter={removeFilter}
                    setActive={setPriceActive}
                />
                {state.isPriceActive && (
                    <Slider
                        min={0}
                        max={500}
                        onChange={({ min, max }) => {
                            // console.log(`min = ${min}, max = ${max}`);
                            setMinPrice(min);
                            setMaxPrice(max);
                        }}
                    />
                )}
                <FilterButtons
                    text="For Beginners"
                    addFilter={addFilters}
                    removeFilter={removeFilter}
                />
                <FilterButtons
                    text="Eco-friendly"
                    addFilter={addFilters}
                    removeFilter={removeFilter}
                />
                <FilterButtons
                    text="Family Friendly"
                    addFilter={addFilters}
                    removeFilter={removeFilter}
                />
                <FilterButtons
                    text="With Lifts"
                    addFilter={addFilters}
                    removeFilter={removeFilter}
                />
                <FilterButtons
                    text="With Parking"
                    addFilter={addFilters}
                    removeFilter={removeFilter}
                />
            </div>
        </div>
    );
};

MultiFilter.propTypes = {
    addFilters: PropTypes.func.isRequired,
    removeFilter: PropTypes.func.isRequired,
    setMinPrice: PropTypes.func.isRequired,
    setMaxPrice: PropTypes.func.isRequired,
    setMinRating: PropTypes.func.isRequired,
    setMaxRating: PropTypes.func.isRequired,
};

export default MultiFilter;
