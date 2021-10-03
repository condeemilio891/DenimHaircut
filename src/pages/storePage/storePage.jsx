import React from 'react'
import { StorePageBG,StorePageTitle,TitleContainer,ShopIcon } from './storePageElements';
import GlassCard from '../../Components/GlassCard/GlassCard'
import jackalope from "../../assets/images/jackalope.png"
import Grid from '@mui/material/Grid';
import "./storePageStyle.css"
import {FaShoppingCart} from 'react-icons/fa'

function storePage() {
    return (
        <>
        <TitleContainer>
                    <StorePageTitle>Denim Haircut</StorePageTitle>
                        <ShopIcon>
                        <FaShoppingCart value={{className:"shoppingIcon"}}/>
                        </ShopIcon>
                </TitleContainer>
        <StorePageBG >
          
                
                <Grid container spacing={2}>
                    
                    <Grid>
                    <GlassCard productImage={jackalope} title="GabeSticker" price="8.99"/>
                    <GlassCard productImage={jackalope} title="Tshirt" price="18.99"/>
                    </Grid>
                    <Grid>
                    <GlassCard productImage={jackalope} title="GabeSticker" price="8.99"/>
                    <GlassCard productImage={jackalope} title="Tshirt" price="18.99"/>
                    </Grid>
                    <Grid>
                    <GlassCard productImage={jackalope} title="GabeSticker" price="8.99"/>
                    <GlassCard productImage={jackalope} title="Tshirt" price="18.99"/>
                    </Grid>
                    <Grid>
                    <GlassCard productImage={jackalope} title="GabeSticker" price="8.99"/>
                    <GlassCard productImage={jackalope} title="Tshirt" price="18.99"/>
                    </Grid>
                
                    </Grid>
            
            
        </StorePageBG>
        </>
    )
}

export default storePage
