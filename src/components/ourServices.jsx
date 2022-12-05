import React from 'react';
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
<<<<<<< HEAD
<<<<<<< HEAD
    Img,
    } from './ourServicesElements';
import { Button } from './buttonElements'; 
=======
    Img
    } from './ourServicesElements';
import { Button } from 'react-scroll'; 
>>>>>>> e785959 (the html structure for the react scroll services page)
=======
    Img,
    } from './ourServicesElements';
import { Button } from './buttonElements'; 
>>>>>>> 6e53f49 (passed all the styling elements and images into the services component)

const OurServices = ({lightBg, id, imgStart, topLine, lightText, headline, darkText,
description, buttonLabel, img, alt, primary, dark, dark2}) => {
    return (
<<<<<<< HEAD
<<<<<<< HEAD
        
     <>
       <InfoContainer lightBg = {lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                        <BtnWrap>
                            <Button
                            to="home"
                            smooth = {true}
                            duration = {500}
                            spy={true}
                            exact="true"
                            offset={-80} //offset for react scroll that has the scroll trigger at the right point
                            primary={primary ? 1 : 0} // if primary has a value of 1 return true and v.v.
                            dark = {dark ? 1 : 0}
                            dark2 = {dark2 ? 1 : 0}
                             >{buttonLabel}</Button>
=======
=======
        
>>>>>>> 6e53f49 (passed all the styling elements and images into the services component)
     <>
       <InfoContainer lightBg = {lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                        <BtnWrap>
                            <Button
<<<<<<< HEAD
                            to="home" />
>>>>>>> e785959 (the html structure for the react scroll services page)
=======
                            to="home"
                            smooth = {true}
                            duration = {500}
                            spy={true}
                            exact="true"
                            offset={-80} //offset for react scroll that has the scroll trigger at the right point
                            primary={primary ? 1 : 0} // if primary has a value of 1 return true and v.v.
                            dark = {dark ? 1 : 0}
                            dark2 = {dark2 ? 1 : 0}
                             >{buttonLabel}</Button>
>>>>>>> 6e53f49 (passed all the styling elements and images into the services component)
                        </BtnWrap>
                    </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
<<<<<<< HEAD
<<<<<<< HEAD
                    <Img src={img} alt = {alt}/>
=======
                    <Img/>
>>>>>>> e785959 (the html structure for the react scroll services page)
=======
                    <Img src={img} alt = {alt}/>
>>>>>>> 6e53f49 (passed all the styling elements and images into the services component)
                    </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
       </InfoContainer>
     </>
    )
}

export default OurServices;