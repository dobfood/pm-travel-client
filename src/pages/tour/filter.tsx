import React, { useEffect, useState } from 'react';
import Tours from './tour';
import { AiOutlineSearch } from 'react-icons/ai';
import './filter.css';
import { Link, useLocation } from 'react-router-dom';
import { IoCall } from 'react-icons/io5';
import qs from 'qs';
type Props = {
  categorys: any;
  provinces: any;
  onFilter: (
    selectedCategory: string,
    selectedProvince: string,
    search: string
  ) => void;
};

const Filter = (props: Props) => {
  const location = useLocation();
  const queryParams = qs.parse(location?.search, { ignoreQueryPrefix: true });
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('');
  const [search, setSearch] = useState('');
  const handleCategoryChange = (event: any) => {
    setSelectedCategory(event.target.value);
  };
  const handleProvinceChange = (event: any) => {
    setSelectedProvince(event.target.value);
  };
  const handleSearchChange = (event: any) => {
    setSearch(event.target.value);
  };
  const handleFilter = (e: any) => {
    if (e.target.value == 'reset') {
      setSelectedCategory('');
      setSelectedProvince('');
      setSearch('');
    }
    {
      e.target.value == 'reset'
        ? props.onFilter('', '', '')
        : props.onFilter(selectedCategory, selectedProvince, search);
    }
  };
  useEffect(() => {
    setSelectedCategory(queryParams.category?.toString() || '');
    setSelectedProvince(queryParams.province?.toString() || '');
    props.onFilter(
      queryParams.category?.toString() || '',
      queryParams.province?.toString() || '',
      search
    );
  }, [queryParams.category, queryParams.province]);

  return (
    <div className='relative border-r-2 border-[#e1e1e1] h-3/4 pr-2'>
      <div className=' border-[#f3f4f6]  rounded-md  mt-5'>
        <div className='flex flex-col space-y-2'>
          <div className='relative mb-8  text-center'>
            <input
              type='text'
              value={search}
              className='py-2 pl-10 pr-4 rounded-md border-b-2 text-start w-80% h-12'
              onChange={handleSearchChange}
              placeholder='Bạn muốn đi đâu ?'
            />
            <div className='absolute top-2 left-4'>
              <AiOutlineSearch size={30} />
            </div>
          </div>
        </div>
        <div className='flex flex-col space-y-2 mb-4'>
          <select
            id='province'
            className='w-80% py-2 px-4 rounded-md border-b-2 appearance-none focus:outline-none hover:bg-gray-300'
            value={selectedProvince}
            onChange={handleProvinceChange}
          >
            <option value=''>Chọn điểm đến ?</option>
            {props.provinces.map((provinces: any) => (
              <option key={provinces._id} value={provinces._id}>
                {provinces.title}
              </option>
            ))}
          </select>
        </div>
        <div className='flex flex-col space-y-2 mb-4'>
          <select
            id='province'
            className='w-80% py-2 px-4 rounded-md border-b-2 appearance-none focus:outline-none hover:bg-gray-300'
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value=''>Chọn loại du lịch ?</option>
            {props.categorys.map((category: any) => (
              <option key={category._id} value={category._id}>
                {category.title}
              </option>
            ))}
          </select>
        </div>
        <div className='pl-2 pr-2 text-end text-md'>
          <button
            onClick={handleFilter}
            value='reset'
            className='border-2 rounded-md border-[#f3f4f6] text-black py-2 px-4 w-auto mr-4 hover:bg-gray-300'
          >
            Hoàn tác
          </button>
          <button
            onClick={handleFilter}
            className='border-2 rounded-md border-[#f3f4f6]  text-black py-2 px-4 w-auto hover:bg-gray-300'
          >
            Tìm
          </button>
        </div>
      </div>
      <div className='bg-white rounded-md mb-4'>
        <div className='flex flex-col space-y-2'>
          <div className='rounded-md w-full h-6 font-bold p-7 mb-7'>
            <p className='font-bold text-2xl'>Loại tour du lịch</p>
          </div>

          {props.categorys.map((category: any) => (
            <div
              key={category._id}
              className='flex items-start justify-start py-2 pb-4 mb-2'
            >
              <button className=' text-start text-md font-mono hover:text-blue-500 border-[#f3f4f6] w-full border-b-2 p-2'>
                <Link
                  to={{
                    pathname: '/tour',
                    search: `?category=${category._id}`
                  }}
                >
                  + {category.title}({category.total})
                </Link>
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[url('https://a6e8z9v6.stackpathcdn.com/traveltour/yachttour/wp-content/uploads/2018/06/page-title.jpg')] text-[##c9e2ff] pt-10 pb-2.5 pr-8.75 pl-8.75 relative bg-center bg-cover rounded-md">
        <p className='text-white text-2xl font-bold mb-8 pl-5'>
          Bạn có câu hỏi?
        </p>
        <div className='text-[#c9e2ff] pl-5'>
          <p className='mb-4'>
            Đừng ngần ngại gọi cho chúng tôi. Chúng tôi là một nhóm chuyên gia
            và chúng tôi rất vui được nói chuyện với bạn.
          </p>
          <p className='flex items-center mb-4 pl-3 text-white'>
            <IoCall className='mr-2' size={20} color='gray' />
            <span className='font-semibold text-lg'>(+84).999.999.988</span>
          </p>
          <p className='text-sx mb-8 pl-3 text-white'>
            pm-travelhelp@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Filter;
