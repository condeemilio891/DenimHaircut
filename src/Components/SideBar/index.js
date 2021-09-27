import React from 'react'
import { SideBarContainer,
Icon,
CloseIcon,
SideBarWrapper,

SideBarLink,sidebarIconUl, SideBarMenu } from './sidebarElements'

import { NavIconUl } from '../NavBar/navbarElements'
import { FaFacebookSquare,FaInstagramSquare,FaYoutubeSquare,FaTwitterSquare,FaSoundcloud } from 'react-icons/fa'
import "./style.css"
const SideBar = ({isOpen,toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="about" onClick={toggle}>
                        About
                    </SideBarLink>
                    <SideBarLink to="videos" onClick={toggle}>
                            Videos
                    </SideBarLink>
                    <SideBarLink to="services" onClick={toggle}>
                        
                    </SideBarLink>
                    <SideBarLink to="tourDates" onClick={toggle}>
                    Tour Dates
                    </SideBarLink>

                    
                    <sidebarIconUl>


                    <a className="sidebarAnchor" href="https://www.instagram.com/denimhaircut/?hl=en">
                    <FaInstagramSquare color="#5851db"  />
                    </a >

                    
                    <a className= "sidebarAnchor"href="https://www.youtube.com/channel/UCf3s6poDVE5KHEqUI3sHJhQ/playlists">
                            <FaYoutubeSquare color='#ff0000' />

                            </a>
                            <a className= "sidebarAnchor"href="https://soundcloud.com/denim-haircut">
                            <FaSoundcloud color='#FE5000'/>

                            </a>


                            <a className= "sidebarAnchor"href="https://twitter.com/denimhaircut?lang=en">
                            <FaTwitterSquare color='#1da1f2'/>

                            </a>
                        
                
                    </sidebarIconUl>
                </SideBarMenu>

            

            </SideBarWrapper>
        </SideBarContainer>
    )
}
export default SideBar
