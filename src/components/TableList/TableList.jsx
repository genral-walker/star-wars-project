
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import useFetch from '../../hooks/useFetch/useFetch';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';
import styles from './TableList.module.scss';



const TableList = () => {

    const movieSelected = useSelector(state => state.movie.movieSelected);
    const [refetch, setRefetch] = useState(0);
    const [fetchedData, error] = useFetch(movieSelected.characters, refetch);
    const [filteredGender, setFilteredGender] = useState();
    const selectRef = useRef();
    const tableHead = useRef();
    const [isAscended, setIsAscended] = useState(true)


    const filterByGender = value => {
        if (filteredGender) {
            // RESET ANIMATION UI ON TH ELEMENT
            tableHead.current.childNodes.forEach(element => {
                element.className = ''
            });

            if (fetchedData) {
                if (value === 'all') {
                    setFilteredGender(fetchedData)
                } else {
                    const newCharacters = fetchedData.filter(({ gender }) => gender === value);
                    setFilteredGender(newCharacters);
                }
            }
        }

    }


    const sortTableByHeader = event => {

        if (filteredGender) {
            // TOGGLE DIRECTION
            setIsAscended(prev => !prev)

            // TRANSITION
            tableHead.current.childNodes.forEach(element => {
                element.className = ''
            });
            event.target.className = styles.active


            let filterByThead = [...filteredGender];

            if (event.target.id === 'height') {

                // TAKE OUT ANY OBJ IN ARRAY WHOSE HEIGHT VALUE ISN'T A NUMBER
                const nanObjs = filterByThead.filter(({ height }) => {
                    let chnageToNum = +height;
                    return isNaN(chnageToNum)
                });

                // OBJS IN ARRAY WHOSE HEIGHT VALUE IS A NUMBER
                const numObjs = filterByThead.filter(({ height }) => {
                    let chnageToNum = +height;
                    return !isNaN(chnageToNum)
                });

                // SORT BY NUMBER
                numObjs.sort((a, b) => +(a.height) - +(b.height));

                // JOIN OBJS back
                filterByThead = [...numObjs, ...nanObjs]

            } else {
                const value = event.target.id;
                // SORT BY TEXT VALUE
                filterByThead.sort((a, b) => {
                    if (a[value] < b[value]) {
                        return -1;
                    }
                    if (a[value] > b[value]) {
                        return 1;
                    }
                    return 0;
                })
            }

            // CHECK TO SEE WHAT DIRECTION DATA SHOULD BE DISPLAYED: ASC OR DSC
            if (!isAscended) {
                filterByThead.reverse()
            }

            setFilteredGender(filterByThead);
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
                            <span>Total Characters:</span> {filteredGender.length}
                        </td>
                        <td colSpan='2'> <span>Total Heights:</span> {sumTotalHeight()}</td>
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
        if (fetchedData || error) {
            setRefetch(prev => prev + 1);
        }
    }, [movieSelected])



    useEffect(() => {
        // RESET SELECTED VALUE FOR SELECT AND TH ELEMENT
        selectRef.current.value = 'all';
        tableHead.current.childNodes.forEach(element => {
            element.className = ''
        });

        // THIS IS WHAT WE WILL BE RENDERING FROM
        setFilteredGender(fetchedData)
    }, [fetchedData])

    

    return (
        <section className={styles.list}>

            <div className={styles.select} onChange={(e) => filterByGender(e.target.value)}>
                <label>Select Gender:</label>

                <select ref={selectRef}>
                    <option value="all">All</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="hermaphrodite">Hermaphrodite</option>
                </select>
            </div>
            
            
            <div className={styles.tableContainer}>
                <table>
                    <tr onClick={sortTableByHeader} ref={tableHead}>
                        <th id='name'>
                            <p><span>Name</span> {isAscended ? <span>&#9660;</span> : <span>&#9650;</span>}</p>
                        </th>
                        <th id='gender'>
                            <p><span>Gender</span> {isAscended ? <span>&#9660;</span> : <span>&#9650;</span>}</p>
                        </th>
                        <th id='height'><p>
                            <span>Height</span> {isAscended ? <span>&#9660;</span> : <span>&#9650;</span>}</p>
                        </th>
                    </tr>

                    {returnCharactersInfo()}

                </table>
            </div>
        </section>
    )
}


export default TableList;

