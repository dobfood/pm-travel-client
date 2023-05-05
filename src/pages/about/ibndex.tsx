import React, { useEffect, useState } from 'react';
import about from '~/assets/about.jpg';
import background from '~/assets/abouUs.png';
import Loading from '../loading';
const AboutUs = () => {
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
    <div className='flex flex-col justify-center items-center py-8 bg-white w-full min-h-screen'>
      <div className='max-w-5xl mx-auto px-6'>
        <h1 className='text-5xl font-bold text-center text-cyan-600 mb-8'>
          PM-TRAVEL
        </h1>
        <h2 className='text-3xl text-center mb-8'>Tận hưởng, của riêng mình</h2>
        <div className='flex flex-col md:flex-row md:items-center justify-center'>
          <img
            src={about}
            alt='about us'
            className='md:w-1/2 rounded-lg shadow-xl mb-4 md:mb-0'
          />
          <div className='md:w-1/2 md:pl-8'>
            <p className='text-lg text-gray-700 mb-4'>
              PM-Travel là siêu ứng dụng du lịch và tiện ích sống hàng đầu Đông
              Nam Á, chúng tôi giúp bạn khám phá và mua đa dạng các loại sản
              phẩm du lịch, dịch vụ địa phương và dịch vụ tài chính. Danh mục
              sản phẩm toàn diện của PM-Travel bao gồm các dịch vụ đặt phương
              tiện đi lại như vé máy bay, xe buýt, tàu hỏa, cho thuê ô tô, đưa
              đón sân bay, cũng như kho khách sạn chỗ ở lớn nhất Đông Nam Á.
              Không chỉ vậy, để giúp bạn thực hiện nhiều ước vọng về phong cách
              sống của mình, chúng tôi còn hoàn thiện các dịch vụ của mình với
              một loạt các điểm tham quan, hoạt động địa phương cũng như các spa
              chăm sóc sức khỏe và sắc đẹp. Vì vậy, bất kể lựa chọn lối sống của
              bạn là gì, bạn chỉ cần một cú nhấp chuột!{' '}
            </p>
          </div>
        </div>
        <div className='flex flex-col md:flex-row md:items-center justify-center'>
          <div className='md:w-1/2 md:pl-8'>
            <p className='text-lg text-gray-700 mb-4'>
              PM-Travel tin rằng hạnh phúc có thể đến dưới nhiều hình thức đối
              với những người khác nhau trong những thời điểm khác nhau. Vì vậy,
              với uy tín của chúng tôi và kinh nghiệm hơn 10 năm, chúng tôi hứa
              hẹn với bạn một loạt các lựa chọn phong phú để thắp sáng trạng
              thái hạnh phúc của chính bạn. Cho dù bạn đang tìm kiếm một trải
              nghiệm thú vị hay nghỉ ngơi trong khu nghỉ dưỡng 5 sao, một ngày
              spa thư giãn hay một chuyến phiêu lưu ly kỳ, một chuyến bay hạng
              nhất tiện lợi hay chuyến đi đường bộ thú vị, cho cả chuyến đi
              trong nước và quốc tế, bạn đều có tất cả trong một ứng dụng
              PM-Travel.
            </p>
          </div>

          <img
            src={background}
            alt='about us'
            className='md:w-1/2 rounded-lg shadow-xl mb-4 md:mb-0'
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
