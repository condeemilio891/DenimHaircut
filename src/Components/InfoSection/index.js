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
import Image from 'react-bootstrap/Image'

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
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                <Button to='home'
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
