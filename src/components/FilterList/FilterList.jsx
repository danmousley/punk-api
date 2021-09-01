import React from 'react'
import FilterItem from '../FilterItem'
import styles from './FilterList.module.scss'

const FilterList = (props) => {
    const {filterBeers} = props;
    return (
        <>
            <h3 className={styles.filterTitle}>Filter Beers</h3>
            <section>
                <FilterItem filterBeers={filterBeers} filter="abv" label="High ABV (> 6.0%)"/>
                <FilterItem filterBeers={filterBeers} filter="classic" label="Classic Range"/>
                <FilterItem filterBeers={filterBeers} filter="acidity" label="Acidic (pH < 4.0)"/>
            </section>
        </>
    )
}

export default FilterList
