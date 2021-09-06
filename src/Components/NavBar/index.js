import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import { Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink

} from './navbarElements'
import Image from 'react-bootstrap/Image'
import Jackalope from "../../assets/images/jackalope.png"
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


    return (
        <>

        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to="/">
                    <Image src={Jackalope}/>
                    denim-haircut
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>

                    <NavItem>
                        <NavLinks to="about">About

                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="tourDates">TourDates

                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services">

                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact">contact

                        </NavLinks>
                    </NavItem>
                </NavMenu>
               
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar
