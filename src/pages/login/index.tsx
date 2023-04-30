import React, { useState } from 'react';
import image from '~/assets/image.jpg';
import { BsEyeSlash, BsEye } from 'react-icons/bs';
import login from '~/assets/login.jpg';
import { Link } from 'react-router-dom';

type Props = {};

const Login = (props: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <section className='bg-white min-h-screen flex items-center justify-center '
    style={{
      backgroundImage: `url(${login})`
    }}
    >
      <div
        className='bg-white flex rounded-2xl shadow-lg
       max-w-3xl p-5 ' 
      >
        <div className='md:w-1/2 px-16'>
          <h2
            className='font-bold text-2xl text-[#002D74]
          '
          >
            Đăng nhập
          </h2>
          <p className='text-sm mt-4 text-[#002D74'>
            Nếu bạn đã sẵn sàng hãy đăng nhập
          </p>
          <form action='' className='flex flex-col gap-4'>
            <input
              className='p-2 mt-8 rounded-xl border'
              type='text'
              name='email'
              placeholder='Email'
            />
            <div className='relative'>
              <input
                className='p-2 rounded-xl border w-full'
                type={showPassword ? 'text' : 'password'}
                name='password'
                placeholder='Mật khẩu'
              />
              <div onClick={togglePassword}>
                {showPassword ? (
                  <BsEye className='absolute top-1/2 right-3 -translate-y-1/2' />
                ) : (
                  <BsEyeSlash className='absolute top-1/2 right-3 -translate-y-1/2' />
                )}
              </div>
            </div>
            <button className='bg-[#002D74] rounded-xl text-white py-2 hover:scale-110 duration-300'>
              Đăng nhập
            </button>
          </form>
          <div className='mt-10 grid grid-cols-3 items-center text-gray-100'>
            <hr className='border-gray-400' />
            <p className='text-center text-sm'>Hoặc</p>
            <hr className='border-gray-400' />
          </div>
          <div className='mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]'>
            <a href='4'>Quên mật khẩu của bạn ?</a>
          </div>

          <div className='mt-3 text-xs flex justify-between items-center text-[#002D74]'>
            <p>Không có tài khoảng ? </p>
            <button className='py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300'>
             <Link to='/register'> Đăng ký</Link>
            </button>
          </div>
        </div>
        <div className='w-1/2 p-5 rounded-xl'>
          <img className='sm:block hidden rounded-2xl' src={login} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Login;
