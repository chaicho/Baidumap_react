import React from 'react';
import ReactDOM from 'react-dom';
import {Map, Marker, NavigationControl, InfoWindow,MapTypeControl} from 'react-bmapgl';
import Device from './Device';
import './components/Displaybutton'

export default class Mymap extends React.Component {
  constructor(props){
    super(props)
  }
  render() {

      return <Map center={{lng: 116.600797625, lat: 35.4021216643}} 
      style={{ height: 450 }}
      zoom="9"
      enableScrollWheelZoom >
       {this.props.Devicelist}
       {this.props.Roadlist}
      <MapTypeControl />
      {/* < Marker position={{lng: 116.600797625, lat: 35.4021216643}}></Marker> */}
      {/* <NavigationControl />  */}
      {/* <InfoWindow position={{lng: 116.402544, lat: 35.4021216643}} text="内容" title="标题"/> */}
      </Map>
  }
}