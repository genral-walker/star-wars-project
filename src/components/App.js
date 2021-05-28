
import React from "react";
import "./App.scss";

import Hero from './Hero/Hero';
import FilterBox from './FilterBox/FilterBox';
import ResultCard from './ResultCard/ResultCard';


export default function App() {

  return (
    <>
      <Hero />

      <section className='main'>
        <h2>9ijakids Games Result</h2>

        <FilterBox /> 

        <div className='results-box'>
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
        </div>

      </section>
    </>


  );
}

