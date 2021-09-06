import React from 'react';
import '@brainhubeu/react-carousel/lib/style.css';
import YoutubeEmbed from "../VideoCardSection/YoutubeEmbed"
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';

const MyCarousel = () => (
<div style={{ display: 'flex', justifyContent: 'center', flexFlow: 'row', alignContent: 'center', textAlign: 'center' }}>
  <Carousel plugins={['arrows']}
 >
    <YoutubeEmbed embedId="f_6_m5PczBo"/>
    <YoutubeEmbed embedId="S8GQkkzyhsw"/>
    <YoutubeEmbed embedId="u6Khp12BeOU"/>
    
  </Carousel>
  </div>
);

export default MyCarousel;