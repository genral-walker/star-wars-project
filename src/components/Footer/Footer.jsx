
import React from 'react';
import styles from './Footer.module.scss';


const Footer = () => {

    const date = () => {
        const date = new Date; return date.getFullYear()
    };

    return (
        <footer className={styles.foot}>
            &copy; Copyright 9ijakids {date()}
        </footer>
    )
};


export default Footer;