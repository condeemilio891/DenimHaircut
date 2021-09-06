import React from 'react';
import '@brainhubeu/react-carousel/lib/style.css';
import YoutubeEmbed from "../VideoCardSection/YoutubeEmbed"
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import { CarouselWrapper } from './CarouselElements';

const MyCarousel = () => (
<>
  <CarouselWrapper>     
  <Carousel plugins={['arrows']}
 >
    <YoutubeEmbed embedId="f_6_m5PczBo"/>
    <YoutubeEmbed embedId="S8GQkkzyhsw"/>
    <YoutubeEmbed embedId="u6Khp12BeOU"/>
    
  </Carousel>
  </CarouselWrapper>
  </>
);

export default MyCarousel;