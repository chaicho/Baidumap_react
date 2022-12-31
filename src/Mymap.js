import React  from 'react';
// import ReactDOM from 'react-dom';
import {Map,MapTypeControl,InfoWindow,ScaleControl,ZoomControl} from 'react-bmapgl';
// import Device from './Device';
// import { Displaybutton } from './components/Displaybutton';
import { Vehicle } from './components/Vehicle/Vehicle';
import {Devicelist} from './components/Device/DeviceList'
import { VehicleList } from './components/Vehicle/VehicleList';
import { Roadlist } from './components/Road/Roadlist';
import {Marker} from 'react-bmapgl';
import { SideBar } from './components/SideBar/SideBar';
import { StaCmp } from './components/StatisticCmp/StatisticCmp';
// import { AllLog } from './components/AllLog/AllLog';
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
      enableScrollWheelZoom
      zoom="9"
       >
       <ScaleControl  anchor ={1}/>
       <Devicelist display = {this.props.displaydevice}></Devicelist>
       <Roadlist display = {this.props.displayroute}></Roadlist>
       {/* <VehicleList/> */}

        <MapTypeControl  anchor={2}/>
        <ZoomControl/>
        <SideBar></SideBar>
      {/* <AllLog/> */}
      <StaCmp></StaCmp>      
      </Map>
      

      </div>
      )
  }
}