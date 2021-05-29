
import React from 'react';
import styles from './Hero.module.scss';


const Hero = ({searchByTitle}) => {

    return (
        <header className={styles.body}>
            <h1>9ijakids Game List</h1>
            <h3>Solution to the Front-End Engineer ReactJS Virtual Internship test.</h3>

            <div className={styles.searchBox}>
                <input type='search' placeholder='Search for Games by Topic' onInput={searchByTitle}/>
            </div>
        </header>
    )
};

export default Hero;