
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useFetch from '../../hooks/useFetch/useFetch';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';


import styles from './TableList.module.scss';

const TableList = () => {
    const movieSelected = useSelector(state => state.movie.movieSelected);
    const [data, error] = useFetch(movieSelected.characters, 0)

    const [urlArray, setUrlArray] = useState([]);
    const [charactersArr, setCharactersArr] = useState([]);


    useEffect(() => {
        // RESET DATA TO ACCOMODATE NEW MOVIE TO SELECT
        setUrlArray([]);



        // SET NEW URL ARRAY BASED ON SELECTED MOVIE
        if (movieSelected && !charactersArr.includes(movieSelected)) {
            // console.log(movieSelected)
            setCharactersArr(prev => {
                return [
                    ...prev,
                    movieSelected
                ]
            })

        }
    }, [movieSelected])


    useEffect(() => {

        if (charactersArr.length) {
            const data = charactersArr.find(()=> charactersArr.includes(movieSelected));
            // console.log(data)
        }
      
    }, [charactersArr])


    // useEffect(() => {
    //     if (data || error) {
    //         if (data) {
    //             setstate(prev => [...prev, data])

    //         } else {
    //             return <Error error={error} runOnClickFunc={() => setRefetch(prev => prev + 1)} />
    //         }
    //     } else {
    //         return <Loader />
    //     }
    // }, [data, error])


    return (

        <section className={styles.list}>

            <div className={styles.select}>
                <label for="pet-select">Select Gender:</label>

                <select id="pet-select">
                    <option value="all">All</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>



            <table>
                <tr>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Height</th>
                </tr>

                {/* <tr>
                    <td>Sky Walker</td>
                    <td>Male</td>
                    <td>17cmn</td>
                </tr> */}

                <tr>
                    <td colSpan='2'>
                        <span>Total Visible Characters:</span> 8
                    </td>
                    <td> <span>sum of heights:</span> 170 cm (5ft/6.93in)</td>
                </tr>
            </table>

        </section>
    )
}


export default TableList;

