import React, { useEffect, useState } from 'react';
import contact from '../../assets/contact.png';
import './index.css';
import Loading from '../loading';
import Form from './form';
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
            <Form />
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
