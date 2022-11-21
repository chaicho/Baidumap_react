import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {Label,Marker} from 'react-bmapgl';
import { useInterval } from 'ahooks';

export function Vehicle(props){
  const FPS = 5
  const [pos,setPos] = useState(props.pos)
  const [speed,setSpeed] = useState({
    'lng' : (props.nxtpos['lng'] - props.pos['lng']) /  (FPS * props.nxttime / 60000  ),
    'lat' : (props.nxtpos['lat'] - props.pos['lat']) /  (FPS * props.nxttime / 60000  )
  }) 
  const [tick, setTick] = useState(0)  
  useInterval( () => {
    setPos({
      'lng': pos['lng'] + speed['lng'],
      'lat': pos['lat'] + speed['lat']
    })
    if (props.id == '冀A0X492'){
      console.log(pos)
    }
    // console.log(props.id)
    setTick( tick + 1 )
  }
  , 1000 / FPS) 
  return (
          <Marker
          position={pos}

          />                     
        )
}
  


