import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

function Map() {
  const containerStyle = {
    width: '100%',
    height: '400px'
  };

  const center = {
    lat: 51.841931,
    lng: 1.215073
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyA0-Z6pY_7GKM6EFFQruZdzIPmamod6HT8"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      />
    </LoadScript>
  );
}

export default Map;
