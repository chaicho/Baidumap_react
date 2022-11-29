// import { Vehicle } from "./Vehicle";
import React, { useState } from 'react';
import {useInterval} from 'ahooks'
import axios from 'axios'
import { Vehicle } from './Vehicle';
import { Marker } from 'react-bmapgl'

export function VehicleList() {
    // const [vechiles,setVehicles ] = useState(<></>)
    const [vechilesdata,setVehiclesdata] = useState({})
    const [tick, setTick] = useState(0)
    const [count , setCount] = useState(1)
    const FPS = 2
    useInterval(() => { 
      if(tick % FPS === 0){
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
          setCount(v => v + 1 )
        }
        )
      }

      setTick( v => v + 1 )
      },
      1000 / FPS
    )
    return (
      <React.Fragment>
      <ul>
      {(
        Object.keys(vechilesdata).map((vlp) => { 
        if(vechilesdata[vlp]['nxttime'] === -1){ 
          return <></>
        }
        else{
          return <Vehicle 
            pos = {{lat : vechilesdata[vlp]['lat'] ,lng : vechilesdata[vlp]['lng']}}
            nxtpos = {{lat : vechilesdata[vlp]['nxtlat'] ,lng : vechilesdata[vlp]['nxtlng']}}
            nxttime = {vechilesdata[vlp]['nxttime']}
            tick = {tick}
            id = {vlp}
            FPS = {FPS}
          >    
          </Vehicle>
          }
        }
        )
      )
      }
      </ul>

      </React.Fragment>
    )
}