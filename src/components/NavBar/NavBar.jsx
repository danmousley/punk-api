import React from 'react'
import FilterList from '../FilterList'
import SearchBar from '../SearchBar'
import styles from './NavBar.module.scss'
import logo from "../../images/bd-logo.png"

const NavBar = (props) => {
    const {searchBeers, filterBeers} = props
    return (
        <>
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt="brewdog logo" />
            <h2 className={styles.title}>Punk API</h2>
        </header>
        <section>
            <SearchBar searchBeers={searchBeers} />
        </section>
        <section>
            <FilterList filterBeers={filterBeers} />
        </section>
        </>
    )
}

export default NavBar
