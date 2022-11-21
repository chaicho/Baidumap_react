// import { Vehicle } from "./Vehicle";
import React, { useState } from 'react';
import {useInterval} from 'ahooks'
import axios from 'axios'
import { Vehicle } from './Vehicle';

export function VehicleList() {
    const [vechiles,setVehicles ] = useState(<div/>)
    const [vechilesdata,setVehiclesdata] = useState({'a' : {}})
    const [tick, setTick] = useState(0)
    const [count , setCount] = useState(1)
    useInterval(() => {
      if ( count < 200){
        axios.get(`Data/carInfo/5per/${count}.json`)
        .catch(function(response){
          console.log(response)
        })
        .then(function(res){
          const newdata= res['data']
          setVehiclesdata(
              {
              ...vechilesdata,
              ...newdata
              }
          )
          console.log(Object.keys(vechiles).length)
          console.log(vechiles)
        }
        )
        console.log(count)
      } 
      setVehicles(
        Object.keys(vechilesdata).map((vlp) => 
        <Vehicle 
            pos = {{lat: vechilesdata[vlp]['lat'] ,lng : vechilesdata[vlp]['lng']}}
            nxtpos = {{lat: vechilesdata[vlp]['nxtlat'] ,lng : vechilesdata[vlp]['nxtlng']}}
            nxttime = {vechilesdata[vlp]['nxttime']}
            id = {vlp}>    
        </Vehicle>
        )
      )
      // console.log(vechiles)
      setCount( v => v + 1)
    }  ,1000)    
    return (
      <ul>
      {vechiles}
      </ul>
    )
}