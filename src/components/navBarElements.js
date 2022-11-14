import { NavLink as Link } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background: #1d0c1f;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
<<<<<<< HEAD

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavLink = styled(LinkS)`
  color: #fff;
=======
export const NavLink = styled(Link)`
  color: white;
>>>>>>> 263e32a (style elements changed)
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;

  &.active {
<<<<<<< HEAD
    border-bottom: 3px solid #cbd6cb;
=======
>>>>>>> 263e32a (style elements changed)
    font-size: 20px;
    color: #cbd6cb;
    font-weight: 700;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
<<<<<<< HEAD
  border-radius: 50px;
  font-size: 20px;
  font-weight: 700;
=======
  border-radius: 6px;
>>>>>>> 263e32a (style elements changed)
  background: #256cel;
  padding: 10px 22px;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
<<<<<<< HEAD
    background: #cbd6cb;
=======
    background: #a896a6;
>>>>>>> 263e32a (style elements changed)
    color: #010606;
  }
`;
