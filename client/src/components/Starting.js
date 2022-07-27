import React from "react";
import biglogo from '../images/navbarlogo.png';

function Starting() {
    return <>

    <div className="getstarted">
        Let's get started.
        <h3>Welcome and a little "how to"</h3>

        <p>Clight the photo</p>   
       <a href="/dash"><img src={biglogo} className="hoppsflite" alt="logo" /></a>    
    </div>
    </>
}

export default Starting;