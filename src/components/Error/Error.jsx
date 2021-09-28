
import React from 'react';
import styles from './Error.module.scss';

const Error = ({ error, runTryAgainFunc }) => {

    return (
        <div className={styles.body}>
            <p>{error}</p>
            <button onClick={runTryAgainFunc}>Try Again</button>
        </div>
    )
}

export default Error;
