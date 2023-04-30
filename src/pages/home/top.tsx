import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
type Props = { top5Tours: any };

const Top = (props: Props) => {
  return (
    <div className='container mx-auto py-8'>
      <h2 className='text-2xl font-bold mb-2'>
        Top 5 tour được người dùng chú ý
      </h2>
      <p className='text-md  mb-2'>Các điểm này có nhiều điều chờ đón bạn</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-4 gap-4 '>
        {props.top5Tours.map((item: any) => (
          <Link
            to={`/tour/${item._id}`}
            key={item._id}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <div className='bg-white shadow-lg h-full rounded-lg overflow-hidden hover:-translate-y-3 hover:scale-105 transition duration-200'>
              <img
                className='w-full h-32 object-cover'
                src={item.thumbnail.url}
                alt={item.name}
              />
              <div className='p-4'>
                <h3 className='font-bold text-xs mb-2'>{item.title}</h3>
                <div className='flex items-center justify-between'>
                  <span className=' flex  text-xs'>
                    {item.totalViews} lượt xem
                  </span>
                  <div className='flex items-center'>
                    <span className='text-xs font-bold'>
                      {item.destination}
                    </span>
                  </div>
                </div>
                <div className='flex items-center justify-between'>
                  <span className='font-medium text-lg text-gray-700 hover:text-blue-600'>
                    {item.price.toLocaleString('vi-VN', {
                      currency: 'VND'
                    })}
                    {''}VNĐ
                  </span>
                  <div className='flex items-center'>
                    <span className='text-gray-500 text-xs'></span>
                  </div>
                </div>
                <div>
                  <div className='flex items-center justify-between'>
                    <span className='flex items-start'>Đánh giá :</span>
                    <div className='flex items-center font-bold text-md'>
                      {[...Array(item.ratting)].map((star, index) => (
                        <FaStar key={index} className='text-yellow-400 pt-1' />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Top;
