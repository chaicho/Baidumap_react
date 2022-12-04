import { Device } from "./Device";
import React, { useEffect, useState } from "react";
import { devicedata } from "../../Deviceinfo_bd";
import {useInterval} from 'ahooks'

const devices =  devicedata.map((device) =>{
  if(device.isValid === true) {
    return  <Device position = {{lng: device.经度,lat:device.纬度}} id = {device.门架HEX字符串}/>
  }
  else{
    return <></>
  }
  }
)
export function Devicelist(props){
  const [devices, setDevices] =  useState(<></>)
  useEffect(() => {
    console.log(props.display)
    if(props.display){
    setDevices(
        devices
    )
  }
  else{
    setDevices(<></>)
  }
  }
  ,[props.display])
  return(
    <React.Fragment>
      {devices  }
    </React.Fragment>
  )
}
