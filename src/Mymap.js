import React  from 'react';
import ReactDOM from 'react-dom';
import {Map, Marker, NavigationControl, InfoWindow,MapTypeControl} from 'react-bmapgl';
import Device from './Device';
import { Displaybutton } from './components/Displaybutton';
import './Mymap.css'
export default class Mymap extends React.Component {
  constructor(props){
    super(props)
  }
  


  render() {
      console.log(this.props.Displayroute)
      return (
      <div className='top'>
      <div className='mymap'>
      <Map center={{lng: 116.600797625, lat: 35.4021216643}} 
      style={{width:'100%',height:'565px'}}
      zoom="9"
      enableScrollWheelZoom
       >
       {this.props.Devicelist}
       {this.props.Roadlist}
      <MapTypeControl />
      </Map>
      </div>
    </div>
      )
  }
}