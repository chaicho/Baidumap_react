import React, { useState, useEffect } from 'react';
import { Input, Button } from 'antd';
import { Marker,InfoWindow } from 'react-bmapgl'
import { Deviceinfodict } from '../../ObjInfo'
import { Device } from '../Device/Device';
const { Search } = Input;

export function DeviceSearch() {
  const [query, setQuery] = useState('');
  const [curDevice, setCurDevice] = useState(<></>)
  const [curInfowindow,setInfoWindow] = useState(<></>)
  useEffect(() => {
    console.log('query')
    console.log(Deviceinfodict)
    if (Deviceinfodict === null || query === '' || !(query in (Deviceinfodict))) {
      return;
    }
    const targetDevice = Deviceinfodict[query]
    console.log(targetDevice.经度, targetDevice.纬度)
    setCurDevice(
      <Marker position={{ lng: targetDevice.经度, lat: targetDevice.纬度 }}
        isTop={true}
      />);
    setInfoWindow(
      <InfoWindow position={{ lng: targetDevice.经度, lat: targetDevice.纬度 }}
      title="门架名称"
      text={ `${targetDevice.门架名称}`}
      />
    )
    console.log(curDevice)
  }, [query])


  return (
    <div>
      <Search
        placeholder="请输入搜索门架"
        onSearch={(value) => setQuery(value)}
      />
      {curDevice}
      {curInfowindow}
      {/* <Marker position  =  {new window.BMapGL.Point( 117.09736299294687 ,37.28892141923907)}/> */}
      {query && (
        <Button onClick={() => {
          setQuery('');
          setCurDevice(<></>);
          setInfoWindow(<></>)
        }}>取消搜索</Button>
      )
      }
    </div>
  )
}