import styled from "styled-components";


export const MyContainer = styled.div`
background-color: #756213;
background-image: linear-gradient(315deg, #756213 0%, #000000 74%);
height:175vh;
width:"100%";
padding-left:7rem ;


@media screen and (max-width: 480px){
    padding-left: 0px;
    padding-right: 10rem;
    width:175vh;
    height:200vh
};

`
export const MainTitle = styled.h1 ` 
color:whitesmoke;
font-size: 4rem;
display: flex;
align-items: center;
justify-content:center;
margin-bottom: 0px;
font-family: "Pacifico";
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


@media screen and (max-width: 480px){
   display:flex;
   align-items: flex-start;
   justify-content: left;
};
`

export const CardContainer=styled.div `
width:300px;
box-shadow: 0px 0px 15px -5px;
animation: ease-in;
margin-top: 10rem;

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
font-family: "Mandhor";
background-image: linear-gradient(45deg, #756213 0%, #000000 74%);
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
color:#C0AA8D;
font-size: 2rem;
`


export const BottomText= styled.h1` 
color: black;
display: flex;
align-items: center;
justify-content: center;
margin-top: 17rem;
font-size: 2rem;
margin-right: 7rem;

&:hover {
        transition: all 0.2s ease-in-out;
        color: white;
        transform: scale(1.2);
        background:black;
    }
`