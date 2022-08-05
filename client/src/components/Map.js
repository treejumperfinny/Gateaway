import React from "react";
import GoogleMapReact from 'google-map-react';

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 39.9978862,
      lng: -82.8821327
    },
    zoom: 19
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '80vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCkHzx8g1sFjADAAjTzZhtDxcCYrKut9o0" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
       />
    </div>
  );
}