import React from 'react';
import { Link } from 'react-router-dom';
import thumbnail from '~/assets/thumbnail.jpg';
type Props = {};

const Destination = (props: Props) => {
  const vietnam =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAulBMVEX///8AAAAAAAAAAAAAAAD//xT//xb/9Df/8jf/8Bn96Ub72Rn60Br4yVb4wjr3vTr1rBr0pRrxm2fwlZXxlmjymyDvjo7xliDxkxrwjhruhITtf4DreXnseHbsdXbpamrpaFDpY2vpZVDoX1/nWlroW1DoXiDnV0LmUl7mVELnUVHmUSHjTU3hSUnlQ0PfQ0PcPDzZOTnjNx7jNB7iMDDhLijWMDDgKCjUKirfIijfICDWISHPICDeFyFRpPkZAAAABXRSTlMAESIzRJTdRHwAAADMSURBVBgZrcHBSsNAFIbR7975J4GmIIIg3Unpxvd/Hd24EhELFaRNnBlnkp3NRvAc+DeGsaaYPY6seJaNR67dmuhC5LcJBAosCsaidAh3Y+af+SYzcxAWRGXonf6bQuMIVw9MUxwT55hCpDIEvYDydrbCK91OVI6wrgeG7cvJYPugDFzAMVFl7UNKvlemkuFEvNHpshnGo7wBBBjNx92Bp9O90USEF5q0GxKHr0RjjoMzGxKkDTMHoSnRJKrEIiCIrDFz41rJhrGm8Gc/DBY3JYgAKsIAAAAASUVORK5CYII=';
  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <Link to='/tour' className='relative p-2'>
          <img src={thumbnail} alt='imag4e' className='w-full h-64' />
          <div className='absolute top-4 left-3 p-2'>
            <div className='flex items-center'>
              <h3 className='text-white text-xl font-bold'>Hội an</h3>
              <img src={vietnam} alt='vietnam' className='ml-2' />
            </div>
          </div>
          <div className='absolute bottom-10 right-4 p-2 bg-orange-500 rounded-sm px-1 py-2'>
            <p className='text-xs'>Ưu đãi bắt đầu từ</p>
            <p className='text-md'> VNĐ 299.000</p>
          </div>
        </Link>
        <div className='relative p-2'>
          <img
            src='https://cf.bstatic.com/xdata/images/city/600x600/688866.jpg?k=fc9d2cb9fe2f6d1160e10542cd2b83f5a8008401d33e8750ee3c2691cf4d4f7e&o='
            alt='imag2e'
            className='w-full h-64'
          />
          <div className='absolute top-4 left-3 p-2'>
            <div className='flex items-center'>
              <h3 className='text-white text-xl font-bold'>Đà Nẵng</h3>
              <img src={vietnam} alt='vietnam' className='ml-2' />
            </div>
          </div>
          <div className='absolute bottom-10 right-4 p-2 bg-orange-500 rounded-sm px-1 py-2'>
            <p className='text-xs'>Ưu đãi bắt đầu từ</p>
            <p className='text-md'> VNĐ 199.000</p>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        <div className='relative p-2'>
          <img
            src='https://q-xx.bstatic.com/xdata/images/city/170x136/688853.jpg?k=f6427c8fccdf777e4bbc75fcd245e7c66204280181bea23350388c76c57348d1&o='
            alt='ima5ge'
            className='w-full h-64'
          />
          <div className='absolute top-4 left-3 p-2'>
            <div className='flex items-center'>
              <h3 className='text-white text-xl font-bold'>Hồ chí minh</h3>
              <img src={vietnam} alt='vietnam' className='ml-2' />
            </div>
          </div>
          <div className='absolute bottom-10 right-4 p-2 bg-orange-500 rounded-sm px-1 py-2'>
            <p className='text-xs'>Ưu đãi bắt đầu từ</p>
            <p className='text-md'> VNĐ 399.000</p>
          </div>
        </div>
        <div className='relative p-2'>
          <img
            src='https://r-xx.bstatic.com/xdata/images/city/170x136/688907.jpg?k=8a219233969467d9f7ff828918cce2a53b4db6f1da1039d27222441ffb97c409&o='
            alt='ima5ge'
            className='w-full h-64'
          />
          <div className='absolute top-4 left-3 p-2'>
            <div className='flex items-center'>
              <h3 className='text-white text-xl font-bold'>Nha trang</h3>
              <img src={vietnam} alt='vietnam' className='ml-2' />
            </div>
          </div>
          <div className='absolute bottom-10 right-4 p-2 bg-orange-500 rounded-sm px-1 py-2'>
            <p className='text-xs'>Ưu đãi bắt đầu từ</p>
            <p className='text-md'> VNĐ 159.000</p>
          </div>
        </div>
        <div className='relative p-2'>
          <img
            src='https://r-xx.bstatic.com/xdata/images/city/170x136/688893.jpg?k=d32ef7ff94e5d02b90908214fb2476185b62339549a1bd7544612bdac51fda31&o='
            alt='ima5ge'
            className='w-full h-64'
          />
          <div className='absolute top-4 left-3 p-2'>
            <div className='flex items-center'>
              <h3 className='text-white text-xl font-bold'>Hà nội</h3>
              <img src={vietnam} alt='vietnam' className='ml-2' />
            </div>
          </div>
          <div className='absolute bottom-10 right-4 p-2 bg-orange-500 rounded-sm px-1 py-2'>
            <p className='text-xs'>Ưu đãi bắt đầu từ</p>
            <p className='text-md'> VNĐ 299.000</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;
