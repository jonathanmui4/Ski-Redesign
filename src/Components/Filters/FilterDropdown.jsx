import React from "react";
import styles from "./FilterDropdown.module.css";

const FilterDropdown = () => {
    return (
        <div>
            <div className={styles.filterBy}>Filter By</div>
            <div className={styles.filterDropdown}>
                <div className={styles.button}>
                    <div className={styles.label}>Pick an option</div>
                </div>
                <div className={styles.listOfItems}>
                    <div className={styles.filterDropdownOptionItem}>
                        <div className={styles.rating}>Rating</div>
                    </div>
                    <div className={styles.filterDropdownOptionItem}>
                        <div className={styles.rating}>Price</div>
                    </div>
                    <div className={styles.filterDropdownOptionItem}>
                        <div className={styles.rating}>Slope Difficulty</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterDropdown;
