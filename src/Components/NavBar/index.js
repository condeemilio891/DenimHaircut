import React, {useState, useEffect} from 'react'
import {FaBars, FaTwitterSquare,FaFacebookSquare,FaInstagramSquare,FaYoutubeSquare,FaSoundcloud} from 'react-icons/fa'
import { Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavIconUl,
    Img

} from './navbarElements'
import  "./style.css"
import Jackalope from "../../assets/images/jackalope.png"
import { animateScroll as scroll } from 'react-scroll'



const Navbar = ({toggle}) => {

const [scrollNav, setScrollNav]= useState(false)

const changeNav = ()=>{
    if(window.scrollY >= 80) {
        setScrollNav(true)
    } else{
        setScrollNav(false)

    }
}

useEffect (()=>{
    window.addEventListener('scroll',changeNav)
},[])

const toggleHome=() =>{
    scroll.scrollToTop();
};

    return (
        <>

        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to="/" onClick={toggleHome}>
                    <Img to="/" onClick={toggleHome} src={Jackalope} scrollNav={scrollNav}/>
                  
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>

                    <NavItem>
                        <NavLinks to="about"
                        smooth={true} duration={500} spy={true}
                        exact="true" offset={-80}
                        >About

                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="tourDates"
                          smooth={true} duration={500} spy={true}
                          exact="true" offset={-80}
                        >Concert Dates

                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="videos"
                        smooth={true} duration={500} spy={true}
                        exact="true" offset={-80}>
                           Videos
                        </NavLinks>
                    </NavItem>


                    <NavIconUl>


                    <a className="navAnchor" href="https://www.instagram.com/denimhaircut/?hl=en">
                    <FaInstagramSquare color="#5851db"  />
                    </a >

                    
                    <a className= "navAnchorE"href="https://www.youtube.com/channel/UCf3s6poDVE5KHEqUI3sHJhQ/playlists">
                            <FaYoutubeSquare color='#ff0000' />

                            </a>
                            <a className= "navAnchorE"href="https://soundcloud.com/denim-haircut">
                            <FaSoundcloud color='#FE5000'/>

                            </a>


                            <a className= "navAnchorE"href="https://twitter.com/denimhaircut?lang=en">
                            <FaTwitterSquare color='#1da1f2'/>

                            </a>
                        
                
                    </NavIconUl>
                

                </NavMenu>
               
            </NavbarContainer>
        </Nav>
       
        </>
    )
}

export default Navbar
