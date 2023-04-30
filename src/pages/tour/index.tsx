import React, { useState } from 'react';
import Tours from './tour';
import Filter from './filter';
import banner from '~/assets/banner.jpg'
import { useTourList, useCategory, useProvince } from '~/hooks/swr';
import Loading from '../loading';
type Props = {};

const Tour = (props: Props) => {
  const { tourList: tours,isLoading } = useTourList();
  const { category: categorys } = useCategory();
  const { province: provinces } = useProvince();
  const [filteredTours, setFilteredTours] = useState(tours);
  if(isLoading) return <Loading/>
  if (!tours) return null;
  if (!categorys) return null;
  if (!provinces) return null;
  if (!filteredTours) return null;
  const handleFilter = (category: string, province: string) => {
    let filtered = tours;
    if (category) {
      filtered = filtered.filter((tour) => tour.category === category);
    }
    if (province) {
      filtered = filtered.filter((tour) => tour.destination === province);
    }
    setFilteredTours(filtered);
  };

  return (
    <>
      <div className='relative'>
        <img
          src={banner}
          alt='your-image-description'
          className='w-screen h-48 mb-2 opacity-80'
        />
        <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
          <h1 className='text-2xl text-white text-center'>
            Hãy lựa chọn những chuyến đi phù hợp với bạn
          </h1>
        </div>
      </div>

      <div className='pr-32 pl-32'>
        <div className='flex flex-col space-y-2'>
          <h2 className='text-2xl font-bold mt-5'>Địa điểm tham quan</h2>
          <p className='font-bold pb-4'>{filteredTours.length} hoạt động</p>
        </div>
        <div className='grid grid-cols-3 gap-8 lg:grid-cols-1 md:grid-cols-3'>
          <div className=' col-start-1 col-span-1'>
            <Filter
              categorys={categorys}
              provinces={provinces}
              onFilter={handleFilter}
            />
          </div>
          <div className=' col-start-2 col-span-2'>
            <Tours tours={filteredTours} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tour;
