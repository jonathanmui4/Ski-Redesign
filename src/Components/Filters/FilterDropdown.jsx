import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import styles from "./FilterDropdown.module.css";

const FilterDropdown = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div>
            <div className={styles.filterBy}>Filter By</div>
            <div className={styles.filterDropdown}>
                <div
                    className={styles.button}
                    onClick={() => setShowDropdown(!showDropdown)}
                >
                    <div className={styles.label}>
                        Pick an option
                        {showDropdown ? (
                            <MdKeyboardArrowUp size={18} />
                        ) : (
                            <MdKeyboardArrowDown size={18} />
                        )}
                    </div>
                </div>
                {showDropdown && (
                    <div className={styles.listOfItems}>
                        <div className={styles.filterDropdownOptionItem}>
                            <div className={styles.rating}>Rating</div>
                        </div>
                        <div className={styles.filterDropdownOptionItem}>
                            <div className={styles.rating}>Price</div>
                        </div>
                        <div className={styles.filterDropdownOptionItem}>
                            <div className={styles.rating}>
                                Slope Difficulty
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FilterDropdown;
