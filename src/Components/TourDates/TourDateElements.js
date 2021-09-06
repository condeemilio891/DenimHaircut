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
      background: #590d22;
   };
   &:nth-child(2) {
      background: #800f2f;
   };
   &:nth-child(3) {
      background: #a4133c;
   };
   &:nth-child(4) {
      background: #c9184a;
   };
   &:nth-child(5) {
      background: #ff4d6d
   };
   &:nth-child(6) {
      background: #ff758f;
   };
   &:nth-child(7) {
      background: #ff8fa3;
   };
   &:nth-child(8) {
      background: #ffb3c1;
   };
   &:nth-child(9) {
      background: #ffccd5;
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