import React from 'react';
import Card from '../Card/Card';
import styles from './CardList.module.scss'

const CardList = (props) => {
    const {beers} = props;
    const getCards = () => {
        return beers.map((beer) => {
            return (
                <div className={styles.card} key={beer.id}>
                    <Card beer={beer}/>
                </div>
            )
        })
    }
    return (
        <>
        <section className={styles.cards}>
            {getCards()}
        </section>
        </>
    )
}

export default CardList
