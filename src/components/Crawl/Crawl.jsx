
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Crawl.module.scss';

const Crawl = () => {

    const movie = useSelector(state => state.movie.movieSelected)

    return (
        <div className={styles.body}>
            <marquee width="100%" direction="up" scrollamount="1">
                {movie.opening_crawl}
            </marquee>

        </div>
    )
}

export default Crawl;



