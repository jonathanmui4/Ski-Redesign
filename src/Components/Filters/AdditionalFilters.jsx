import React from "react";
import PropTypes from "prop-types";
import styles from "./AdditionalFilters.module.css";
import FilterButtons from "./FilterButtons";

const AdditionalFilters = (props) => {
    const { addFilters, removeFilter } = props;

    return (
        <div className={styles.container}>
            <div className={styles.additionalFilters}>Additional Filters</div>
            <div className={styles.buttonParent}>
                <FilterButtons
                    text="Best Ratings"
                    addFilter={addFilters}
                    removeFilter={removeFilter}
                />
                <FilterButtons
                    text="Cheap Resorts"
                    addFilter={addFilters}
                    removeFilter={removeFilter}
                />
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

AdditionalFilters.propTypes = {
    addFilters: PropTypes.func.isRequired,
    removeFilter: PropTypes.func.isRequired,
};

export default AdditionalFilters;
