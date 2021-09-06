import React from 'react'
import { SideBarContainer,
Icon,
CloseIcon,
SideBarWrapper,

SideBarLink,SideBtnWrap,SideBarRoute, SideBarMenu } from './sidebarElements'
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
                    <SideBarLink to="tourDates" onClick={toggle}>
                   
                    </SideBarLink>
                    <SideBarLink to="services" onClick={toggle}>
                        
                    </SideBarLink>
                    <SideBarLink to="sign-up" onClick={toggle}>
                    Tour Dates
                    </SideBarLink>
                </SideBarMenu>

                {/* <SideBtnWrap>
                    <SideBarRoute to="/"> Sign In</SideBarRoute>
                </SideBtnWrap> */}

            </SideBarWrapper>
        </SideBarContainer>
    )
}
export default SideBar
