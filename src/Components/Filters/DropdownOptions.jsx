import React from "react";
import PropTypes from "prop-types";
import styles from "./DropdownOptions.module.css";

const DropdownOptions = ({ text, setSelectedOption, hideDropdown }) => {
    return (
        <div
            className={styles.filterDropdownOptionItem}
            onClick={() => {
                setSelectedOption(text);
                hideDropdown();
            }}
        >
            <div className={styles.rating}>{text}</div>
        </div>
    );
};

DropdownOptions.propTypes = {
    text: PropTypes.string.isRequired,
    setSelectedOption: PropTypes.func.isRequired,
    hideDropdown: PropTypes.func.isRequired,
};

export default DropdownOptions;
