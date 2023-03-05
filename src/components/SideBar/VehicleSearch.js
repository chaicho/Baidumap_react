import React, { useState, useEffect, useContext } from 'react';
import { Input, Button } from 'antd';
import { CarTraceContext } from './SideBar';
import { Polyline, InfoWindow } from "react-bmapgl"
import axios from 'axios';
import { timeContext } from '../../Mymap';
import { Vehicle } from '../Vehicle/Vehicle';
import largeCar from '../../assets/images/blue_car.png'
const { Search } = Input;
const large_blue_car = new window.BMapGL.Icon(largeCar,
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

  const cartraces = useContext(CarTraceContext)
  const { tick, mapsec } = useContext(timeContext)
  function getPath(query, tick) {
    const curtime = mapsec;
    console.log(curtime);

    setPrePath(cartraces[query].map((loc) => {
      if (loc[2] + 20000 >= curtime) {
        return null;
      }
      else {
        return { 'lng': loc[0], 'lat': loc[1] }
      }
    }).filter(item => item !== null));
    console.log(query)
    const lastinfo =cartraces[query][cartraces[query].length - 1]
    const lastsec = lastinfo[2]
    console.log(lastsec)
    if ( mapsec > lastsec ) {
      console.log('finish')
      setCurPath(prePath)
      setInfoWindow(<InfoWindow
        position={{ 'lng': lastinfo[0], 'lat': lastinfo[1] }}
        title="检索车辆"
        text={`车辆${query}已离开高速`} />)
      return
    }
    axios.get(`Data/carInfo/DoubleKey5per/${tick}.json`)
      .catch(function (response) {
        console.log(response)
      })
      .then(function (res) {
        // console.log(query in res['data']);
        if (query in res['data']) {
          setCurPath([
            ...prePath,
            res['data'][query]
          ])
          console.log('get loc')
          setInfoWindow(<InfoWindow
            position={res['data'][query]}
            title="检索车辆"
            text={`车辆${query}正在行驶中`} />)
          setCurMarker(
          <Vehicle>

          </Vehicle>
          )
          setCurLine()
        }
      })
    console.log([mapsec, curPath])

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
    getPath(query, tick)
  }, [query, tick]);
  // console.log(curLine)
  // console.log(curPath)
  // console.log(curPath.length !== 0)

  return (
    <div>
      <Search
        placeholder="请输入搜索车辆"
        onSearch={(value) => setQuery(value)}
      />
      {curPath.length !== 0 && <Polyline
        path={[...curPath]}
        strokeColor="#c0504e"
        cord="bd09ll"
        strokeWeight={10} />
      }
      {curInfowindow}
      {query && (
        <Button onClick={() => {
          setQuery('')
          setCurPath([])
          setInfoWindow(<></>)
        }}>取消搜索</Button>
      )}
    </div>
  );
}