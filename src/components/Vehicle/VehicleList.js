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
    const [count , setCount] = useState(0)
    const FPS = 2
    useInterval(() => {
        setTick( v => v + 1 )
        if(tick < 10) {
          return
        }
        axios.get(`Data/carInfo/5per20sec/${count}.json`)
        .catch(function(response){
          console.log(response)
        })
        .then(function(res){
          const newdata= res['data']
          setVehiclesdata(
              newdata
          )
          setCount(v => v + 1 )
        }
        )
      // console.log(Date(),tick)
      },
      1000 / FPS
    )
    return (
      <React.Fragment>
      {(
        Object.keys(vechilesdata).map((vlp) => { 
        if(vechilesdata[vlp]['nxttime'] === -1){ 
          return <></>
        }
        else{
          return <Vehicle 
            pos = {{lat : vechilesdata[vlp]['lat'] ,lng : vechilesdata[vlp]['lng']}}
            tick = {tick}
          >    
          </Vehicle>
          }
        }
        )
      )
      }
      <div className="time">
       {new Date(1635696000000 + count * 12000).toLocaleString()}
      </div>
      </React.Fragment>
    )
}