import { Device } from "./Device";
import React, { useEffect, useState } from "react";
import { devicedata } from "../../Deviceinfo_bd";
import { useInterval } from 'ahooks'

const devices_static = devicedata.map((device) => {
  if (device.isValid === true) {
    return <Device position={{ lng: device.经度, lat: device.纬度 }} id={device.门架HEX字符串}  key={device.门架HEX字符串} />
  }
  else {
    return <></>
  }
}
)
export function Devicelist(props) {
  if (props.display) {
    return (
      <React.Fragment>
        {devices_static}
      </React.Fragment>
    )
  }
  else {
    return <></>
  }
}
