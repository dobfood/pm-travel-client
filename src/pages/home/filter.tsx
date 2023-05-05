import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCategory, useProvince } from '~/hooks/swr';

const Filter = () => {
  const { province: provinces } = useProvince();
  const { category: categorys } = useCategory();
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const handleProvinceChange = (e: any) => {
    setSelectedProvince(e.target.value);
  };
  const handleCategoryChange = (e: any) => {
    setSelectedCategory(e.target.value);
  };
  if (!provinces) return null;
  if (!categorys) return null;

  return (
    <div className='relative pr-64 pl-64 bottom-7 pb-4 z-30 md:block hidden'>
      <div className='flex flex-col p-2 md:flex-row justify-center bg-blue-100 rounded-full'>
        <select
          id='province'
          className='w-4/12 p-2 mr-2 bg-white rounded-md'
          value={selectedProvince}
          onChange={handleProvinceChange}
        >
          <option value=''>Bạn muốn đi đâu? </option>
          {provinces.map((provinces: any) => (
            <option key={provinces._id} value={provinces._id}>
              {provinces.title}
            </option>
          ))}
        </select>
        <select
          id='province'
          className=' w-4/12 p-2 mr-2 bg-white rounded-md'
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value=''>Bạn muốn du lịch thế nào? </option>
          {categorys.map((category: any) => (
            <option key={category._id} value={category._id}>
              {category.title}
            </option>
          ))}
        </select>
        <button className='w-2/12 p-2 text-white bg-blue-500 rounded-full'>
          <Link
            to={{
              pathname: '/tour',
              search: `?category=${selectedCategory}&province=${selectedProvince}`
            }}
          >
            Tìm kiếm
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Filter;
