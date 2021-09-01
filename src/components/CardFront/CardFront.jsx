import React from 'react'
import styles from './CardFront.module.scss';

const CardFront = (props) => {
    const {
        name,
        image_url,
        tagline,
        volume,
        abv
    } = props.beer;

    return (
        <div className={styles.card}>
            <h2>{name}</h2>
            <img src={image_url} alt="" />
            <h4 className={styles.tagline}>"{tagline}"</h4>
            {/* <p>{description}</p> */}
            <section className={styles.info}>
                <div>Vol: {volume.value} {volume.unit}</div>
                <div>abv: {abv}%</div>
            </section>
            {/* <p>{first_brewed}</p>
            <p>{ph}</p> */}
        </div>
    )
}

export default CardFront
