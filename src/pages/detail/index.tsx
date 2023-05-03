import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { RiMapPinLine } from 'react-icons/ri';
import { GrMoney } from 'react-icons/gr';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import {
  BsFillPeopleFill,
  BsPeople,
  BsStar,
  BsChevronCompactDown,
  BsChevronCompactUp
} from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-scroll';
import './index.css';
import SliderImage from './slide';
import Form from './form';
import classNames from 'classnames';
import { useTourDetail } from '~/hooks/swr';
import Loading from '../loading';
type Props = {};

const Detail = (props: Props) => {
  const { id } = useParams();
  const [expandedDay, setExpandedDay] = useState(null);
  const handleDayClick = (day: any) => {
    if (expandedDay === day) {
      setExpandedDay(null);
    } else {
      setExpandedDay(day);
    }
  };
  const { tourDetail: tour = [], isLoading, error } = useTourDetail(id);
  if (isLoading) return <Loading />;
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
              <p className='mr-8'>{tour.destination?.title}</p>
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
              <div className='flex items-center p-4 rounded-lg shadow-md hover:shadow-lg bg-white'>
                <RiMapPinLine size={40} className='text-primary-500' />
                <div className='ml-4'>
                  <h2 className='text-lg font-bold text-gray-900'>Tour</h2>
                  <p className='text-base text-gray-700'>{tour.idCategory?.title}</p>
                </div>
              </div>
            </div>
            <div className='col-span-1 sm:col-span-1'>
              <div className='flex items-center p-4 rounded-lg shadow-md hover:shadow-lg bg-white'>
                <BsStar size={40} className='text-yellow-500' />
                <div className='ml-4'>
                  <h2 className='text-lg font-bold text-gray-900'>Đánh giá</h2>
                  <p className='text-base text-gray-700'>{tour.ratting}</p>
                </div>
              </div>
            </div>
            <div className='col-span-1 sm:col-span-1'>
              <div className='flex items-center p-4 rounded-lg shadow-md hover:shadow-lg bg-white'>
                <BsPeople size={40} className='text-green-500' />
                <div className='ml-4'>
                  <h2 className='text-lg font-bold text-gray-900'>Số lượng</h2>
                  <p className='text-base text-gray-700'>{tour.maxNumber}</p>
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
              <p className='section-content'>{tour.description}</p>
            </div>
          </div>
          <div id='program' className='section'>
            <div className='container'>
              <h2 className='section-title'>Lịch trình</h2>
              <hr className='section-divider' />
              <div className='space-y-8'>
                <TransitionGroup>
                  {tour.schedule.map((day: ScheduleItem) => (
                    <CSSTransition
                      key={day._id}
                      classNames='fade'
                      timeout={300}
                    >
                      <div className='space-y-4'>
                        <div
                          className='flex items-center justify-between cursor-pointer'
                          onClick={() => handleDayClick(day.day)}
                        >
                          <h3
                            className={classNames(
                              'text-lg font-medium',
                              expandedDay === day.day
                                ? 'text-primary-500'
                                : 'text-gray-900'
                            )}
                          >
                            Ngày {day.day}
                          </h3>
                          {expandedDay === day.day ? (
                            <BsChevronCompactUp className='h-5 w-5 text-primary-500' />
                          ) : (
                            <BsChevronCompactDown className='h-5 w-5 text-gray-400' />
                          )}
                        </div>
                        {expandedDay === day.day && (
                          <p className='text-gray-700'>{day.content}</p>
                        )}
                      </div>
                    </CSSTransition>
                  ))}
                </TransitionGroup>
              </div>
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
