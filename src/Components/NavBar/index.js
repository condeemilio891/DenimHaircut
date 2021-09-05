import React from 'react'
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

const Navbar = ({toggle}) => {
    return (
        <>

        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
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
                        <NavLinks to="discover">Discover

                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services">services

                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact">contact

                        </NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Sign IN</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar
