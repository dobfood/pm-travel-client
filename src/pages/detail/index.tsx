import React from 'react';
import { useParams } from 'react-router-dom';
import { RiMapPinLine } from 'react-icons/ri';
import { GrMoney } from 'react-icons/gr';
import { BsFillPeopleFill, BsPeople, BsStar } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-scroll';
import './index.css';
import SliderImage from './slide';
import Form from './form';
import { useTourDetail } from '~/hooks/swr';
import Loading from '../loading';
type Props = {};

const Detail = (props: Props) => {
  const { id } = useParams();
  const { tourDetail: tour,isLoading,error } = useTourDetail(id);
  if(isLoading) return <Loading/>
  if (!tour) return null;
  return (
    <section className='pt-4'>
      <div className='relative'>
        <img
          src={tour.thumbnail.url}
          alt={tour.thumbnail.title}
          className='w-full h-96 object-cover'
        />
        <div className='absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center bg-gray-900 bg-opacity-60 text-white'>
          <div className='pl-12'>
            <h2 className='text-2xl font-bold mb-2'>{tour.title}</h2>
            <div className='flex items-center'>
              <RiMapPinLine size={24} className='mr-4' />
              <p className='mr-8'>{tour.destination}</p>
              <BsFillPeopleFill size={24} className='mr-4' />
              <p className='mr-8'> {tour.numberDay}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-8'>
        <div className='col-span-1 md:col-span-3'></div>

        <div className='col-span-1 md:col-span-2'>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4'>
            <div className='col-span-1 sm:col-span-1'>
              <div className='flex items-center'>
                <RiMapPinLine size={40} />
                <div>
                  <h2 className='ml-2 text-lg font-bold'>Tour</h2>
                  <p className='ml-2 text-lg '>{tour.category}</p>
                </div>
              </div>
            </div>
            <div className='col-span-1 sm:col-span-1'>
              <div className='flex items-center'>
                <BsStar size={40} />
                <div>
                  <h2 className='ml-2 text-lg font-bold'>Đánh giá</h2>
                  <p className='ml-2 text-lg '>{tour.ratting}</p>
                </div>
              </div>
            </div>
            <div className='col-span-1 sm:col-span-1'>
              <div className='flex items-center'>
                <BsPeople size={40} />
                <div>
                  <h2 className='ml-2 text-lg font-bold'>Số lượng</h2>
                  <p className='ml-2 text-lg '>{tour.maxNumber}</p>
                </div>
              </div>
            </div>
          </div>
          <SliderImage tours={tour} />
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-8'>
            <div className='col-span-3 md:col-span-3'></div>
            <div className='col-span-1 md:col-span-1'>
              <Link
                to='description'
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                className='scroll-button'
              >
                Mô tả
              </Link>
            </div>
            <Link
              to='program'
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className='scroll-button'
            >
              Lich trình
            </Link>
          </div>

          <div id='description' className='section'>
            <div className='container'>
              <h2 className='section-title'>Mô tả</h2>
              <hr className='section-divider' />
              <p className='section-content'>{tour.content}</p>
            </div>
          </div>

          <div id='program' className='section'>
            <div className='container'>
              <h2 className='section-title'>Lịch trình</h2>
              <hr className='section-divider' />
              <p className='section-content'>
                This is the program of the tour. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nullam blandit purus vel urna
                egestas ultrices. In eu lorem euismod, tincidunt lorem vel,
                ultricies odio. Donec ullamcorper turpis et sapien aliquet
                luctus.
              </p>
            </div>
          </div>
        </div>
        <div className='col-span-1 md:col-span-1'>
          <Form tours={tour} />
        </div>
      </div>
    </section>
  );
};

export default Detail;
