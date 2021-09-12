import React from 'react'
import { Button } from '../ButtonElement'

import { InfoContainer, 
    InfoWrapper, 
    InfoRow,
     Column1,
      Column2,
TextWrapper,
TopLine,
Heading,
Subtitle,
BtnWrap,
ImgWrap,
Img  } from './InfoElements'
import altImage from '../../assets/images/PPic.svg'
import { FaInstagramSquare } from 'react-icons/fa'




const InfoSection = ({lightBg,id,imgStart,topLine,lightText,
headLine,darkText,description,buttonLabel,img,alt,primary,dark}) => {
    return (
        <>
          <InfoContainer lightBg={lightBg} id={id}>
              <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headLine}</Heading>
                            
                            <Subtitle >Drums - Cody Gowl </Subtitle>
                                
                                <a className="infoAnchor" href="https://www.instagram.com/cgowl4/?hl=en">
                                <FaInstagramSquare color="#5851db"/>
                                </a>
                           
                               
                            <Subtitle>Vocals/Guitar - Julian Madrid</Subtitle>
                                
                                
                            <a className="infoAnchor" href="https://www.instagram.com/julianmadrid00/?hl=en">
                                <FaInstagramSquare color="#5851db"/>
                                </a>


                            <Subtitle>Live Bass - Gabe Zamora</Subtitle>
                               
                            <a className="infoAnchor" href="https://www.instagram.com/antwan.the.don/?hl=en">
                                <FaInstagramSquare color="#5851db"/>
                                </a>
              
                            <BtnWrap>
                                <Button to='tourDates'
                                smooth={true}
                                duration={true}
                                spy={true}
                                exact="true"
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                >{buttonLabel} </Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                    <ImgWrap>
                    <Img src={altImage} alt={alt}/>
                    </ImgWrap>
                    
                    </Column2>

                </InfoRow>

              </InfoWrapper>
              </InfoContainer>  
        </>
    )
}

export default InfoSection
