import styles from "./ResultCard1ColumndiffArra.module.css";

const ResultCard1ColumndiffArra = () => {
    const imgUrl = "resorts/Resort1.jpeg";
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
                                <div className={styles.div}>(4.5)</div>
                            </div>
                        </div>
                        <div className={styles.frame3}>
                            <div className={styles.alpineDreamsResort}>
                                Alpine Dreams Resort
                            </div>
                        </div>
                        <div className={styles.frame4}>
                            <div className={styles.startingFrom299}>
                                Starting from $299
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

export default ResultCard1ColumndiffArra;
