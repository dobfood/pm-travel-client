import React from 'react';
import HeroSlider, { Slide } from 'hero-slider';
type Props = {};
const image =
  'https://kynguyenlamdep.com/wp-content/uploads/2020/01/hinh-anh-chu-chim-dep.jpg';
const image1 =
  'https://kynguyenlamdep.com/wp-content/uploads/2020/01/vach-da.jpg';
const images = [
  'https://kynguyenlamdep.com/wp-content/uploads/2020/01/hinh-anh-chu-chim-dep.jpg',
  'https://kynguyenlamdep.com/wp-content/uploads/2020/01/vach-da.jpg',
  'https://thuthuatnhanh.com/wp-content/uploads/2021/11/hinh-anh-chill-dep.jpg',
  'https://thuthuatnhanh.com/wp-content/uploads/2021/11/hinh-anh-chill-phong-canh-buon-hoang-hon.jpg'
];
const SliderImage = (props: Props) => {
  return (
    <HeroSlider
      slidingAnimation='left_to_right'
      orientation='horizontal'
      initialSlide={1}
      onBeforeChange={(previousSlide: any, nextSlide: any) =>
        console.log('onBeforeChange', previousSlide, nextSlide)
      }
      onChange={(nextSlide: any) => console.log('onchange', nextSlide)}
      onAfterChange={(nextSlide: any) =>
        console.log('onAfterChange', nextSlide)
      }
      style={{
        backgroundColor: 'rgba(0, 0, 0 ,0.33'
      }}
      settings={{
        slidingDuration: 250,
        slidingDelay: 100,
        shouldAutolay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 5000,
        height: '100vh'
      }}
    >
      <Slide
        background={{
          backgroundImageSrc:
            'https://kynguyenlamdep.com/wp-content/uploads/2020/01/hinh-anh-chu-chim-dep.jpg',
          backgroundAttachment: 'fixed'
        }}
      />
      <Slide
        background={{
          backgroundImageSrc: image1,
          backgroundAttachment: 'fixed'
        }}
      />
    </HeroSlider>
  );
};

export default SliderImage;
