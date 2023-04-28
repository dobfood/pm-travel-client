import React from 'react';
import HeroSlider, { Slide } from 'hero-slider';
type Props = { tours: any };
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
      {props.tours.images.map((image:any) => (
        <Slide
          key={image._id}
          background={{
            backgroundImageSrc: image.url,
            backgroundAttachment: 'fixed',
          }}
        />
      ))}
    </HeroSlider>
  );
};

export default SliderImage;
