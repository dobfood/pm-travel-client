import React, { useState } from 'react';
import Tours from './tour';
import { AiOutlineSearch } from 'react-icons/ai';
import './filter.css';
type Props = {};

const Filter = (props: Props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [option1, setOption1] = useState('all');
  const [option2, setOption2] = useState('popular');
  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value);
  };
  const handleOption1 = (event: any) => {
    setOption1(event.target.value);
  };

  const handleOption2 = (event: any) => {
    setOption2(event.target.value);
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
          id='option1'
          className='"w-full py-2 px-4 rounded-md border-b-2 appearance-none focus:outline-none '
        >
          <option value=''>Chọn địa điểm</option>
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
        </select>
      </div>
      <div className='flex flex-col space-y-2'>
        <select
          id='option2'
          className='w-full py-2 px-4 rounded-md appearance-none focus:outline-none'
        >
          <option value=''>Chọn loại tour</option>
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
        </select>
      </div>
      <button className='bg-blue-600 text-white py-2 px-4 border-t-4 border-yellow-500 w-full'>
        Tìm
      </button>
    </div>
  );
};

export default Filter;
