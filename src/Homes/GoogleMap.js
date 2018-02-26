import React from 'react';
import GoogleMapReact from 'google-map-react';

export default () => (
  <GoogleMapReact
    bootstrapURLKeys={process.env.REACT_APP_MAP_CODE}
    center={{ lat: 49.95, lng: 21.33 }}
    zoom={3}
  />
);
