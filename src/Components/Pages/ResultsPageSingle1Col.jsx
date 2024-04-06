import ResultCard1ColumndiffArra from "../Cards/ResultCard1ColumndiffArra";
import FilterDropdown from "../Filters/FilterDropdown";
import styles from "./ResultsPageSingle1Col.module.css";

const ResultsPageSingle1Col = () => {
    return (
        <div className={styles.resultsPageSingle1Col}>
            <div className={styles.content}>
                <div className={styles.sortAndFilter}>
                    <div className={styles.frame}>
                        <div className={styles.filterByParent}>
                            <FilterDropdown />
                        </div>
                    </div>
                    <div className={styles.searchButton}>
                        <div className={styles.search}>Search</div>
                    </div>
                </div>
                <div className={styles.cards}>
                    <ResultCard1ColumndiffArra />
                    <ResultCard1ColumndiffArra />
                </div>
            </div>
            <div className={styles.frame19}>
                <div className={styles.searchWrapper}>
                    <div className={styles.search1}>Search</div>
                </div>
                <div className={styles.frame20}>
                    <div className={styles.searchForSki}>
                        Search for ski resorts, regions, terms ...
                    </div>
                </div>
            </div>
            <div className={styles.navigationBar}>
                <div className={styles.frame21}>
                    <div className={styles.frame22}>
                        <div className={styles.logo}>
                            <img
                                className={styles.skiresortLogoIcon}
                                alt=""
                                src="/skiresort-logo@2x.png"
                            />
                        </div>
                        <div className={styles.frame23}>
                            <div className={styles.tab}>
                                <div className={styles.label}>
                                    All Ski Resorts
                                </div>
                                <div className={styles.borders}>
                                    <div className={styles.rectangle} />
                                </div>
                            </div>
                            <div className={styles.tab2}>
                                <div className={styles.label}>Test Reports</div>
                                <div className={styles.borders}>
                                    <div className={styles.rectangle} />
                                </div>
                            </div>
                            <div className={styles.tab3}>
                                <div className={styles.label}>Comparison</div>
                                <div className={styles.borders}>
                                    <div className={styles.rectangle} />
                                </div>
                            </div>
                            <div className={styles.tab4}>
                                <div className={styles.label}>Weather</div>
                                <div className={styles.borders}>
                                    <div className={styles.rectangle} />
                                </div>
                            </div>
                            <div className={styles.tab5}>
                                <div className={styles.label}>Ski Lifts</div>
                                <div className={styles.borders}>
                                    <div className={styles.rectangle} />
                                </div>
                            </div>
                            <div className={styles.tab6}>
                                <div className={styles.label}>
                                    Accommodations
                                </div>
                                <div className={styles.borders}>
                                    <div className={styles.rectangle} />
                                </div>
                            </div>
                            <div className={styles.frameItem} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.vectorParent}>
                <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-10@2x.png"
                />
                <b className={styles.austria}>Austria</b>
            </div>
        </div>
    );
};

export default ResultsPageSingle1Col;
