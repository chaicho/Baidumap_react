import React  from 'react';
// import ReactDOM from 'react-dom';
import {Map,MapTypeControl,InfoWindow} from 'react-bmapgl';
// import Device from './Device';
// import { Displaybutton } from './components/Displaybutton';
import './Mymap.css'
export default class Mymap extends React.Component {
  constructor(props){
    super(props)
  }
  


  render() {
      return (
      <div className='map'>
      <Map center={{lng: 116.600797625, lat: 35.4021216643}} 
      style={{position : 'absolute',width:'100%',height:'100%'}}
      zoom="9"
      enableScrollWheelZoom
       >
       {this.props.devicelist}
       {this.props.roadlist}
       {this.props.searchedDevice}
      <MapTypeControl  anchor={2}/>
      </Map>
      </div>
      )
  }
}