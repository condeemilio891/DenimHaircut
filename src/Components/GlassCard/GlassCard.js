import React from 'react'
import {useSpring, animated} from "react-spring"
import { ProductImg,ProductPrice,ProductTitle,ProductContainer } from './GlassCardElements'
import profile from "../../assets/images/jackalope.png"



const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const GlassCard = (props) => {
    const [aprops, set]= useSpring(()=>({xys:[0,0,1], config:{mass:10, tension:200, friction:50}}))

    return (
        <ProductContainer
        onMouseMove={({clientX: x, clientY: y})=>(set({xys: calc(x,y)}))}
        onMouseLeave= {()=> set({xys:[0,0,1]})}
        style={{
            transform:aprops.xys.interpolate(trans)
        }}
        >
       
            <ProductImg src={props.productImage}/>
            <ProductTitle>{props.title}</ProductTitle>
            <ProductPrice>{props.price}</ProductPrice>
        
        </ProductContainer>
    )
}

export default GlassCard
