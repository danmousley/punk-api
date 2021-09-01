import React from 'react';
import CardList from '../CardList';
import styles from './Main.module.scss'

const Main = (props) => {
    const {beers} =props;
    return (
        <>
        <header>
            <h1 className={styles.title}>The Beers</h1>
        </header>
        <section>
            <CardList beers={beers}/>
        </section>
        </>
    )
}

export default Main
