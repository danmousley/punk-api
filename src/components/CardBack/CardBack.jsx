import React from 'react';
import styles from './CardBack.module.scss';

const CardBack = (props) => {
    const {
        name,
        description,
        food_pairing,
    } = props.beer;

    return (
        <div className={styles.card}>
            <h2>{name}</h2>
            <p className={styles.description}>{description}</p>
            <section className={styles.foods}>
                <h4>Goes well with:</h4>
                <ul>
                    {food_pairing.map((food) => <li>{food}</li>)}
                </ul>
            </section>
        </div>
    )
}

export default CardBack
