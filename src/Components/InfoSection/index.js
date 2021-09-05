import React from 'react'
import { Button } from 'react-scroll'

const InfoSection = () => {
    return (
        <>
          <InfoContainer id={id}>
              <InfoWrapper>
                <InfoRow>
                    <InfoColumn1>
                        <TextWrapper>
                            <TopLine>Denim Haircut</TopLine>
                            <Heading> Denim Haircut</Heading>
                            <Subtitle>Subtitle</Subtitle>
                            <BtnWrap>
                                <Button to='home'>Button</Button>
                            </BtnWrap>
                        </TextWrapper>
                    </InfoColumn1>

                </InfoRow>

              </InfoWrapper>
              </InfoContainer>  
        </>
    )
}

export default InfoSection
