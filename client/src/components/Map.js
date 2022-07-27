// import React from "react";
// import GoogleMapReact from 'google-map-react';

// function Map() {
//     return (
//         <>
//             <div style={{ height: '100vh', width: '100%' }}>
//                 <GoogleMapReact
//                     bootstrapURLKeys={{ key: "AIzaSyCkHzx8g1sFjADAAjTzZhtDxcCYrKut9o0" }} />
//             </div>
//         </>
//     )
// }

// export default Map;

import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 39.9978862,
      lng: -82.8821327
    },
    zoom: 17
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '80vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}