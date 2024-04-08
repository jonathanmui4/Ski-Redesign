import ResultCard1ColumndiffArra from "../../Cards/ResultCard1ColumndiffArra";
import AdditionalFilters from "../../Filters/AdditionalFilters";
import FilterDropdown from "../../Filters/FilterDropdown";
import Slider from "../../Filters/Slider";
import Navbar from "../../Navbar/Navbar";
import { resorts } from "../../../content";
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
                    {resorts.map((resort, index) => {
                        return (
                            <ResultCard1ColumndiffArra
                                key={index}
                                name={resort.name}
                                rating={resort.rating}
                                price={resort.price}
                                tags={resort.tags}
                                imgUrl={resort.image}
                            />
                        );
                    })}
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
            <Navbar />
        </div>
    );
};

export default ResultsPageSingle1Col;
