import hoppsflite from '../images/hoppsflite.png';
import React from 'react';

function Home() {
  return (
    <>
      <h2 className="title">gateaway</h2>
      <div className="App-header">
        <p>Let us help you be quicker and more efficent.</p>
        <p>Less time worrying and more time enjoying your trip.</p>
        <p>
          Constantly updating. Please check back for more updates. 
        </p>
        <img src={hoppsflite} className="hoppsflite" alt="logo" />
      </div>
    </>
  )
}

export default Home;