import styled from 'styled-components'

export const InfoContainer = styled.div`
 color: #fff;
 background: ${({lightBg})=>(lightBg ? '#f9f9f9' :`#010606`)}
 ;

 @media screen and (max-width: 768){

    padding: 100px 0 
 }

`


export const InfoWrapper = styled.div`
 display: grid;
 z-index: 1;
 height: 860px;
 width:100%;
 max-width: 1100px;
 margin-right: auto;
 margin-left:auto;
 padding: 0 15px;
 justify-content: center;
`

export const InfoRow= styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas: ${({imgStart})=>(imgStart ? `'col2
col1'`: `'col1 col2'`)};

@media screen and (max-width: 768px){
grid-template-areas: ${({imgStart})=>(imgStart ? `'col1
' 'col2'`: `'col1 col1' 'col2 col2'`)} ;

}
`


export const Column1= styled.div`
  margin-bottom:15px;
  padding: 0 25px;
  grid-area: col1;
`


export const Column2= styled.div`
  margin-bottom:15px;
  padding: 0 25px;
  grid-area: col2;
  background-color: white;
`

export const TextWrapper = styled.div `
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;

`


export const TopLine= styled.p`
color: #8f6245;;
font-size: 25px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;
`

export const Heading= styled.h1`
margin-bottom: 24px;
font-size: 48px;
line-height: 1.1;
font-weight: 600;
color: ${({lightText})=>(lightText ? `#f7f8fa`: '#010606')
};
text-transform: uppercase;

@media screen and (max-width: 480px){
    font-size: 32px
};
`

export const Subtitle= styled.p`
max-width: 440px;
margin-bottom: 12px;
font-size: 17px;
line-height: 24px;
/* padding-right:4rem;
margin-right: 10rem; */
color: #D7C0AD;
`

export const BtnWrap=styled.div`
display: flex;
justify-content: flex-start;

`
export const ImgWrap= styled.div `
    max-width: 555px;
    height: 100%;
`



export const Img =styled.img`
width:100%;
margin: 15px 0 25px 0;
padding-right: 0;
background-image: url("../../assets/images/PPic.svg");


`