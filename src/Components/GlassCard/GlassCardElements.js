import styled from "styled-components"
import {useSpring, animated} from "react-spring"


export const ProductContainer= styled(animated.div)`

  display: inline-block;
  max-width:200px;
  
  padding: 3em;
  background: #C7D2FE66;
  border-radius: 10px;
  z-index: 1;
 flex-wrap: wrap;
  backdrop-filter: opacity(20%);
  border: 2px solid transparent;
  background-clip:border-box;
  cursor:pointer;
  margin-right:10px;
  margin-left:10px;

  
@media screen and (max-width: 480px){
   display:flex;
   align-items: flex-start;
   justify-content: left;
};
`


export const ProductImg = styled.img`
        width: 200px;
        height: auto;
        border: 2px solid #000;
        border-radius: 50%;
    `

export const ProductTitle = styled.h1`
    line-height: 1.5;
    letter-spacing: 1.15;
    font-family: "Gilroy";


`
export const ProductPrice = styled.h3`
    line-height: 1.5;
    letter-spacing: 1.15;
    font-family: "Gilroy";
    font-size: 20px;
    

`