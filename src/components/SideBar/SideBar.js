import React, { useState,useEffect, useContext } from 'react';
import { Button, List } from 'antd';
import { LogList } from './LogList';
import { VehicleSearch } from './VehicleSearch';
import { DeviceSearch } from './DeviceSearch';
import { createContext } from 'react';
import axios from 'axios';
import './SideBar.css'
import { timeContext,windowContext } from '../../Mymap';
import {  RuleLogs } from './RuleLogs';
import {  CarLogs } from './CarLogs';
import { GatePairLogs } from './GatePairLogs';
export const CarTraceContext = createContext();

export function SideBar() {
  // 初始化一个状态变量selected，用于记录当前选中的按钮
  const [selected, setSelected] = useState(null);
  const [items, setItems] = useState([]);
  const [cartraces, setCarTraces] = useState(null);
  const {tick,mapsec} = useContext(timeContext)
  const screenSize  = useContext(windowContext)
  //获取本地的车辆轨迹数据
  useEffect(() => {
    axios.get('Data/carInfo/car_trace_db.json')
    .catch(function(response){
      console.log(response)
    })
    .then(function(response){
      setCarTraces(response['data'])
      // console.log(response)
    })
    // console.log(cartraces)
  }
    
  , []);

  

  return (
    <React.Fragment>
    <div className='SideBar'>
    <CarTraceContext.Provider value={cartraces}>
      {/* 车辆搜索 */}
      {/* <VehicleSearch/>   */}
      {/* 门架搜索 */}
      {/* <DeviceSearch/> */}
      {/* 日志信息 */}
      <RuleLogs tick = {tick} sec = {mapsec}></RuleLogs>  
      <CarLogs tick = {tick} sec = {mapsec}></CarLogs>
      <GatePairLogs tick = {tick} sec = {mapsec}></GatePairLogs>

      {/* <Button onClick={() => setSelected('Button 1')}>Button 1</Button>
      <Button onClick={() => {setSelected('Button 2'); console.log('2')}}>Button 2</Button>
      <Button onClick={() => setSelected('Button 3')}>Button 3</Button>

      {selected && selected === 'Button 1' &&
        <VehicleSearch/>  
      }
      {selected && selected === 'Button 2' &&
      <DeviceSearch /> 
      } */}
    </CarTraceContext.Provider>
    </div>
    </React.Fragment>
    );
}

export const captionStyle = {
  captionSide: 'top',
  position: 'sticky',
  top: 0,
  backgroundColor: '#f7bb88',
  fontSize: '1.5em',
  fontWeight: 'bold',
  textAlign: 'left',
  padding: '10px',
  color: 'black',
  zIndex: 100
}