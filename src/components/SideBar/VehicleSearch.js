import React, { useState, useEffect, useContext } from 'react';
import { Input,Button} from 'antd';
import { CarTraceContext } from './SideBar';
import {Polyline} from "react-bmapgl" 
import axios from 'axios';
import { timeContext } from '../../Mymap';
const { Search } = Input;

export function VehicleSearch() { 
  const [query, setQuery] = useState('');
  const [curLine, setCurLine] = useState(<></>)
  const cartraces = useContext(CarTraceContext)
  const tick = useContext(timeContext)
  function getPath(query,tick){
    const curtime = tick * 20000 + 1635696000000;    
    console.log(curtime);
    let prePath =  cartraces[query].map((loc) => {
    if(loc[2] + 20000 >= curtime ){
        return null;
      }  
    else{
        return { 'lng': loc[0], 'lat': loc[1]}
      }
    });
    let curloc = null;
    axios.get(`Data/carInfo/DoubleKey5per/${tick}.json`)
      .catch(function(response){
        console.log(response)
      })
      .then(function(res){
        // console.log(query in res['data']);
        if(query in res['data']){
          curloc =  res['data'][query];
        }
        console.log([tick,curloc])
     })
     console.log([tick,curloc])

     return [
       ...prePath,
       curloc
     ].filter(item => item !== null) 
    
  }
  useEffect(() => {
    console.log('query')
    if(cartraces !== null){
      // console.log(Object.keys(cartraces))
      // console.log(query in (cartraces))
    }
    if(cartraces === null || query === '' || !(query in ( cartraces))  ) {
      return ;
    }
    let curpath =  getPath(query,tick)
    console.log(curpath)
    // if(curpath !== []){
    //   setCurLine(<Polyline             
    //         path = {curpath}
    //         strokeColor="#708090"
    //         cord = 	"bd09ll" 
    //         strokeWeight={10}/>
    //   )
    // }
    // console.log(...curTrace)

  }, [query,tick]);
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
            setCurLine(<></>);}}>取消搜索</Button>
      )}
    </div>
  );
}