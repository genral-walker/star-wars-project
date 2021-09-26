
import React, { useEffect, useState } from 'react';
import "./App.scss";
import logo from '../assets/images/logo.png';

import HeadNav from './HeadNav/HeadNav';
import Footer from './Footer/Footer';


export default function App() {


  return (

    <>
      <HeadNav />

      <main className='main'>

        {/* <div className='logo'>
          <img src={logo} alt='Star Wars Logo'/>
        </div> */}

        <div className='open-crawl'>
          <marquee width="100%" direction="up" scrollamount="2">
            This is a sample scrolling text that has scrolls in the upper direction.
          </marquee>
        </div>

        <section className='list'>

          <div className='select'>
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

           <tr>
             <td>Sky Walker</td>
             <td>Male</td>
             <td>17cmn</td>
           </tr>

           <tr>
             <td>Luke Walker</td>
             <td>FeMale</td>
             <td>17cmn</td>
           </tr>
          </table>

        </section>
      </main>

      <Footer />
    </>

  );
}

