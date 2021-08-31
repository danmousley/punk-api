import React from 'react';
import CardList from '../CardList';

const Main = (props) => {
    const {beers} =props;
    return (
        <>
        <header>
            <h1>Browse our beers</h1>
        </header>
        <section>
            <CardList beers={beers}/>
        </section>
        </>
    )
}

export default Main
