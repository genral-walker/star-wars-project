
import React, { useEffect, useRef, useState } from 'react';
import useFetch from '../../hooks/useFetch/useFetch';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';
import styles from './HeadNav.module.scss';


const HeadNav = () => {

    const [refetch, setRefetch] = useState(0);
    const listRef = useRef();
    const [accordion, setAccordion] = useState(false);
    const [data, error] = useFetch('https://swapi.dev/api/films', refetch);


    const toggleAccordion = () => {

        setAccordion(prev => !prev);

        if (accordion) {
            listRef.current.style.height = '0px';
        } else {
            listRef.current.style.height = `${listRef.current.scrollHeight}px`;
        }
    }


    const returnMovies = () => {

        if (data || error) {
            if (data) {
                const sortedData = data.results.sort((a, b) => Number(a.release_date.match(/\d\d\d\d/)[0]) - Number(b.release_date.match(/\d\d\d\d/)[0]));

                return sortedData.map(data => {
                    return <li key={data.episode_id}>{data.title}</li>
                })

            } else {
                return <Error error={error} runOnClickFunc={() => setRefetch(prev => prev + 1)} />
            }
        } else {
            return <Loader />
        }
    }



    return (
        <nav className={styles.nav}>
            <div className={styles.accordion} onClick={toggleAccordion}>
                <h2>Star Wars Movies</h2>
                <span className={accordion && styles.hide}></span>
            </div>

            <div className={styles.contents} ref={listRef}>
                <ul>
                    {returnMovies()}
                </ul>
            </div>
        </nav>
    )
};


export default HeadNav;

