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
      console.log(Date())
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
            tick = {tick}
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