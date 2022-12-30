import React, { useState,useEffect } from 'react';
import { Button, List } from 'antd';
import { LogList } from './LogList';
import { VehicleSearch } from './VehicleSearch';
import { DeviceSearch } from './DeviceSearch';
import { createContext } from 'react';
import axios from 'axios';
import './SideBar.css'
export const CarTraceContext = createContext();

export function SideBar() {
  // 初始化一个状态变量selected，用于记录当前选中的按钮
  const [selected, setSelected] = useState(null);
  const [items, setItems] = useState([]);
  const [cartraces, setCarTraces] = useState(null);

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

  // 在组件挂载时，从本地的 JSON 文件中提取文字列表的数据
  useEffect(() => {
    let interval = null;

    const fetchData = () => {
      fetch('/path/to/your/data.json')
        .then(response => response.json())
        .then(data => setItems(data));
    };

    // 每隔 10 分钟就更新一次文字列表的数据
    interval = setInterval(fetchData, 10 * 60 * 1000);

    // 在组件卸载时，清除定时器
    return () => clearInterval(interval);
  }, []);

  return (
    <React.Fragment>
    <div className='SideBar'>
    <CarTraceContext.Provider value={cartraces}>
      {/* 车辆搜索 */}
      <VehicleSearch/>  
      {/* 门架搜索 */}
      <DeviceSearch/>
      {/* 日志信息 */}
      <LogList/>
      <LogList/>
      <Button onClick={() => setSelected('Button 1')}>Button 1</Button>
      <Button onClick={() => {setSelected('Button 2'); console.log('2')}}>Button 2</Button>
      <Button onClick={() => setSelected('Button 3')}>Button 3</Button>

      {selected && selected === 'Button 1' &&
        <VehicleSearch/>  
      }
      {selected && selected === 'Button 2' &&
      <DeviceSearch/> 
      }
    </CarTraceContext.Provider>
    </div>
    </React.Fragment>
    );
}
