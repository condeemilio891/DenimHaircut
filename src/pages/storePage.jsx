import React from 'react'
import background from "../assets/images/storeBG.jpg"
import GlassCard from '../Components/GlassCard/GlassCard'
import jackalope from "../assets/images/jackalope.png"
import Container from "@mui/material/Container"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function storePage() {
    return (
        <div className="storePage"
        style={{
            width: "100vw",
            height: "100vh",
            backgroundImage:`url(${background})`,
            backgroundPosition:'center',
            backgroundSize:'cover',
            backgroundRepeat:'no-repeat',
            display: 'flex',
            alignItems: 'center',
            justifyContent:"center",
        }}>
              <GlassCard productImage={jackalope} title="Tshirt" price="18.99"/>
              <GlassCard productImage={jackalope} title="Tshirt" price="18.99"/>
              <GlassCard productImage={jackalope} title="Tshirt" price="18.99"/>
              <GlassCard productImage={jackalope} title="Tshirt" price="18.99"/>  
              <GlassCard productImage={jackalope} title="Tshirt" price="18.99"/>
           
                {/* <Grid container spacing={2}>
                    
                    <Grid>
                    <GlassCard productImage={jackalope} title="GabeSticker" price="8.99"/>
                    <GlassCard productImage={jackalope} title="Tshirt" price="18.99"/>
                    </Grid>
                    <Grid>
                    <GlassCard productImage={jackalope} title="GabeSticker" price="8.99"/>
                    <GlassCard productImage={jackalope} title="Tshirt" price="18.99"/>
                    </Grid>
                
                    </Grid>
             */}
            
        </div>
    )
}

export default storePage
