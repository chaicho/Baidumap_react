import React, { useRef, useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
import { Map, MapTypeControl, InfoWindow, ScaleControl, ZoomControl } from 'react-bmapgl';
// import Device from './Device';
// import { Displaybutton } from './components/Displaybutton';
import PathViewer from './components/PathViewer/PathViewer'
import { Vehicle } from './components/Vehicle/Vehicle';
import { Devicelist } from './components/Device/DeviceList'
import { VehicleList } from './components/Vehicle/VehicleList';
import { Roadlist } from './components/Road/Roadlist';
import { Marker } from 'react-bmapgl';
import { SideBar } from './components/SideBar/SideBar';
import { StaCmp } from './components/StatisticCmp/StaCmp';
// import { AllLog } from './components/AllLog/AllLog';
import { useInterval } from 'ahooks';
import './Mymap.css'
import { Content } from 'antd/lib/layout/layout';
import { TitleBar } from './components/Title/TitleBar';
export const timeContext = React.createContext();
export const windowContext = React.createContext();
export function Mymap(props) {

  const [tick, setTick] = useState(0)
  const [mapsec, setMapSec] = useState(1635696000000)
  const mapRef = useRef()
  const sideBarRef = useRef()
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    // window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    setScreenSize({ width: window.innerWidth, height: window.innerHeight });
  }

  useInterval(() => {
    setTick(tick + 1);
    setMapSec(mapsec + 20000)
  }, 500)

  return (
    <div className='map'>
      <timeContext.Provider value={{ tick, mapsec }}>
        <windowContext.Provider value={{ screenSize }} >
          <div className='titlebar'
            style={{
              width: '75%',
              height: '50px',
              padding: 0,
              margin: 0,
              overflow: 'hidden',
            }}>
            <TitleBar ></TitleBar>
          </div>
          <Map center={{ lng: 116.600797625, lat: 35.4021216643 }}
            style={{ position: 'absolute', width: '75%', height: screenSize['height'] * 0.65 }}
            // enableScrollWheelZoom
            zoom="9"
            ref={mapRef}
          >
            <ScaleControl anchor={1} />
            <ZoomControl />
            {/* <MapTypeControl anchor={2} /> */}

            {/* <Devicelist display={props.displaydevice}></Devicelist> */}
            {/* <Roadlist display={props.displayroute}></Roadlist> */}
            <VehicleList />
            <SideBar ></SideBar>
            <StaCmp ></StaCmp>


          </Map>

        </windowContext.Provider>
      </timeContext.Provider>

      {/* <PathViewer></PathViewer> */}

    </div>
  )
}
