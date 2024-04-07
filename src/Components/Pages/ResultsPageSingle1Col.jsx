import ResultCard1ColumndiffArra from "../Cards/ResultCard1ColumndiffArra";
import AdditionalFilters from "../Filters/AdditionalFilters";
import FilterDropdown from "../Filters/FilterDropdown";
import Slider from "../Filters/Slider";
import FrameComponent1 from "./HomePage/FrameComponent1";
import styles from "./ResultsPageSingle1Col.module.css";

const ResultsPageSingle1Col = () => {
    return (
        <div className={styles.resultsPageSingle1Col}>
            <div className={styles.content}>
                <div className={styles.sortAndFilter}>
                    <div className={styles.frame}>
                        <div className={styles.filterByParent}>
                            <FilterDropdown />
                            <Slider
                                min={0}
                                max={100}
                                onChange={({ min, max }) =>
                                    console.log(`min = ${min}, max = ${max}`)
                                }
                            />
                            <AdditionalFilters />
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
            <FrameComponent1 />
        </div>
    );
};

export default ResultsPageSingle1Col;
