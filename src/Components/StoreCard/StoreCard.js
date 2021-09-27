import React from 'react'
import { CardImage,CardTitle,CardSnippet,CardReadmore,StoreCardContainer } from './StoreCardElements'


const StoreCard = () => {
    return (
        <>
            <StoreCardContainer>
                <CardImage></CardImage>
                <CardTitle></CardTitle>
                <CardSnippet></CardSnippet>
                <CardReadmore></CardReadmore>
            </StoreCardContainer>
        </>
    )
}

export default StoreCard
