import React, { useState } from 'react';
import Tours from './tour';
import { AiOutlineSearch } from 'react-icons/ai';
import './filter.css';
type Props = {
  categorys: any;
  provinces: any;
  onFilter: (selectedCategory: string, selectedProvince: string) => void;
};

const Filter = (props: Props) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('');
  
  const handleCategoryChange = (event: any) => {
    setSelectedCategory(event.target.value);
  };

  const handleProvinceChange = (event: any) => {
    setSelectedProvince(event.target.value);
  };

  const handleFilter = () => {
    props.onFilter(selectedCategory, selectedProvince);
  };
  return (
    <div className='bg-white border border-yellow-500 rounded-md border-4 mt-5'>
      <div className='flex flex-col space-y-2'>
        <div className='relative'>
          <input
            type='text'
            id='search'
            className='py-2 pl-10 pr-4 rounded-md border-b-2 w-full h-12'
            placeholder='Bạn muốn đi đâu ?'
          />
          <div className='absolute top-2 left-2'>
            <AiOutlineSearch size={30} />
          </div>
        </div>
      </div>
      <div className='flex flex-col space-y-2'>
        <select
          id='province'
          className='w-full py-2 px-4 rounded-md border-b-2 appearance-none focus:outline-none'
          value={selectedProvince}
          onChange={handleProvinceChange}
        >
          <option value=''>Chọn điểm đến </option>
          {props.provinces.map((provinces: any) => (
            <option key={provinces._id} value={provinces._id}>
              {provinces.title}
            </option>
          ))}
        </select>
      </div>
      <div className='flex flex-col space-y-2'>
        <select
          id='category'
          className='w-full py-2 px-4 rounded-md border-b-2 appearance-none focus:outline-none'
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value=''>Chọn loại du lịch </option>
          {props.categorys.map((categorys: any) => (
            <option key={categorys._id} value={categorys._id}>
              {categorys.title}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={handleFilter}
        className='bg-blue-600 text-white py-2 px-4 border-t-4 border-yellow-500 w-full'
      >
        Tìm
      </button>
    </div>
  );
};

export default Filter;
