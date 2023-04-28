import Loading from '../loading';
import Banner from './banner';
import CardType from './cardType';
import Destination from './destination';
import Filter from './filter';
import Header from './header';
import ScrollSnap from './scroll-snap';
import Top from './top';
import { useCategory, useProvince, useTop5Tour } from '~/hooks/swr';
function Home() {
  const { topTour: top5Tours } = useTop5Tour();
  const {category:categorys}=useCategory()
  const {province:provinces,isLoading} = useProvince()
  if(isLoading) return <Loading/>
  if (!top5Tours) return null;
  if (!categorys) return null;
  if (!provinces) return null;

  return (
    <div>
      {/* Hero section */}

      <Header />
      <Filter />
      <div>
        <div className='pr-32 pl-32'>
          <Banner  />
          <Destination provinces={provinces} />
          <ScrollSnap provinces={provinces}  />
          <CardType categorys={categorys} />
          <Top top5Tours={top5Tours} />
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
