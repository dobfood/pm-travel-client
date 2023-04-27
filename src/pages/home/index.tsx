import Banner from './banner';
import CardType from './cardType';
import Destination from './destination';
import Filter from './filter';
import Header from './header';
import './index.css';
import ScrollSnap from './scroll-snap';
import Top from './top';

function Home() {
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
