import React, { useEffect, useState } from 'react';
import contact from '../../assets/contact.png';
import './index.css';
import Loading from '../loading';
const Contact = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // simulate data loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className='card-holder'>
      <div className='card bg-gold'>
        <div className='flex flex-col md:flex-row md:min-h-screen'>
          <div className='md:w-1/2 flex items-center justify-center'>
            <form className='w-full max-w-lg'>
              <h2 className='text-5xl font-bold mb-8 text-[#ffffff]'>
                Liên hệ với chúng tôi
              </h2>

              <div className='flex flex-wrap -mx-3 mb-6'>
                <div className='w-full px-3 mb-6 md:mb-0'>
                  <label
                    className='block uppercase tracking-wide text-xs font-bold mb-2'
                    for='name'
                  >
                    Họ và tên
                  </label>
                  <input
                    className='appearance-none block w-full bg-[#ffffff] text-[#1db8e7] border border-gray-200 rounded py-3 px-4 mb-3 leading-tight'
                    id='name'
                    type='text'
                    placeholder='Nhập họ và tên của bạn'
                  />
                </div>
              </div>
              <div className='flex flex-wrap -mx-3 mb-6'>
                <div className='w-full px-3'>
                  <label
                    className='block uppercase tracking-wide  text-xs font-bold mb-2'
                    for='email'
                  >
                    Email
                  </label>
                  <input
                    className='appearance-none block w-full bg-[#ffffff] text-[#1db8e7] border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    id='email'
                    type='email'
                    placeholder='Nhập địa chỉ email của bạn'
                  />
                </div>
              </div>
              <div className='flex flex-wrap -mx-3 mb-6'>
                <div className='w-full px-3'>
                  <label
                    className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                    for='message'
                  >
                    Nội dung tin nhắn
                  </label>
                  <textarea
                    className='appearance-none block w-full  bg-[#ffffff] text-[#1db8e7] border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none'
                    id='message'
                    placeholder='Nhập nội dung tin nhắn của bạn'
                  ></textarea>
                </div>
              </div>
              <div className='flex items-end justify-end'>
                <button
                  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md'
                  type='button'
                >
                  Gửi ngay
                </button>
              </div>
            </form>
          </div>
          <div className='md:w-1/2 flex items-center justify-center'>
            <img
              src={contact}
              className='sm:block lg:block md:block hidden h-full'
              alt='Hình ảnh liên hệ'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
