import styled from "styled-components";



export const MainTitle = styled.h1 ` 

font-size: 4rem;
display: flex;
align-items: center;
justify-content:center;
`

export const CardContainer=styled.div `
width:300px;
box-shadow: 0px 0px 15px -5px;
animation: ease-in;
margin-top: 1rem;

&:hover{
    transform: scale(1.1);
    box-shadow: 0px 0px 15px  0px;
}
`

export const VideoContainer = styled.div ` 
  margin-top:2rem;
    height: 200px;


`

export const VideoCardTitle= styled.h1 ` 

color: white;



`
