import React from 'react';
import styles from './Card.module.scss';

const Card = (props) => {
    const {name, 
        tagline,
        description,
        abv,
        image_url,
        first_brewed,
        ph
    } = props.beer;


    return (
        <div className={styles.card}>
            <h3>{name}</h3>
            <img src={image_url} alt="" />
            <h4>"{tagline}"</h4>
            {/* <p>{description}</p> */}
            <p><b>{abv}%</b></p>
            {/* <p>{first_brewed}</p>
            <p>{ph}</p> */}
        </div>
    )
}

export default Card
