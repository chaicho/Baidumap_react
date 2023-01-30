import React, { useState, useEffect } from 'react';
import { Input, Button } from 'antd';
import { Marker } from 'react-bmap'
import { Deviceinfodict } from '../../ObjInfo'
import { Device } from '../Device/Device';
const { Search } = Input;

export function DeviceSearch() {
  const [query, setQuery] = useState('');
  const [curDevice, setCurDevice] = useState(<></>)

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
    console.log(curDevice)
  }, [query])


  return (
    <div>
      <Search
        placeholder="请输入搜索门架"
        onSearch={(value) => setQuery(value)}
      />
      {curDevice}
      {query && (
        <Button onClick={() => {
          setQuery('');
          setCurDevice(<></>);
        }}>取消搜索</Button>
      )
      }
    </div>
  )
}