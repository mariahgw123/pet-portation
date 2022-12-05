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
    Img
    } from './ourServicesElements';
 
import { Button } from './buttonElements'; 


const OurServices = ({lightBg, id, imgStart, topLine, lightText, headline, darkText,
description, buttonLabel, img, alt, primary, dark, dark2}) => {
    return (

        
     <>
       <InfoContainer lightBg={lightBg} id={id}>
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
                        </BtnWrap>
                    </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                    <Img src={img} alt = {alt}/>
                    <Img/>
                    </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
       </InfoContainer>
     </>
    )
}

export default OurServices;