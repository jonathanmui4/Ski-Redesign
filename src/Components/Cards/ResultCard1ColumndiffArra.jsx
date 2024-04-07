import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import PropTypes from "prop-types";
import styles from "./ResultCard1ColumndiffArra.module.css";

const ResultCard1ColumndiffArra = (props) => {
    const { key, name, rating, price, tags, imgUrl } = props;
    // const imgUrl = "resorts/Resort1.jpeg";
    // const rating = 4.5;
    // Calculate number of full stars
    const fullStars = Math.floor(rating);
    // Check if there's a half star
    const hasHalfStar = rating - fullStars >= 0.5;
    return (
        <div className={styles.resultCard1ColumndiffArra}>
            <div
                className={styles.frame}
                style={{
                    backgroundImage: `url(${imgUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            <div className={styles.frame1}>
                <div className={styles.frameInner}>
                    <div className={styles.starRatingsParent}>
                        <div className={styles.starRatings}>
                            <div className={styles.frame2}>
                                <div className={styles.div}>
                                    <div>
                                        {[...Array(fullStars)].map(
                                            (_, index) => (
                                                <FaStar
                                                    size={15}
                                                    key={index}
                                                    color="facc15"
                                                />
                                            )
                                        )}
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
                        </div>
                        <div className={styles.frame3}>
                            <div className={styles.alpineDreamsResort}>
                                {name}
                            </div>
                        </div>
                        <div className={styles.frame4}>
                            <div className={styles.startingFrom299}>
                                Starting from ${price}
                            </div>
                        </div>
                        <div className={styles.frame5}>
                            <div className={styles.frame6}>
                                <div className={styles.beginner}>Beginner</div>
                            </div>
                            <div className={styles.frame7}>
                                <div className={styles.beginner}>
                                    Eco-friendly
                                </div>
                            </div>
                            <div className={styles.frame8}>
                                <div className={styles.beginner}>Parking</div>
                            </div>
                        </div>
                        <div className={styles.frame9}>
                            <div className={styles.viewDetails}>
                                View Details
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ResultCard1ColumndiffArra.propTypes = {
    key: PropTypes.number,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    tags: PropTypes.array.isRequired,
    imgUrl: PropTypes.string.isRequired,
};

export default ResultCard1ColumndiffArra;
