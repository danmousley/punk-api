import React from 'react'
import styles from './FilterItem.module.scss'

const FilterItem = (props) => {
    const {label, filter, filterBeers} = props;
    return (
        <div className={styles.labels}>
            <input onClick={(e) => filterBeers(e.target.value)} type="checkbox" value={filter}/>
            <span className={styles.checkBox}></span>
            <label className={styles.labelText}>{label}</label>
        </div>
    )
}

export default FilterItem
