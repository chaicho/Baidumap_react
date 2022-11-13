// import { Vehicle } from "./Vehicle";
import React, { useState, useEffect, useRef } from 'react';
import {useInterval} from 'ahooks'
const vehicleInfo = require.context('../../assets/carInfo',false,/\.json$/)
export function VehicleList() {
    const [Vehicles,setVehicles ] = useState({})
    const [count , setCount] = useState(1)
    useInterval(() => {
      const newVehicles = vehicleInfo(`./${count}.json`)
      if ( count < 20){
        setVehicles(
          {
          ...Vehicles,
          ...newVehicles  
          }    
        )
      }
      console.log(count)
      setCount( v => v + 1)
    },1000)
    return (
     <React.Fragment>
      
     </React.Fragment>  
    )
}