
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import "./App.scss";
import logo from '../assets/images/logo.png';

import HeadNav from './HeadNav/HeadNav';
import Footer from './Footer/Footer';
import Crawl from './Crawl/Crawl';
import TableList from './TableList/TableList';


export default function App() {

  const movie = useSelector(state => state.movie.movieSelected)

  return (

    <>
      <HeadNav />

      <main className='main'>

        {
          movie ?
            <>
              <Crawl />
              <TableList />
            </> :
            <div className='logo'>
              <img src={logo} alt='Star Wars Logo' />
            </div>
        }


      </main>

      <Footer />
    </>

  );
}

