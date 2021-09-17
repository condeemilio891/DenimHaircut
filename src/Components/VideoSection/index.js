import React from 'react'
import { CardContainer,VideoContainer,VideoCardTitle,MainTitle } from './VideoSectionElements'
import YoutubeEmbed from '../VideoCardSection/YoutubeEmbed'
import Container from "@mui/material/Container"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const VideoCardSection = (id) => {
    return (
        <>
        
        <Container maxWidth="md" id="videos">
          
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} >
           
        <MainTitle>Videos</MainTitle>

        <Grid container spacing={2}>

                    <Grid item xs={6}>
                    <CardContainer>
                        <VideoContainer>
                                
                            <YoutubeEmbed  embedId="f_6_m5PczBo"/>
                            <Box sx={{ bgcolor:"black", height:'5rem', width:"26.2rem", }}>
                            <VideoCardTitle>
                                    Video 1
                            </VideoCardTitle>
                            </Box>
                            </VideoContainer>

                        
                    </CardContainer>
                    </Grid>



                    <Grid item xs={6}>
                    <CardContainer>
                        <VideoContainer>
                                
                            <YoutubeEmbed  embedId="f_6_m5PczBo"/>
                            <Box sx={{ bgcolor:"black", height:'5rem', width:"26.2rem", }}>
                            <VideoCardTitle>
                                    Video 1
                            </VideoCardTitle>
                            </Box>
                            </VideoContainer>

                        
                    </CardContainer>
                    </Grid>



                    <Grid item xs={6}>
                    <CardContainer style={{marginTop:"15rem"}}>
                        <VideoContainer>
                                
                            <YoutubeEmbed  embedId="f_6_m5PczBo"/>
                            <Box sx={{ bgcolor:"black", height:'5rem', width:"26.2rem", }}>
                            <VideoCardTitle>
                                    Video 1
                            </VideoCardTitle>
                            </Box>
                            </VideoContainer>

                        
                    </CardContainer>
                    </Grid>



                    <Grid item xs={6}>
                    <CardContainer style={{marginTop:"15rem"}}>
                        <VideoContainer>
                                
                            <YoutubeEmbed  embedId="f_6_m5PczBo"/>
                            <Box sx={{ bgcolor:"black", height:'5rem', width:"26.2rem", }}>
                            <VideoCardTitle>
                                    Video 1
                            </VideoCardTitle>
                            </Box>
                            </VideoContainer>

                        
                    </CardContainer>
                    </Grid>
            

            </Grid>
            </Box>
            </Container>
        </>
    )
}

export default VideoCardSection
