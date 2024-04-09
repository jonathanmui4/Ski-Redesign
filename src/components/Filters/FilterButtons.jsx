import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import PropTypes from "prop-types";
import styles from "./FilterButtons.module.css";

const FilterButtons = ({ text, addFilter, removeFilter, setActive }) => {
    const [buttonClicked, setButtonClicked] = useState(false);
    return (
        <div
            className={buttonClicked ? styles.button1 : styles.button2}
            onClick={() => {
                setButtonClicked(!buttonClicked);
                buttonClicked ? removeFilter(text) : addFilter(text);
                setActive && setActive(!buttonClicked);
            }}
        >
            <div className={styles.icons}>
                {buttonClicked ? <FaCheck size={18} /> : <FiPlus size={18} />}
            </div>
            <b className={styles.label}>{text}</b>
        </div>
    );
};

FilterButtons.propTypes = {
    text: PropTypes.string.isRequired,
    addFilter: PropTypes.func.isRequired,
    removeFilter: PropTypes.func.isRequired,
    setActive: PropTypes.func,
};

export default FilterButtons;
