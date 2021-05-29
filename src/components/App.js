
import React, { useEffect, useState } from 'react';
import "./App.scss";

import Hero from './Hero/Hero';
import FilterBox from './FilterBox/FilterBox';
import ResultCard from './ResultCard/ResultCard';
import Footer from './Footer/Footer';
import catalogueData from '../static/data';


export default function App() {

  const [catalogue, setCatalogue] = useState(catalogueData);
  const [filteredCatalogue, setFilteredCatalogue] = useState(catalogueData);

  const searchByTopic = value => {

    let data = catalogue.filter(obj => obj.GameTitle === value);
    return data;
  };

  const searchByTitle = e => {
    let value = e.target.value.toLowerCase();
    let filteredCatalogue = catalogue.filter(obj => obj.GameTitle.toLowerCase().includes(value))

    setFilteredCatalogue(filteredCatalogue)
  };

  return (

    <>
      <Hero searchByTitle={searchByTitle} />

      <section className='main'>
        <h2>9ijakids Games Result</h2>

        <div className='results-box'>
          <div className='left'>
            <FilterBox />
          </div>

          <div className='right'>
            {filteredCatalogue.length ? filteredCatalogue.map(obj => <ResultCard {...obj} />) : <h3>No Such Game Title Found</h3>}
          </div>
        </div>
      </section>
      <Footer />
    </>

  );
}

