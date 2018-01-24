import React from 'react';
import GoogleMapReact from 'google-map-react';

export default () => (
  <GoogleMapReact
    bootstrapURLKeys={process.env.REACT_APP_MAP_CODE}
    defaultCenter={{ lat: 49.95, lng: 21.33 }}
    defaultZoom={3}
  />
);
