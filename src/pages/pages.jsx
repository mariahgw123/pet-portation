import React, { useState } from 'react';
import NavBar from '../components/navBar';
import Sidebar from '../components/sidebar';

const Pages = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
         <Sidebar isOpen={isOpen} toggle={toggle} />
         <NavBar toggle={toggle}/>
        </>
    )
}

export default Pages;