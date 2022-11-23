import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {Label,Marker} from 'react-bmapgl';
import { useInterval } from 'ahooks';
import { ProForm } from '@ant-design/pro-components';

export function Vehicle(props){
  const [pos,setPos] = useState(props.pos)
  const [speed,setSpeed] = useState({
    'lng' : (props.nxtpos['lng'] - props.pos['lng']) /  (props.FPS * (props.nxttime + 1)  ),
    'lat' : (props.nxtpos['lat'] - props.pos['lat']) /  (props.FPS * (props.nxttime + 1)  )
    })
  useEffect( () =>{
    // console.log('changespeed')
    setSpeed({
    'lng' : (props.nxtpos['lng'] - props.pos['lng']) /  (props.FPS * (props.nxttime + 1)  ),
    'lat' : (props.nxtpos['lat'] - props.pos['lat']) /  (props.FPS * (props.nxttime + 1)  )
    })

  }
  ,[props.nxttime])
  useEffect( () => {

    if(Object.keys(speed) !== 0){
      // console.log(pos)
      // console.log(speed)
      // console.log(props.tick)
      setPos(
      {
        'lng': pos['lng'] + speed['lng'],
        'lat': pos['lat'] + speed['lat']
      }
      )
  }
  },[props.tick])


  if(props.nxttime === -1){
    return <></>
  }
  return (
          <React.Fragment>
          {/* <Marker
          position={{ lng : props.pos['lng'], lat : props.pos['lat']}}
          icon =  'loc_blue'
          />             */}
          <Marker
          position={pos}
          />              
          {/* <Marker
          position={{ lng : props.nxtpos['lng'], lat : props.nxtpos['lat']}}
          icon =  'loc_blue'
          />  */}
          </React.Fragment>       
        )
  
}
  


