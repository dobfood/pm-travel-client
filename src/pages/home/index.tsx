import React from 'react';
import thumbnail from '~/assets/thumbnail.jpg';
import { Link } from 'react-router-dom';

import './index.css';
import Header from './header';
import Banner from './banner';
import Filter from './filter';
import Destination from './destination';
import ScrollSnap from './scroll-snap';
import CardType from './cardType';
import Top from './top';
type Props = {};

function Home({}: Props) {
  return (
    <div>
      {/* Hero section */}

      <Header />
      <Filter />
      <div>
        <div className='pr-32 pl-32'>
          <Banner />
          <Destination />
          <ScrollSnap />
          <CardType />
          <Top />
        </div>
      </div>
      {/* Tours section */}
      {/* ... */}

      {/* Features section */}
      {/* ... */}

      {/* Testimonials section */}
      {/* ... */}
    </div>
  );
}

export default Home;
