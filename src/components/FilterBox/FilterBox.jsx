
import React from 'react';
import styles from './FilterBox.module.scss';


const FilterBox = () => {

    const filterSearch = event => {
        console.log(event)
    };

    return (
        <div className={styles.body} onClick={filterSearch}>
            <div>
                <p>Filter by Groups</p>
                <input type="checkbox" id="Academic" name="Academic" value="Academic" />
                <label for="Academic"> Academic</label>
                <input type="checkbox" id="Financial Literacy" name="Financial Literacy" value="Financial Literacy" />
                <label for="Financial Literacy"> Financial Literacy</label>
            </div>

            <div>
                <p>Filter by Levels</p>
                <input type="checkbox" id="Key Stage 1" name="Key Stage 1" value="Key Stage 1" />
                <label for="Key Stage 1"> Level 1</label>
                <input type="checkbox" id="Key Stage 2" name="Key Stage 2" value="Key Stage 2" />
                <label for="Key Stage 2"> Level 2</label>
            </div>
        </div>
    )
};

export default FilterBox;