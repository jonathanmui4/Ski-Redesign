import React from "react";
import styles from "./AdditionalFilters.module.css";
import FilterButtons from "./FilterButtons";

const AdditionalFilters = () => {
    return (
        <div className={styles.container}>
            <div className={styles.additionalFilters}>Additional Filters</div>
            <div className={styles.buttonParent}>
                <FilterButtons text="Best Ratings" />
                <FilterButtons text="Cheap Resorts" />
                <FilterButtons text="For Beginners" />
                <FilterButtons text="Eco-friendly" />
                <FilterButtons text="Family Friendly" />
                <FilterButtons text="With Lifts" />
                <FilterButtons text="With Parking" />
            </div>
        </div>
    );
};

export default AdditionalFilters;
