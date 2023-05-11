import React from 'react';
import bottom from '~/assets/bottom.jpg';
import './index.css';
const BottomLead = () => {
  return (
    <div className='relative'>
      <div className='bg-image absolute top-0 left-0 w-full h-full'></div>
      <div className='flex flex-col justify-center h-screen'>
        <div className='container mx-auto px-4 py-16 lg:px-8 lg:py-24'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <div className='flex flex-col justify-center relative z-10'>
              <p className='text-5xl font-bold leading-normal text-center text-white mb-8 lg:text-4xl lg:text-left'>
                Tải app ngay trên điện thoại !
              </p>
              <p
                className='text-xl leading-8 text-center text-[#f3f4f6] lg:text-gray-200 lg:font-medium mb-12 lg:pr-24'
              >
                Có sẵn trên cửa hàng yêu thích của bạn. Bắt đầu trải nghiệm cao
                cấp của bạn Hiện nay.
              </p>
              <div className='flex flex-wrap items-center justify-center lg:justify-start'>
                <button className='btn-download mr-4 lg:mr-0 mb-5 lg:mb-1'>
                  CH Play
                </button>
                <button className='btn-download mr-4 lg:mr-0 mb-5 lg:mb-1'>App Store</button>
              </div>
            </div>
            <div className='hidden lg:block'>
              <img src={bottom} alt='App Screenshot' className='mx-auto' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomLead;
