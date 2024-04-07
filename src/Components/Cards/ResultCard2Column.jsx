import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import styles from "./ResultCard2Column.module.css";

const ResultCard2Column = () => {
    const imgUrl = "resorts/Resort1.jpeg";
    const rating = 4.5;
    // Calculate number of full stars
    const fullStars = Math.floor(rating);
    // Check if there's a half star
    const hasHalfStar = rating - fullStars >= 0.5;

    return (
        <div className={styles.resultCard2ColumnsameArra}>
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
                            <div className={styles.frame3}></div>
                            <div className={styles.frame4}>
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
                        <div className={styles.frame5}>
                            <div className={styles.alpineDreamsResort}>
                                Alpine Dreams Resort
                            </div>
                        </div>
                        <div className={styles.frame6}>
                            <div className={styles.viewDetails}>
                                Starting from $299
                            </div>
                        </div>
                        <div className={styles.frame7}>
                            <div className={styles.frame8}>
                                <div className={styles.beginner}>Beginner</div>
                            </div>
                            <div className={styles.frame9}>
                                <div className={styles.beginner}>
                                    Eco-friendly
                                </div>
                            </div>
                            <div className={styles.frame10}>
                                <div className={styles.beginner}>Parking</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.frame11}>
                        <div className={styles.viewDetails}>View Details</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultCard2Column;
