import React, { useState, useEffect, useContext } from 'react';
import { Input,Button} from 'antd';
import { CarTraceContext } from './SideBar';
import {Polyline} from "react-bmapgl" 
const { Search } = Input;

export function VehicleSearch() { 
  const [query, setQuery] = useState('');
  const [curTrace,setCurTrace] =  useState([])
  const [curLine, setCurLine] = useState(<></>)
  const cartraces = useContext(CarTraceContext)
  useEffect(() => {
    console.log('query')
    if(cartraces !== null){
      // console.log(Object.keys(cartraces))
      // console.log(query in (cartraces))
    }
    if(cartraces === null || query === '' || !(query in ( cartraces))  ) {
      return ;
    }

    setCurTrace(cartraces[query].map((loc) => {return { 'lng': loc[0], 'lat': loc[1]}}))
    setCurLine(<Polyline             
            path = {
              cartraces[query].map((loc) => {return { 'lng': loc[0], 'lat': loc[1]}})
            }
            strokeColor="#708090"
            cord = 	"bd09ll" 
            strokeWeight={10}/>
    )
    // console.log(...curTrace)

  }, [query]);
  // console.log(curLine)
  return (
    <div>
      <Search
        placeholder="请输入搜索车辆"
        onSearch={(value) => setQuery(value)}
      />
      {curLine}
      {query && (
        <Button onClick={() => {
            setQuery('');
            setCurTrace('[]');
            setCurLine(<></>);}}>取消搜索</Button>
      )}
    </div>
  );
}