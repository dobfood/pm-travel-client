import React from 'react';
import { Link } from 'react-router-dom';
type Props = { provinces: any };

const Destination = (props: Props) => {
  const vietnam =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAulBMVEX///8AAAAAAAAAAAAAAAD//xT//xb/9Df/8jf/8Bn96Ub72Rn60Br4yVb4wjr3vTr1rBr0pRrxm2fwlZXxlmjymyDvjo7xliDxkxrwjhruhITtf4DreXnseHbsdXbpamrpaFDpY2vpZVDoX1/nWlroW1DoXiDnV0LmUl7mVELnUVHmUSHjTU3hSUnlQ0PfQ0PcPDzZOTnjNx7jNB7iMDDhLijWMDDgKCjUKirfIijfICDWISHPICDeFyFRpPkZAAAABXRSTlMAESIzRJTdRHwAAADMSURBVBgZrcHBSsNAFIbR7975J4GmIIIg3Unpxvd/Hd24EhELFaRNnBlnkp3NRvAc+DeGsaaYPY6seJaNR67dmuhC5LcJBAosCsaidAh3Y+af+SYzcxAWRGXonf6bQuMIVw9MUxwT55hCpDIEvYDydrbCK91OVI6wrgeG7cvJYPugDFzAMVFl7UNKvlemkuFEvNHpshnGo7wBBBjNx92Bp9O90USEF5q0GxKHr0RjjoMzGxKkDTMHoSnRJKrEIiCIrDFz41rJhrGm8Gc/DBY3JYgAKsIAAAAASUVORK5CYII=';
  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <Link
          to={{
            pathname: '/tour',
            search: `?province=${props.provinces[5]._id}`
          }}
          className='relative p-2'
        >
          <img
            src={props.provinces[5].image}
            alt='imag4e'
            className='w-full h-64 shadow-lg rounded-xl border-2 hover:border-yellow-500 overflow-hidden hover:shadow-md'
          />
          <div className='absolute top-4 left-3 p-2'>
            <div className='flex items-center'>
              <h3 className='text-white text-xl font-bold '>
                {props.provinces[5].title}
              </h3>
              <img src={vietnam} alt='vietnam' className='ml-2' />
            </div>
          </div>
          <div className='absolute bottom-10 right-4 p-2 bg-orange-500 rounded-sm px-1 py-2'>
            <p className='text-xs'>Ưu đãi bắt đầu từ</p>
            <p className='text-md'> VNĐ 299.000</p>
          </div>
        </Link>
        <Link
          to={{
            pathname: '/tour',
            search: `?province=${props.provinces[0]._id}`
          }}
          className='relative p-2'
        >
          <img
            src={props.provinces[0].image}
            alt='imag2e'
            className='w-full h-64 shadow-lg rounded-xl border-2 hover:border-yellow-500 overflow-hidden hover:shadow-md'
          />
          <div className='absolute top-4 left-3 p-2'>
            <div className='flex items-center'>
              <h3 className='text-white text-xl font-bold'>
                {props.provinces[0].title}
              </h3>
              <img src={vietnam} alt='vietnam' className='ml-2' />
            </div>
          </div>
          <div className='absolute bottom-10 right-4 p-2 bg-orange-500 rounded-sm px-1 py-2'>
            <p className='text-xs'>Ưu đãi bắt đầu từ</p>
            <p className='text-md'> VNĐ 199.000</p>
          </div>
        </Link>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        <Link
          to={{
            pathname: '/tour',
            search: `?province=${props.provinces[9]._id}`
          }}
          className='relative p-2'
        >
          <img
            src={props.provinces[9].image}
            alt='ima5ge'
            className='w-full h-64 shadow-lg rounded-xl border-2 hover:border-yellow-500 overflow-hidden hover:shadow-md'
          />
          <div className='absolute top-4 left-3 p-2'>
            <div className='flex items-center'>
              <h3 className='text-white text-xl font-bold'>
                {props.provinces[9].title}
              </h3>
              <img src={vietnam} alt='vietnam' className='ml-2' />
            </div>
          </div>
          <div className='absolute bottom-10 right-4 p-2 bg-orange-500 rounded-sm px-1 py-2'>
            <p className='text-xs'>Ưu đãi bắt đầu từ</p>
            <p className='text-md'> VNĐ 399.000</p>
          </div>
        </Link>
        <Link
          to={{
            pathname: '/tour',
            search: `?province=${props.provinces[12]._id}`
          }}
          className='relative p-2'
        >
          <img
            src={props.provinces[12].image}
            alt='ima5ge'
            className='w-full h-64 shadow-lg rounded-xl border-2 hover:border-yellow-500 overflow-hidden hover:shadow-md'
          />
          <div className='absolute top-4 left-3 p-2'>
            <div className='flex items-center'>
              <h3 className='text-white text-xl font-bold'>
                {props.provinces[12].title}
              </h3>
              <img src={vietnam} alt='vietnam' className='ml-2' />
            </div>
          </div>
          <div className='absolute bottom-10 right-4 p-2 bg-orange-500 rounded-sm px-1 py-2'>
            <p className='text-xs'>Ưu đãi bắt đầu từ</p>
            <p className='text-md'> VNĐ 159.000</p>
          </div>
        </Link>
        <Link
          to={{
            pathname: '/tour',
            search: `?province=${props.provinces[7]._id}`
          }}
          className='relative p-2'
        >
          <img
            src={props.provinces[7].image}
            alt='ima5ge'
            className='w-full h-64 shadow-lg rounded-xl border-2 hover:border-yellow-500 overflow-hidden hover:shadow-md'
          />
          <div className='absolute top-4 left-3 p-2'>
            <div className='flex items-center'>
              <h3 className='text-white text-xl font-bold'>
                {props.provinces[7].title}
              </h3>
              <img src={vietnam} alt='vietnam' className='ml-2' />
            </div>
          </div>
          <div className='absolute bottom-10 right-4 p-2 bg-orange-500 rounded-sm px-1 py-2'>
            <p className='text-xs'>Ưu đãi bắt đầu từ</p>
            <p className='text-md'> VNĐ 299.000</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Destination;
