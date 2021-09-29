
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import useFetch from '../../hooks/useFetch/useFetch';
import { selectMovie } from '../../redux/movie/movieActions';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';
import styles from './HeadNav.module.scss';


const HeadNav = () => {

    const [refetch, setRefetch] = useState(0);
    const listRef = useRef();
    const ulRef = useRef();
    const [accordion, setAccordion] = useState(false);
    const [data, error] = useFetch('https://swapi.dev/api/films', refetch);
    const dispatch = useDispatch();



    const toggleAccordion = () => {

        setAccordion(prev => !prev);

        if (accordion) {
            listRef.current.style.height = '0px';
        } else {
            listRef.current.style.height = `${listRef.current.scrollHeight}px`;
        }
    }


    const dispatchFunctions = (e, data) => {

        dispatch(selectMovie(data));

        // TOGGLE ACTIVE CLASS
        ulRef.current.childNodes.forEach(element => {
            element.className = ''
        });
        e.target.className = styles.active
    }

    
    const returnMovies = () => {

        if (data || error) {
            if (data) {
                // This doesn't do much.the API already arranged the data according to earliest to newest... Just in case though.
                const sortedData = data.results.sort((a, b) => Number(a.release_date.match(/\d\d\d\d/)[0]) - Number(b.release_date.match(/\d\d\d\d/)[0]));

                return sortedData.map(data => {
                    return <li key={data.episode_id} onClick={(e) => dispatchFunctions(e, data)}>{data.title}</li>
                })

            } else {
                return <Error error={error} runTryAgainFunc={() => setRefetch(prev => prev + 1)} />
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
                <ul ref={ulRef}>
                    {returnMovies()}
                </ul>
            </div>
        </nav>
    )
};


export default HeadNav;

