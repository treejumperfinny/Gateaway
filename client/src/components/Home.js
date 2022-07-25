import hoppsflite from '../images/hoppsflite.png';
import React from 'react';

function Home() {
  return (
    <>
      <h2 className="title">gateaway</h2>
      <div className="App-header">
        <p>
          Working on it! Come back and check in on us later!
        </p>
        <img src={hoppsflite} className="hoppsflite" alt="logo" />
      </div>
    </>
  )
}

export default Home;