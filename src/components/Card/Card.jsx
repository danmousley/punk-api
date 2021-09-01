import React, {useState} from 'react';
import styles from './Card.module.scss';
import CardFront from '../CardFront';
import CardBack from '../CardBack';


const Card = (props) => {
    const {beer} = props;

    const [isFaceDown, setIsFaceDown] = useState(false);

    const flipStyles = isFaceDown ? styles.faceDown : "";


    return (
    <section className={styles.card}
        className={`${styles.card} ${flipStyles}`}
        onClick={() => setIsFaceDown(!isFaceDown)}
    >
        <div className={styles.front}>
            <CardFront beer={beer} />
        </div>
        <div className={styles.back}>
            <CardBack beer={beer} />
        </div>
    </section>
    )
}

export default Card
