import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

export default class GoogleMap extends Component {
  static defaultProps = {
    center: {lat: 49.95, lng: 21.33},
    zoom: 3,
  };

  render () {
    return (
      <GoogleMapReact
        bootstrapURLKeys={process.env.REACT_APP_MAP_CODE}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      />
    );
  }
}
