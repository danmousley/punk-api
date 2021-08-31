import React from 'react'
import FilterList from '../FilterList'
import SearchBar from '../SearchBar'

const NavBar = () => {
    return (
        <>
        <header>
            <h2>Punk API</h2>
        </header>
        <section>
            <SearchBar />
        </section>
        <section>
            <FilterList />
        </section>
        </>
    )
}

export default NavBar
