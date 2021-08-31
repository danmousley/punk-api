import React from 'react'

const FilterItem = (props) => {
    const {label, filter, filterBeers} = props;
    return (
        <div>
            <label>{label}</label>
            <input onClick={(e) => filterBeers(e.target.value)} type="checkbox" value={filter}/>
        </div>
    )
}

export default FilterItem
