
import React from 'react';
import styles from './Hero.module.scss';


const Hero = () => {

    return (
        <header className={styles.body}>
            <h1>9ijakids Game List</h1>
            <h3>Solution to the Front-End Engineer ReactJS Virtual Internship test.</h3>

            <form className={styles.searchBox}>
                <input type='search' placeholder='Search for Games by Topic' />
                <button type="submit">
                    Search
                </button>
            </form>
        </header>
    )
};

export default Hero;