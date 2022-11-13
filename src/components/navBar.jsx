import React from 'react';
import logo_paw from '../images/logo_paw.png';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './navBarElements';

const NavBar = () => {
    return (
        <>
        <Nav>
            <NavLink
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
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/home" activeStyle>
                    Home
                </NavLink>
                <NavLink to="/ourServices" activeStyle>
                    Our Services
                </NavLink>
                <NavLink to="/media" activeStyle>
                    Puppy Pics
                </NavLink>
                <NavLink to="/contactUs" activeStyle>
                    Contact Us!
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/signin">
                    Sign In
                </NavBtnLink>
            </NavBtn>
                    
        </Nav>
        </>
    )
}

export default NavBar;