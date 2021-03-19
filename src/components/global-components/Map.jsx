import GoogleMapReact from 'google-map-react';
import React, { Component } from 'react';

const AnyReactComponent = () => <div><img src="assets/img/map-pin.png" alt=""/></div>;
export default class Map extends Component {

    static defaultProps = {
        center: {
          lat: 35.217120,
          lng: -80.855670
        },
        zoom: 12
      };
     
      render() {
        return (
          // Important! Always set the container height explicitly
          <div style={{ height: '614px', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: this.props.apiKey }}
              defaultCenter={this.props.mapLetLng}
              defaultZoom={this.props.zoom}
            >
              <AnyReactComponent
                lat={this.props.markerLet}
                lng={this.props.markerLng}
              />
            </GoogleMapReact>
          </div>
        );
      } 
}
