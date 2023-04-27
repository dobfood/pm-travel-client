import React, { useState } from 'react';
import { BsEyeSlash } from 'react-icons/bs';
type Props = {};

const Register = (props: Props) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleInputChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
      <div className='flex gap-4'>
        <input
          className='p-2 mt-8 rounded-xl border'
          type='text'
          name='firstName'
          placeholder='Tên'
          value={formData.firstName}
          onChange={handleInputChange}
          required
        />
        <input
          className='p-2 mt-8 rounded-xl border'
          type='text'
          name='lastName'
          placeholder='Họ'
          value={formData.lastName}
          onChange={handleInputChange}
          required
        />
      </div>
      <input
        className='p-2 mt-8 rounded-xl border'
        type='email'
        name='email'
        placeholder='Email'
        value={formData.email}
        onChange={handleInputChange}
        required
      />
      <div className='relative'>
        <input
          className='p-2 rounded-xl border w-full'
          type='password'
          name='password'
          placeholder='Mật khẩu'
          value={formData.password}
          onChange={handleInputChange}
          minLength={6}
          required
        />
        <BsEyeSlash className='absolute top-1/2 right-3 -translate-y-1/2' />
      </div>
      <button
        type='submit'
        className='bg-[#002D74] rounded-xl text-white py-2 hover:scale-110 duration-300'
      >
        Đăng ký
      </button>
    </form>
  );
};

export default Register;
