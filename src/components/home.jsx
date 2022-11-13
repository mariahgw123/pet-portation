import React from 'react';

//stateless component that renders
//static "about" page data (pics, text, etc)
//we have fun here.

const Home = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent:'center',
            alignItems: 'center',
            height: '90vh'
            }}>
            <h1>Home</h1>
        </div>
    )
}

export default Home;