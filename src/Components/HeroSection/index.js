import React,{useState} from 'react'
import { Button } from '../ButtonElement'
import Video from "../../assets/videos/DenimHaircutBackgroundVid.mp4"
import {HeroContainer, HeroBg,VideoBg, HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight} from "../HeroSection/heroElements"


const HeroSection = () => {

    const[hover,setHover]= useState(false)

    const onHover=()=>{
        setHover(!hover)
    }
    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg playsinline autoPlay loop muted webkit-playsinline src={Video} type='video/
                mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Denim Haircut</HeroH1>
                <HeroP></HeroP>
                <HeroBtnWrapper>
                    <Button to='about'onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'>
                        About Us {hover ?<ArrowForward/>:<ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
