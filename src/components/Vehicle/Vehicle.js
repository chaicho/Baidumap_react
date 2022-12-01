import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {Label,Marker} from 'react-bmapgl';
import { useInterval } from 'ahooks';
import { ProForm } from '@ant-design/pro-components';
const blue_car = new window.BMapGL.Icon('./blue_car.png', 
new window.BMapGL.Size(10, 20) );
export function Vehicle(props){
  // const [pos,setPos] = useState(props.pos)

  return (
          <React.Fragment>
          {/* <Marker
          position={{ lng : props.pos['lng'], lat : props.pos['lat']}}
          icon =  'loc_blue'
          />             */}
          <Marker
          icon = 'loc_blue'
          position={props.pos}
          />              
          {/* <Marker
          position={{ lng : props.nxtpos['lng'], lat : props.nxtpos['lat']}}
          icon =  'loc_blue'
          />  */}
          </React.Fragment>       
        )
  
}
  


