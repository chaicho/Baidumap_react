import React, { useState, useEffect, useContext } from 'react';
import { Input, Button } from 'antd';
import { CarTraceContext } from './SideBar';
import { Polyline, InfoWindow , Marker } from "react-bmapgl"
import axios from 'axios';
import { timeContext } from '../../Mymap';
import largeCar from '../../assets/images/large_car.png'
import largeVehicle from "../../assets/images/large_vehicle.png"
const { Search } = Input;
const large_car = new window.BMapGL.Icon(largeCar,
  new window.BMapGL.Size(30, 30),
  {
    anchor: new window.BMapGL.Size(10, 10)
  }
)
;
const large_vehicle = new window.BMapGL.Icon(largeVehicle,
  new window.BMapGL.Size(30, 30),
  {
    anchor: new window.BMapGL.Size(10, 10)
  }
)
;
export function VehicleSearch() {
  const [query, setQuery] = useState('');
  const [curLine, setCurLine] = useState(<></>)
  const [curPath, setCurPath] = useState([])
  const [prePath, setPrePath] = useState([])
  const [curMarker, setCurMarker] = useState(<></>)
  const [curInfowindow, setInfoWindow] = useState(<></>)
  const [carTraceLine, setCarTrace] = useState(<></>)
  const [carTraceDevices, setCarTraceDevices] = useState(<></>)
  const cartraces = useContext(CarTraceContext)
  const { tick, mapsec } = useContext(timeContext)
  function getPath(query){
    const carlocs = cartraces[query].map((item) => {
      return {
        lng: item[0],
        lat: item[1]
      }
    })
    // const carTraceDevices = cartraces[query].map((item) => item[3])
    // console.log(carTraceDevices)
    console.log(carTraceDevices)
    setCarTrace(
      <Polyline
        path={carlocs}
        strokeColor="#c0504e"
        cord="bd09ll" 
        strokeWeight={10}
        // onClick= {this.debug_info}
      ></Polyline>
    )
    
    setCarTraceDevices(
      <React.Fragment>
        {carlocs.map((item, index) => {
          return (
            <Marker
              icon={large_vehicle}
              position={item}
              key={index}
            ></Marker>
          )
        })}
      </React.Fragment>
    )
    
  }
  useEffect(() => {
    // console.log('query')
    if (cartraces !== null) {
      // console.log(Object.keys(cartraces))
      // console.log(query in (cartraces))
    }
    if (cartraces === null || query === '' || !(query in (cartraces))) {
      setQuery('')
      setCurPath([])
      setInfoWindow(<></>)
      setCurMarker(<></>)
      return;
    }
    getPath(query)
  }, [query]);
  // console.log(curLine)
  // console.log(curPath)
  // console.log(curPath.length !== 0)

  return (
    <div id = "SearchedVehicle">
      <Search
        placeholder="请输入搜索车辆"
        onSearch={(value) => setQuery(value)}
      />
      {carTraceLine}
      {carTraceDevices}
      {query && (
        <Button onClick={() => {
          setQuery('')
          setCurPath([])
          setInfoWindow(<></>)
          setCarTraceDevices(<></>)
          setCarTrace(<></>)
        }}>取消搜索</Button>
      )}
    </div>
  );
}