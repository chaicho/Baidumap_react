// import { Vehicle } from "./Vehicle";
import React, { useEffect, useState,useContext } from 'react';
import { timeContext } from '../../Mymap';
import axios from 'axios'
import { Vehicle } from './Vehicle';
import { Marker } from 'react-bmapgl'

export function VehicleList() {
    // const [vechiles,setVehicles ] = useState(<></>)
    const [vechilesdata,setVehiclesdata] = useState({})
    const tick = useContext(timeContext)
    const [count , setCount] = useState(0)
    const FPS = 2
    useEffect(() => {
        axios.get(`Data/carInfo/DoubleKey5per/${tick}.json`)
        .catch(function(response){
          console.log(response)
        })
        .then(function(res){
          const newdata= res['data']
          setVehiclesdata(
              newdata
          )
        }
        )
      }, [tick]);
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
       {new Date(1635696000000 + tick * FPS * 12000).toLocaleString()}
      </div>
      </React.Fragment>
    )
}