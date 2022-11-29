import React  from 'react';
// import ReactDOM from 'react-dom';
import {Map,MapTypeControl,InfoWindow} from 'react-bmapgl';
// import Device from './Device';
// import { Displaybutton } from './components/Displaybutton';
import { Vehicle } from './components/Vehicle/Vehicle';
import {Device} from './Device'
import { VehicleList } from './components/Vehicle/VehicleList';
import {Marker} from 'react-bmapgl';
import { Devicelist } from './ObjInfo';
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
       <Devicelist display = {this.props.displaydevice}></Devicelist>
       {this.props.roadlist}
       {this.props.searchedDevice}
       <VehicleList/>
       {/* <div className='test'> 
          <Marker position = {{lng: 116.600797625, lat: 35.4021216643}} id = 'gg' />    
        </div> */}
      <MapTypeControl  anchor={2}/>
      </Map>
      </div>
      )
  }
}