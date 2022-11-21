import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {Label,Marker} from 'react-bmapgl';
import { useInterval } from 'ahooks';

export function Vehicle(props){
  const FPS = 2
  const [pos,setPos] = useState(props.pos)
  const [speed,setSpeed] = useState({})
  const [tick, setTick] = useState(0)  
  useEffect( () =>{
    setSpeed({
    'lng' : (props.nxtpos['lng'] - props.pos['lng']) /  (FPS * (props.nxttime + 1)  ),
    'lat' : (props.nxtpos['lat'] - props.pos['lat']) /  (FPS * (props.nxttime  + 1)  )
    })
  }
  ,[props.nxttime])
  useInterval( () => {
    setPos({
      'lng': pos['lng'] + speed['lng'],
      'lat': pos['lat'] + speed['lat']
    })
    // console.log(props.id)
    setTick( tick + 1 )
    if(props.nxttime === -1){
      return;
    }
  }
  , 1000 / FPS) 
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
  


