import React,{useState} from 'react'
import { Button } from '../ButtonElement'
import Video from "../../assets/videos/GirlDealing.mp4"
import {HeroContainer, HeroBg,VideoBg, HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight} from "../HeroSection/heroElements"


const HeroSection = () => {

    const[hover,setHover]= useState(false)

    const onHover=()=>{
        setHover(!hover)
    }
    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/
                mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Denium Haircut</HeroH1>
                <HeroP>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem 
                    sequi nesciunt. Neque porro quisquam</HeroP>
                <HeroBtnWrapper>
                    <Button to='signup'onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'>
                        Get Started {hover ?<ArrowForward/>:<ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
