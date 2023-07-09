import React, { useRef, useState, useEffect } from 'react';
import { Map, Marker, MapTypeControl, InfoWindow, ScaleControl, ZoomControl } from 'react-bmapgl';
import { DisplayScene } from './components/DisplayScene/DisplayScene';
import { Devicelist } from './components/Device/DeviceList'
import { VehicleList } from './components/Vehicle/VehicleList';
import { Roadlist } from './components/Road/Roadlist';
import { SideBar } from './components/SideBar/SideBar';
import { StaCmp } from './components/StatisticCmp/StaCmp';
import { useInterval } from 'ahooks';
import { useSelector } from 'react-redux';
import './Mymap.css'
import { TitleBar } from './components/Title/TitleBar';
import { Device } from './components/Device/Device';
import { TimeRate } from './components/TimeRate/TimeRate'
import { DisplayModeToggle } from './components/DisplayScene/SceneSwitch/SwitchButtons'
import { Label } from 'react-bmapgl'

export const timeContext = React.createContext();
export const windowContext = React.createContext();
export function Mymap(props) {

  const [tick, setTick] = useState(0)
  const [mapsec, setMapSec] = useState(1635696000000)
  const [playRate, setPlayRate] = useState(1)
  const mapRef = useRef()
  const sideBarRef = useRef()
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const displayMode = useSelector((state) => state.displayMode.mode);
  const [clickLoc, setClickLoc] = useState({ 'lng': 0, 'lat': 0 })
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
    setTick(tick + 1 * playRate);
    setMapSec(mapsec + 20000 * playRate)
  }, 500)

  return (
    <div className='map_container'>

      <timeContext.Provider value={{ tick, mapsec }}>
        <windowContext.Provider value={{ screenSize }} >
          <div className='titlebar'
            style={{
              width: '100%',
              height: '10%',
              padding: 0,
              margin: 0,
              overflow: 'hidden',
            }}>
            <TitleBar ></TitleBar>
          </div>
          <div className='map_container'>

            <Map center={{ lng: 116.600797625, lat: 35.4021216643 }}
              style={{ position: 'absolute', width: '100%', height: '90%' }}
              enableScrollWheelZoom
              zoom="9"
              ref={mapRef}
              onClick={(e) => {
                console.log(e)
                console.log(e['latlng'])
                setClickLoc(e['latlng'])
              }}
            >

              <div className='SearchBox'
                style={{
                  position: 'absolute'
                }}> 
                  <DisplayScene></DisplayScene>
              </div>
              <ScaleControl anchor={1} />
              <ZoomControl />
              <Label position={clickLoc} text={
                `lng : ${clickLoc['lng']}\nlat : ${clickLoc['lat']} `}></Label>
            </Map>
          </div>
        </windowContext.Provider>
      </timeContext.Provider>

    </div>
  )
}
