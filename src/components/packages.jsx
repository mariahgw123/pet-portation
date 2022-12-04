import React from 'react';
import Icon1 from '../images/undraw_fetch.png';
import Icon2 from '../images/undraw_friends.png';
import Icon3 from '../images/undraw_relaxing.png';
import {
    PackagesContainer,
    PackagesH1,
    PackagesWrapper,
    PackagesCard,
    PackagesIcon,
    PackagesH2,
    PackagesP
} from './packagesElements';

const Packages = () => {
    return (
<PackagesContainer id="packages">
    <PackagesH1>Our Packages</PackagesH1>
    <PackagesWrapper>
        <PackagesCard>
            <PackagesIcon src={Icon1}/>
            <PackagesH2>Wedding Buddy Package</PackagesH2>
            <PackagesP> Have your fur baby included in your special day! We will pick them up and transport them to the venue and they will never be left alone. </PackagesP>
        </PackagesCard>
        <PackagesCard>
            <PackagesIcon src={Icon2}/>
            <PackagesH2>Vet Visits</PackagesH2>
            <PackagesP> Our 3rd and 4th year veterinary students will ensure your pet's safety is the #1 priority. You will be kept in the loop throughout the entire appointment. </PackagesP>
        </PackagesCard>
        <PackagesCard>
            <PackagesIcon src={Icon3}/>
            <PackagesH2>Grooming and Boarding Appointments</PackagesH2>
            <PackagesP> Never stress again about getting your pet groomed during work hours! Never lose sleep over a boarding appointment when you have an early flight.  </PackagesP>
        </PackagesCard>
    </PackagesWrapper>
</PackagesContainer>

    )
}

export default Packages