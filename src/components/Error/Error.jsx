
import React from 'react';
import styles from './Error.module.scss';

const Error = ({error, runOnClickFunc}) =>{

    return (
        <div className={styles.body}>
            <p>{error}</p>
            <button onClick={runOnClickFunc}>Try Again</button>
        </div>
    )
}

export default Error;
