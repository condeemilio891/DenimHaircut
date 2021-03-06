import styled from "styled-components";
import {MdKeyboardArrowRight,MdArrowForward} from "react-icons/md"

export const HeroContainer=styled.div`
background: #0c0c0c;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 800px;
position: relative;
z-index:1;

:before{
    content:'';
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%,
    rgba(0,0,0,0.6) 100%)
    linear-gradient(180deg, rgba(0,0,0,0.2)0%, transparent 100%);
    z-index:2;
    ;
}

`;


export const HeroBg= styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left:0;
width: 100%;
height: 100%;
overflow:hidden;
`

export const VideoBg=styled.video`
width:100%;
height: 100%;
-o-object-fit:contain;
object-fit: contain;
background: rgb(143,98,69);
background: radial-gradient(circle, rgba(143,98,69,1) 4%, rgba(54,54,54,1) 91%);
`

export const HeroContent= styled.div`
z-index:3;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
`;

export const HeroH1= styled.h1`
color: #fff;
font-size: 48px;
text-align:center;
font-family: "Mandhor";
text-shadow: 0 1px 0 #ccc,
               0 2px 0 #c9c9c9,
               0 3px 0 #bbb,
               0 4px 0 #b9b9b9,
               0 5px 0 #aaa,
               0 6px 1px rgba(0,0,0,.1),
               0 0 5px rgba(0,0,0,.1),
               0 1px 3px rgba(0,0,0,.3),
               0 3px 5px rgba(0,0,0,.2),
               0 5px 10px rgba(0,0,0,.25),
               0 10px 10px rgba(0,0,0,.2),
               0 20px 20px rgba(0,0,0,.15);

@media screen and (max-width:768px){

    font-size: 40px;
}
@media screen and (max-width:480px){
    font-size:32px;
}

`

export const HeroP= styled.p`
margin-top: 24 px;
color: #fff;
font-size: 24px;
text-align:center;
max-width: 600px;

@media screen and (max-width:768px){

font-size: 24px;
}
@media screen and (max-width:480px){
font-size:18px;
}
`

export const HeroBtnWrapper=styled.div`

margin-top:32px;
display: flex;
flex-direction:column;
align-items: center;
`

export const ArrowForward= styled(MdArrowForward)`
    margin-left:8px;
    font-size: 20px;
`

export const ArrowRight= styled(MdKeyboardArrowRight)`
      margin-left:8px;
    font-size: 20px;

`