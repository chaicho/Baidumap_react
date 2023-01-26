import React, { useState, useEffect, useContext } from 'react';
import { Input, Button } from 'antd';
import { CarTraceContext } from './SideBar';
import { Polyline } from "react-bmapgl"
import axios from 'axios';
import { timeContext } from '../../Mymap';
const { Search } = Input;

export function VehicleSearch() {
  const [query, setQuery] = useState('');
  const [curLine, setCurLine] = useState(<></>)
  const [curPath, setCurPath] = useState([])
  const [prePath, setPrePath] = useState([])
  const cartraces = useContext(CarTraceContext)
  const { tick, mapsec } = useContext(timeContext)
  function getPath(query, tick) {
    const curtime = tick * 20000 + 1635696000000;
    // console.log(curtime);
    setPrePath(cartraces[query].map((loc) => {
      if (loc[2] + 20000 >= curtime) {
        return null;
      }
      else {
        return { 'lng': loc[0], 'lat': loc[1] }
      }
    }).filter(item => item !== null));
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
          setCurLine()
        }
      })
    // console.log([tick, curPath])


  }
  useEffect(() => {
    console.log('query')
    if (cartraces !== null) {
      // console.log(Object.keys(cartraces))
      // console.log(query in (cartraces))
    }
    if (cartraces === null || query === '' || !(query in (cartraces))) {
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
             path = {[...curPath]}
             strokeColor="#708090"
             cord = 	"bd09ll" 
             strokeWeight={10}/> 
      }
      {query && (
        <Button onClick={() => {
          setQuery('');
          setCurLine(<></>);
        }}>取消搜索</Button>
      )}
    </div>
  );
}