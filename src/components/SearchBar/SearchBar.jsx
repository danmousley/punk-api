import React from 'react'
import styles from './SearchBar.module.scss'

const SearchBar = (props) => {
    const {searchBeers} = props
    return (
        <div>
            <input className={styles.search} onChange={e => searchBeers(e.target.value)} type="text" placeholder="Search beers..." />
        </div>
    )
}

export default SearchBar
