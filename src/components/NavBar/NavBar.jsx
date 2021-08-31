import React from 'react'
import FilterList from '../FilterList'
import SearchBar from '../SearchBar'

const NavBar = (props) => {
    const {searchBeers, filterBeers} = props
    return (
        <>
        <header>
            <h2>Punk API</h2>
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
