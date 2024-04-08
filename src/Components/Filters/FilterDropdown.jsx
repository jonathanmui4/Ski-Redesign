import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import PropTypes from "prop-types";
import styles from "./FilterDropdown.module.css";
import DropdownOptions from "./DropdownOptions";

const FilterDropdown = (props) => {
    const { addFilter } = props;
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
                            addFilter={addFilter}
                        />
                        <DropdownOptions
                            text="Price"
                            setSelectedOption={setSelectedOption}
                            hideDropdown={hideDropdown}
                            addFilter={addFilter}
                        />
                        <DropdownOptions
                            text="Slope Difficulty"
                            setSelectedOption={setSelectedOption}
                            hideDropdown={hideDropdown}
                            addFilter={addFilter}
                        />
                        <DropdownOptions
                            text="Lifts"
                            setSelectedOption={setSelectedOption}
                            hideDropdown={hideDropdown}
                            addFilter={addFilter}
                        />
                        <DropdownOptions
                            text="Parking"
                            setSelectedOption={setSelectedOption}
                            hideDropdown={hideDropdown}
                            addFilter={addFilter}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

FilterDropdown.propTypes = {
    addFilter: PropTypes.func,
};

export default FilterDropdown;
