import React from 'react'
import styles from './FilterItem.module.scss'

const FilterItem = (props) => {
    const {label, filter, filterBeers} = props;
    return (
        <label className={styles.labels}>
            <input onClick={(e) => filterBeers(e.target.value)} type="checkbox" value={filter}/>
            <span className={styles.checkmark}></span>
            <span className={styles.labelText}>{label}</span>
            {/* <label className={styles.labelText}>{label}</label> */}
        </label>
    )
}

export default FilterItem
