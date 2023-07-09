import React, { useEffect, useState } from 'react';
import { Label, Marker } from 'react-bmapgl';
import blueCarUrl from '../../assets/images/blue_car.png'
const blue_car = new window.BMapGL.Icon(blueCarUrl,
  new window.BMapGL.Size(15, 15),
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



