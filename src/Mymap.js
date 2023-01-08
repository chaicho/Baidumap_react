import React, { useRef, useState }  from 'react';
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
import { useInterval } from 'ahooks';
import './Mymap.css'
import { Content } from 'antd/lib/layout/layout';
export const timeContext = React.createContext();

export function Mymap(props) {
  
  const [tick,setTick] = useState(0)
  const [mapsec,setMapSec] = useState(1635696000000)
  const mapRef = useRef()
  const sideBarRef = useRef()
  useInterval(()=>{
    setTick(tick + 1);
    setMapSec(mapsec + 20000)
  },500)
   
  return (
    <div className='map'>
      <timeContext.Provider value={{tick,mapsec}}>

      <Map center={{lng: 116.600797625, lat: 35.4021216643}} 
      style={{position : 'absolute',width:'100%',height:'100%'}}
      enableScrollWheelZoom
      zoom="9"
      ref = {mapRef}  
      >
       <ScaleControl  anchor ={1}/>
       <Devicelist display = {props.displaydevice}></Devicelist>
       <Roadlist display = {props.displayroute}></Roadlist>
       {/* <VehicleList/> */}

        <MapTypeControl  anchor={2}/>
        <ZoomControl/>
        <SideBar ></SideBar>
        <StaCmp></StaCmp>      
      </Map>
      

      </timeContext.Provider>
      </div>
      )
}
