
import React from 'react';
import styles from './ResultCard.module.scss';



const ResultCard = ({ GameImage, GameTitle, GameDescription }) => {

    return (
        <div className={styles.card}>
            <div className={styles.imageBody}>
                <img src={GameImage} alt={GameTitle} />
            </div>

            <div className={styles.content}>
                <h3>{GameTitle}</h3>
                <p>{GameDescription}</p>
            </div>
        </div>
    )
};

export default ResultCard;

