import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './sidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
<SidebarContainer isOpen={isOpen} onClick={toggle}>
    <Icon onClick={toggle}>
        <CloseIcon />
    </Icon>
    <SidebarWrapper>
        <SidebarMenu>
            <SidebarLink to="ourServices" onClick={toggle}>
                Our Services
            </SidebarLink>
            <SidebarLink to="discover" onClick={toggle}>
                Discover
            </SidebarLink>
            <SidebarLink to="ourPackages" onClick={toggle}>
                Our Packages
            </SidebarLink>
            <SidebarLink to="media" onClick={toggle}>
                Happy Pupstomers
            </SidebarLink>
            <SidebarLink to="contactUs" onClick={toggle}>
                Contact Us
            </SidebarLink>
            <SidebarLink to="signUp" onClick={toggle}>
                Sign Up
            </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute to='/signIn' onClick={toggle}>
                Sign In
            </SidebarRoute>
        </SideBtnWrap>
    </SidebarWrapper>
</SidebarContainer>

    )
}

export default Sidebar;