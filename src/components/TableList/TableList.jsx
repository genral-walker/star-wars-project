
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useFetch from '../../hooks/useFetch/useFetch';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';
import styles from './TableList.module.scss';

const TableList = () => {
    const movieSelected = useSelector(state => state.movie.movieSelected);
    const [refetch, setRefetch] = useState(0);
    const [data, error] = useFetch(movieSelected.characters, refetch);
    const [filteredGender, setFilteredGender] = useState();


    const filterByGender = value => {
        if (data) {
            if (value === 'all') {
                setFilteredGender(data)
            } else {
                const newCharacters = data.filter(({ gender }) => gender === value);
                setFilteredGender(newCharacters);
            }
        }
    }


    const sumTotalHeight = () => {
        if (filteredGender) {
            // FILTER OBJS FOR THOSE THAT HAVE NUMBERS FOR HEIGHT
            const filteredForOnlyNumbers = filteredGender.filter(({ height }) => {
                const convertedHeight = +height;

                if (Number.isInteger(convertedHeight)) {
                    return convertedHeight;
                }
            });

            // CALCULATE HEIGHT IN CM, INCHES, FEET
            const totalHeightInCM = filteredForOnlyNumbers.reduce((accum, { height }) => {
                const convertedHeight = +height;
                return accum + convertedHeight;    
            }, 0);

            // Convert cm to Feet
            // COnvert cm to Inches
            const totalHeightInFeet = (totalHeightInCM / 30.48).toFixed(1),
                totalHeightInInches = (totalHeightInCM / 2.54).toFixed(2);

            return `${totalHeightInCM} cm (${totalHeightInFeet}ft/${totalHeightInInches}in)`
        }

    }


    const returnCharactersInfo = () => {
        if (filteredGender || error) {
            if (filteredGender) {
                return (<>
                    {filteredGender.map(({ name, gender, height }, idx) => {
                        return <tr key={idx}>
                            <td>{name}</td>
                            <td>{gender}</td>
                            {height === 'unknown' ? <td>{height}</td> : <td>{height} cm</td>}
                        </tr>
                    })}

                    <tr>
                        <td>
                            <span>Total Visible Characters:</span> {filteredGender.length}
                        </td>
                        <td colSpan='2'> <span>Total heights:</span> {sumTotalHeight()}</td>
                    </tr>
                </>)
            } else {
                return <tr><td colSpan='3'><Error error={error} runTryAgainFunc={() => setRefetch(prev => prev + 1)} /></td></tr>
            }

        } else {
            return <tr> <td colSpan='3'><Loader /></td> </tr >
        }
    }


    useEffect(() => {
        // THIS ENABLES THE API CALL AGAIN WHENEVR SELECTED MOVIE CHNAGES
        if (data || error) {
            setRefetch(prev => prev + 1);
        }
    }, [movieSelected])


    useEffect(() => {
        // SET FILTEREDGENDER (THIS IS WHAT WE WILL BE RENDERING FROM)
        setFilteredGender(data)
    }, [data])


    return (
        <section className={styles.list}>

            <div className={styles.select} onChange={(e) => filterByGender(e.target.value)}>
                <label for="pet-select">Select Gender:</label>

                <select id="pet-select">
                    <option value="all">All</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="hermaphrodite">Hermaphrodite</option>
                </select>
            </div>

            <div className={styles.tableContainer}>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Height</th>
                    </tr>

                    {returnCharactersInfo()}

                </table>
            </div>


        </section>
    )
}


export default TableList;

