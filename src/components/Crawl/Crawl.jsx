
import React from 'react';
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import styles from './Crawl.module.scss';

const Crawl = () => {

    const movie = useSelector(state => state.movie.movieSelected)

    return (
        <div className={styles.body}>
            {
                movie ?
                    <marquee width="100%" direction="up" scrollamount="1.5">
                        {movie.opening_crawl}
                    </marquee> :
                    <Loader />
            }
        </div>
    )
}

export default Crawl;



