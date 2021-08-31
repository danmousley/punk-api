import React from 'react'

const SearchBar = (props) => {
    const {searchBeers} = props
    return (
        <div>
            <input onChange={e => searchBeers(e.target.value)} type="text" placeholder="Search..." />
        </div>
    )
}

export default SearchBar
