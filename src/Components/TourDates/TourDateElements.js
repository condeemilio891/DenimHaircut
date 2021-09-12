import styled from "styled-components";
import {MdKeyboardArrowRight,MdArrowForward} from "react-icons/md"


export const ListGroupBody= styled.body `

margin: 0;
padding:0;
background: black;
font-family: sans-serif;
`

export const ListGroup = styled.ul` 

position: relative;
width: 100%;
margin: 100px auto 0;
padding: 10px;
box-sizing: border-box;
`

export const ListGroupItem=styled.li` 
display: flex;
background: rgba(255,255,255,.1);
padding: 10px 20px;
color: #fff;
margin: 5px 0;
transition: .5s;
&:nth-child(1) {
      background: #8f6245;
   };
   &:nth-child(2) {
      background: #C0AA8D;
   };
   &:nth-child(3) {
      background: #D7C0AD;
   };
   &:nth-child(4) {
      background: #8f6245;
   };
   &:nth-child(5) {
      background: #8f6245;
   };
   &:nth-child(6) {
      background: #C0AA8D;
   };
   &:nth-child(7) {
      background:  #D7C0AD;
   };
   &:nth-child(8) {
      background: #C0AA8D;
   };
   &:nth-child(9) {
      background: #D7C0AD;
   };
   &:hover{
       transform: scale()(1.06);
       background: #fff0f3;
   }
`

export const ListGroupDate= styled.p`

display:flex;
font-size: larger;
font-weight: bold;
color:#370617;
align-items: center;
justify-content: space-between;
padding-right: 10rem;
`
export const ListGroupHeading= styled.h1`
display:flex;
font-size: larger;
font-weight: bold;
color:#370617;
align-items: center;
justify-content: space-between;
padding-right: 44rem;


`
export const HeroBtnWrapper=styled.div`


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