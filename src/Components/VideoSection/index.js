import React from 'react'
import { CardContainer,VideoContainer,VideoCardTitle,MainTitle,MyContainer,BottomText } from './VideoSectionElements'
import YoutubeEmbed from '../VideoCardSection/YoutubeEmbed'
import Container from "@mui/material/Container"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


const VideoCardSection = (id) => {
    return (
        <>
      
        <Container>
        <MyContainer maxWidth="md" id="videos">
         
      
           
        <MainTitle>Videos</MainTitle>

        <Grid container spacing={1}>

                    <Grid item md={6} xs={12}>
                    <CardContainer>
                        <VideoContainer>
                        <Box sx={{ bgcolor:"black", height:'5rem', width:"26.2rem",}}>
                            <VideoCardTitle>
                                    War Pigs Cover
                            </VideoCardTitle>
                            </Box>
                            <YoutubeEmbed  embedId="f_6_m5PczBo"/>
                          
                            </VideoContainer>

                        
                    </CardContainer>
                    </Grid>



                    <Grid item md={6} xs={12}>
                    <CardContainer >
                        <VideoContainer>
                        <Box sx={{ bgcolor:"black", height:'5rem', width:"26.2rem", }}>
                            <VideoCardTitle>
                                    Dancing Hills
                            </VideoCardTitle>
                            </Box>
                            <YoutubeEmbed  embedId="S8GQkkzyhsw"/>
                     
                            </VideoContainer>

                        
                    </CardContainer>
                    </Grid>



                    <Grid item md={6} xs={12}>
                    <CardContainer >
                        <VideoContainer>
                        <Box sx={{ bgcolor:"black", height:'5rem', width:"26.2rem", marginTop:"0px" }}>
                            <VideoCardTitle>
                                    Psycho Killer Cover
                            </VideoCardTitle>
                            </Box>
                            <YoutubeEmbed  embedId="u6Khp12BeOU"/>
                           
                            </VideoContainer>

                        
                    </CardContainer>
                    </Grid>



                    <Grid item md={6} xs={12}>
                    <CardContainer>
                        <VideoContainer>
                        <Box sx={{ bgcolor:"black", height:'5rem', width:"26.2rem", }}>
                            <VideoCardTitle>
                                    Amble On Through
                            </VideoCardTitle>
                            </Box>
                            <YoutubeEmbed  embedId="ouEI_hAgZLg"/>
                         
                            </VideoContainer>

                        </CardContainer>
                    
                    </Grid>
            

            </Grid>
            <a href="https://soundcloud.com/denim-haircut">
            <BottomText> All Music </BottomText>
            </a>
            </MyContainer>
         
            </Container>
            
        </>
    )
}

export default VideoCardSection
