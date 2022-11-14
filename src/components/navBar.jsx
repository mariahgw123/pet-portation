import React from 'react';
import logo_paw from '../images/logo_paw.png';
import {
    Nav,
    NavbarContainer,
    NavLink,
    NavLogo,
    MobileIcon,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './navBarElements';

const NavBar = ({toggle}) => {
    return (
        <>
        <Nav>
        <NavbarContainer>
        <NavLogo
            to="/">
            <img
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '80px',
                height: '50px',
            }}
            src={logo_paw}
            alt="logo_paw">
            </img>
            </NavLogo>
            <MobileIcon onClick={toggle}>
            <Bars />
            </MobileIcon>
            <NavMenu>
                <NavLink to="home" activeStyle>
                    Home
                </NavLink>
                <NavLink to="ourServices" activeStyle>
                    Our Services
                </NavLink>
                <NavLink to="media" activeStyle>
                    Puppy Pics
                </NavLink>
<<<<<<< HEAD
                <NavLink to="contactUs" activeStyle>
=======
                <NavLink to="/contactUs" activeStyle>
>>>>>>> 97a867e (changed font sizes and colors and removed exclamation point)
                    Contact Us
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink 
                to="/signin">
                    Sign In
                    
                </NavBtnLink>
            </NavBtn>
          </NavbarContainer>   
        </Nav>
        </>
    )
}

export default NavBar;