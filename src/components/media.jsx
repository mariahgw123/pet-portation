import React from 'react';
import Video from '../videos/snowy-drive-vid.mp4';
import {
    Title,
    Image,
    Wrapper,
    WrapperBg,
    VideoBg,
    TitleWrapper,
    GalleryWrapper
    } from './mediaElements';
import bed_no_dog from '../images/bed_no_dog.png';
import bed_with_willow from '../images/bed_with_willow.png';

const Media = () => {
    return (
      <>
        <Wrapper>
            <WrapperBg>
            <TitleWrapper>
                <Title>Satisfied Pupstomers!</Title>
                <VideoBg
                autoPlay loop muted src = {Video}
                type = 'video/map4' />
                </TitleWrapper>
            </WrapperBg>
            <GalleryWrapper>
                <Image
                src={bed_with_willow}
                alt="bed_with_willow">
                </Image>
            </GalleryWrapper>
        </Wrapper>
      </>
    )
}

export default Media;