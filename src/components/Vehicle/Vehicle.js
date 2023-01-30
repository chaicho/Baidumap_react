import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Label, Marker } from 'react-bmapgl';
import { useInterval } from 'ahooks';
import { ProForm } from '@ant-design/pro-components';
const blue_car = new window.BMapGL.Icon('./blue_car.png',
  new window.BMapGL.Size(15, 25),
  {
    anchor: new window.BMapGL.Size(10, 10)
  }
)
  ;
export function Vehicle(props) {

  return (
    <React.Fragment>

      <Marker
        icon={blue_car}
        position={props.pos}
        isTop={true}
      />
    </React.Fragment>
  )

}



