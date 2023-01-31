// import { Vehicle } from "./Vehicle";
import React, { useEffect, useState, useContext } from 'react';
import { timeContext } from '../../Mymap';
import axios from 'axios'
import { Vehicle } from './Vehicle';
import { Marker } from 'react-bmapgl'

export function VehicleList() {
  // const [vechiles,setVehicles ] = useState(<></>)
  const [vechilesdata, setVehiclesdata] = useState({})
  const [count, setCount] = useState(0)
  const [trick, setTrick] = useState(<></>)
  const { tick, mapsec } = useContext(timeContext)
  const FPS = 2
  useEffect(() => {
    // setTrick(  <Marker position={{ lng:0 , lat: 0 }} /> )
  }, [])
  useEffect(() => {
    axios.get(`Data/carInfo/DoubleKey5per/${tick}.json`)
      .catch(function (response) {
        console.log(response)
      })
      .then(function (res) {
        const newdata = res['data']
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
          if (vechilesdata[vlp]['nxttime'] === -1) {
            return <></>
          }
          else {
            return <Vehicle
              pos={{ lat: vechilesdata[vlp]['lat'], lng: vechilesdata[vlp]['lng'] }}
              tick={tick}
            >
            </Vehicle>
          }
        }
        )
      )
      }
      {/* <Marker position={{ lng:0 , lat: 0 }} /> */}
      {trick}
    </React.Fragment>
  )
}