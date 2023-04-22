import React from 'react';

type Props = {};

const Filter = (props: Props) => {
  return (
    <div className='relative pr-64 pl-64 bottom-7 pb-4'>
    <div className='flex justify-center p-2 bg-blue-100 rounded-full'>
      <select className='w-4/12 p-2 mr-2 bg-white rounded-md'>
        <option value=''>Loại tour</option>
        <option value='1'>Tour trong nước</option>
        <option value='2'>Tour nước ngoài</option>
      </select>
      <select className='w-4/12 p-2 mr-2 bg-white rounded-md'>
        <option value=''>Địa điểm</option>
        <option value='1'>Hà Nội</option>
        <option value='2'>Đà Nẵng</option>
        <option value='3'>Hồ Chí Minh</option>
      </select>
      <button className='w-2/12 p-2 text-white bg-blue-500 rounded-full'>
        Tìm kiếm
      </button>
    </div>
  </div>
  );
};

export default Filter;
