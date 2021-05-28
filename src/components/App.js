
import React from "react";
import "./App.scss";

import Hero from './Hero/Hero';
import FilterBox from './FilterBox/FilterBox';
import ResultCard from './ResultCard/ResultCard';
import Footer from './Footer/Footer';


export default function App() {

  return (
    <>
      <Hero />

      <section className='main'>
        <h2>9ijakids Games Result</h2>

        <div className='results-box'>
          <div className='left'>
            <FilterBox />
          </div>

          <div className='right'>
            <ResultCard />
            <ResultCard />
            <ResultCard />
            <ResultCard />
            <ResultCard />
            <ResultCard />
          </div>
        </div>
      </section>
      <Footer/>
    </>

  );
}

