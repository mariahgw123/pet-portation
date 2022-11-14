import React, {useState} from 'react';
import { Button } from './buttonElement';
import { 
    Wrapper,
    HomeBg,
    VideoBg,
    HomeH1,
    HomeP,
    HomeBtnWrapper,
    HomeContent,
    ArrowForward,
    ArrowRight
 } from './homeElements';
 import Video from '../videos/dog_peek_vid.mp4';

const Home = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
     <>
      <Wrapper>
        <HomeBg>
           <VideoBg
            autoPlay loop muted src = {Video}
            type='video/mp4' />
        </HomeBg>
        <HomeContent>
            <HomeH1>Pet Transportation Made Easy</HomeH1>
            <HomeP>
                Sign up for our pet-portation services today
                and receive $30 in credit towards your next
                trip.
            </HomeP>
            <HomeBtnWrapper>
                <Button
                to = 'signup'
                onMouseEnter={onHover}
                onMouseLeave={onHover}>
                    Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HomeBtnWrapper>
        </HomeContent>
       </Wrapper>
       </>
    )
}

export default Home;