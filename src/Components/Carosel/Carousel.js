import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import YoutubeEmbed from "../VideoCardSection/YoutubeEmbed"


const MyCarousel = () => (
  <Carousel plugins={['arrows']}>
    <YoutubeEmbed embedId="f_6_m5PczBo"/>
    <YoutubeEmbed embedId="f_6_m5PczBo"/>
    <YoutubeEmbed embedId="f_6_m5PczBo"/>
  </Carousel>
);

export default MyCarousel;