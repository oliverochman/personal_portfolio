import React from 'react';


const Hello = () => {
    return ( 
      <div className="hero-image"
    style={{
      background: 'url("/src/images/background.jpeg")',
      backgroundSize: 'cover',
      height: '100vh',
      marginTop: '-1rem',
      display: 'flex',
      alignItems: 'center'
      }}>
        <div id='hello-div'>
        <h2 id='myname'>I am Emma-Maria Thalen</h2>
        <h3 id='what-i-do'>| equestrian | developer |</h3>
        <h1 id='hello'>Welcome</h1>
        </div>
      </div>
    );
};
export default Hello;