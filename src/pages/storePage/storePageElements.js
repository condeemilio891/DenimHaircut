import styled from "styled-components"
import background from "../../assets/images/storeBG.jpg"
import{Link as LinkR} from "react-router-dom"

export const StorePageBG= styled.div`  

            width: "100vw";
            height: "150vh";
            background-image: url(${background});
            background-position: center;
            background-position:center;
            background-size: 'cover';
            background-repeat: no-repeat;
            display: flex;
            align-items: center;
            justify-content: center;
           
@media (max-width:420px){

width: "70xw";
height: "150vh";


}

`
export const StorePageTitle = styled.h1`  
display:flex;
align-items: center;
justify-content: space-between;
line-height: 1.5;
    letter-spacing: 1.15;
    font-family: "Gilroy";
    font-size: 20px;
    z-index:1;
    font-size:40px;
    font-family: "Mandhor";
    margin-left:6.89em;
    cursor: default;
`

export const TitleContainer= styled.div`
 
 height:5rem;
 width: 100vw;
 display: flex;
 z-index: 1;
 background-color:white;
 opacity: 90%;
 align-items: center;
 justify-content: space-evenly;
position:absolute;
background-image: url(${background});
            background-position: center;
            background-position:center;
            background-size: 'cover';
            background-repeat: no-repeat;
gap: "800px";

`

export const ShopIcon= styled(LinkR)`

color:black;
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
justify-content: space-between;
align-items: flex-start;
/* margin-left: 24px; */
font-weight: bold;
text-decoration: none;
padding-left:50px;
margin-left: 70px;
`
