import React from 'react';
import ReactDOM from 'react-dom';
import {Map, Circle, NavigationControl, InfoWindow} from 'react-bmapgl';

class Example extends React.Component {
  render() {
    return (
      <Map
        center={new window.BMapGL.Point(116.404449, 39.914889)}
        zoom={12}
        tilt={40}
      >
        <Circle
          center={new window.BMapGL.Point(116.40, 39.91)}
          radius={5000}
          strokeColor="#f00"
          strokeWeight={2}
          fillColor="#ff0"
          fillOpacity={0.3}
        />
      </Map>
    )
  }
}

// ReactDOM.render(<Example/>,document.getElementById('allmap'))