import React, { useState, useEffect } from 'react';
import logo_paw from '../images/logo_paw.png';
import {IconContext} from 'react-icons/lib';
import {
    Nav,
    NavLink,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    ScrollLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './navBarElements';

const NavBar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 100) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    return (
        <>
        <IconContext.Provider value = {{color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
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
                <NavLink to="/">
                    Home
                </NavLink>
                <ScrollLink to="About"> About </ScrollLink>
                <ScrollLink  to="ourServices">
                    Our Services
                </ScrollLink>
                <ScrollLink to="media">
                    Satisfied Pupstomers
                </ScrollLink>
                <ScrollLink to="contactUs">
                    Contact Us
                    </ScrollLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink 
                to="/signin">
                    Sign In
                </NavBtnLink>
            </NavBtn>
          </NavbarContainer>   
        </Nav>
        </IconContext.Provider>
        </>
    )
}

export default NavBar;