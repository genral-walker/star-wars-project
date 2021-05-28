
import React from 'react';
import styles from './ResultCard.module.scss';
import pic from '../../assets/images/hero-bg.jpg';



const ResultCard = ({ }) => {

    return (
        <div className={styles.card}>
            <div className={styles.imageBody}>
                <img src={pic} alt='picture' />
            </div>

            <div className={styles.content}>
                <h3>This is A SubTitle</h3>
                <p>Communication Yr 2 (different ways we can communicate)</p>
            </div>
        </div>
    )
};

export default ResultCard;

