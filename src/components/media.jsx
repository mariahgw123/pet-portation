import React from 'react';
import bed_no_dog from '../images/bed_no_dog.png';

const Media = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent:'above',
            alignItems: 'top',
            height: '90vh'
            }}>
            <h1>Satisfied Pupstomers!</h1>
            <img
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '690px',
                height: '500px'
            }}
            src={bed_no_dog}
            alt="bed_no_dog">
            </img>
        </div>
    )
}

export default Media;