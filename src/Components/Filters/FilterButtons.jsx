import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import styles from "./FilterButtons.module.css";

const FilterButtons = ({ text }) => {
    const [buttonClicked, setButtonClicked] = useState(false);
    return (
        <div
            className={buttonClicked ? styles.button1 : styles.button2}
            onClick={() => setButtonClicked(!buttonClicked)}
        >
            {buttonClicked ? (
                <FaCheck size={18} color={"#ffffff"} />
            ) : (
                <FiPlus size={18} color={"#3B82F6"} />
            )}
            <b className={styles.label}>{text}</b>
        </div>
    );
};

export default FilterButtons;
