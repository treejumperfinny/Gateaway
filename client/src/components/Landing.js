import biglogo from '../images/navbarlogo.png';
import React from 'react';

function Landing() {
  return (
    <>
      <h2 className="title">gateaway</h2>
      <div className="App-header">
       
         <img src={biglogo} className="hoppsflite" alt="logo" />
        <div className='learning'>
          Learn how to use gateaway with Hopps and their airplane companion Flite. 
        </div>
      </div>
    </>
  )
}

export default Landing;