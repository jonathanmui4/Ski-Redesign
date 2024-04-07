import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import styles from "./FilterDropdown.module.css";
import DropdownOptions from "./DropdownOptions";

const FilterDropdown = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Pick an option");

    const hideDropdown = () => setShowDropdown(false);

    return (
        <div>
            <div className={styles.filterBy}>Filter By</div>
            <div className={styles.filterDropdown}>
                <div
                    className={styles.button}
                    onClick={() => setShowDropdown(!showDropdown)}
                >
                    <div className={styles.label}>
                        {selectedOption}
                        {showDropdown ? (
                            <MdKeyboardArrowUp size={18} />
                        ) : (
                            <MdKeyboardArrowDown size={18} />
                        )}
                    </div>
                </div>
                {showDropdown && (
                    <div className={styles.listOfItems}>
                        <DropdownOptions
                            text="Rating"
                            setSelectedOption={setSelectedOption}
                            hideDropdown={hideDropdown}
                        />
                        <DropdownOptions
                            text="Price"
                            setSelectedOption={setSelectedOption}
                            hideDropdown={hideDropdown}
                        />
                        <DropdownOptions
                            text="Slope Difficulty"
                            setSelectedOption={setSelectedOption}
                            hideDropdown={hideDropdown}
                        />
                        <DropdownOptions
                            text="Lifts"
                            setSelectedOption={setSelectedOption}
                            hideDropdown={hideDropdown}
                        />
                        <DropdownOptions
                            text="Parking"
                            setSelectedOption={setSelectedOption}
                            hideDropdown={hideDropdown}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default FilterDropdown;
