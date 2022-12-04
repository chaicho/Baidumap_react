import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {Label,Marker} from 'react-bmapgl';
import { useInterval } from 'ahooks';
import { ProForm } from '@ant-design/pro-components';
const blue_car = new window.BMapGL.Icon('./blue_car.png', 
new window.BMapGL.Size(15, 25) ,
{
  imageOffset: new window.BMapGL.Size(0,0),
  imageSize: new window.BMapGL.Size(15, 25)
}
)
;
export function Vehicle(props){
  const [icon,setIcon] = useState(blue_car)
  
  return (
          <React.Fragment>
          {/* <Marker
          position={{ lng : props.pos['lng'], lat : props.pos['lat']}}
          icon =  'loc_blue'
          />             */}
          <Marker
          icon = {icon}
          position={props.pos}
          isTop = {true}
          />              
          {/* <Marker
          position={{ lng : props.nxtpos['lng'], lat : props.nxtpos['lat']}}
          icon =  'loc_blue'
          />  */}
          </React.Fragment>       
        )
  
}
  


