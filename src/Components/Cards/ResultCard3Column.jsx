import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import PropTypes from "prop-types";
import styles from "./ResultCard3Column.module.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';

const ResultCard3Column = (props) => {
    const { idx, name, rating, price, tags, imgUrl } = props;
    let navigate = useNavigate();    
    // Calculate number of full stars
    const fullStars = Math.floor(rating);
    // Check if there's a half star
    const hasHalfStar = rating - fullStars >= 0.5;

    console.log("Key: " + idx);

    const ShowTaskComplete = () => {
        // Navigate to the completion page
        navigate('/completionpage');

        // Stop timer
    }

    return (
        <div className={styles.resultCard3Column}>
            <div
                className={styles.frame}
                style={{
                    backgroundImage: `url(${imgUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            <div className={styles.frame1}>
                <div className={styles.frameParent}>
                    <div className={styles.frameGroup}>
                        <div className={styles.frame2}>
                            <div className={styles.frame3}>
                                <div>
                                    {[...Array(fullStars)].map((_, index) => (
                                        <FaStar
                                            size={15}
                                            key={index}
                                            color="facc15"
                                        />
                                    ))}
                                    {hasHalfStar && (
                                        <FaStarHalfAlt
                                            size={15}
                                            color="facc15"
                                        />
                                    )}
                                    {[
                                        ...Array(
                                            5 -
                                                fullStars -
                                                (hasHalfStar ? 1 : 0)
                                        ),
                                    ].map((_, index) => (
                                        <FaRegStar
                                            size={15}
                                            key={index}
                                            color="facc15"
                                        />
                                    ))}
                                </div>
                                <div>({rating})</div>
                            </div>
                        </div>
                        <div className={styles.frame4}>
                            <div className={styles.alpineDreamsResort}>
                                {name}
                            </div>
                        </div>
                        <div className={styles.frame5}>
                            <div className={styles.startingFrom299}>
                                Starting from ${price}
                            </div>
                        </div>
                        <div className={styles.frame6}>
                            {tags.map((tag, index) => {
                                if (tag === "Beginner") {
                                    return (
                                        <div
                                            className={styles.beginnerTag}
                                            key={index}
                                        >
                                            <div className={styles.tagLabel}>
                                                {tag}
                                            </div>
                                        </div>
                                    );
                                } else if (tag == "Eco-friendly") {
                                    return (
                                        <div
                                            className={styles.ecoTag}
                                            key={index}
                                        >
                                            <div className={styles.tagLabel}>
                                                {tag}
                                            </div>
                                        </div>
                                    );
                                } else if (tag == "Parking") {
                                    return (
                                        <div
                                            className={styles.parkingTag}
                                            key={index}
                                        >
                                            <div className={styles.tagLabel}>
                                                {tag}
                                            </div>
                                        </div>
                                    );
                                }
                            })}
                        </div>
                    </div>
                    {idx === 1 ? (<div className={styles.frame10} onClick={ShowTaskComplete}>
                        <div className={styles.viewDetails}>View Details</div>
                    </div>) 
                    : 
                    (<div className={styles.frame10}>
                        <div className={styles.viewDetails}>View Details</div>
                    </div>)}
                </div>
            </div>
        </div>
    );
};

ResultCard3Column.propTypes = {
    idx: PropTypes.number,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    tags: PropTypes.array.isRequired,
    imgUrl: PropTypes.string.isRequired,
};

export default ResultCard3Column;
