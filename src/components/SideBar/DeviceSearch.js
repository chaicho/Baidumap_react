import React, { useState, useEffect } from 'react';
import { Input,Button } from 'antd';
import { Marker }  from 'react-bmap'
import { Deviceinfodict } from '../../ObjInfo'
const { Search } = Input;

export function DeviceSearch() {
  const [query, setQuery] = useState('');
  const [curDevice,setCurDevice] =  useState(<></>)
  
  useEffect(() => {
    console.log('query')
    if(Deviceinfodict === null || query === '' || !(query in ( Deviceinfodict))  ) {
      return ;
    }
    const targetDevice = Deviceinfodict[query]
    setCurDevice( 
    <Marker position  =  {new window.BMapGL.Point(Math.max(targetDevice.经度, targetDevice.纬度),Math.min(targetDevice.经度, targetDevice.纬度))}/>, [query]);
    }
  ,[query])
  
  
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
            setCurDevice(<></>);}}>取消搜索</Button>
      )
      }
    </div>
  )
}