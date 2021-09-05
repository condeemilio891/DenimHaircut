import React from 'react'
import Home from '../../pages/bandPage/bandPage'
import Video from "../../assets/videos/GirlDealing.mp4"
import {HeroContainer, HeroBg,VideoBg} from "../HeroSection/heroElements"


const HeroSection = () => {
    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/
                mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1></HeroH1>
                <HeroP></HeroP>
                <HeroBtnWrapper>
                    <Button to='signup'>
                        Get Started {hover ?<ArrowForward/>:<ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
