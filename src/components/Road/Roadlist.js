import { Road } from "./Road";
import React, { useEffect, useState } from "react";
import { devicedata } from "../../Deviceinfo_bd";
import { Deviceinfodict } from "../../ObjInfo";
const roads_static =  devicedata.map((device) =>{
    console.log('Calc_Road')
    if(device.isValid === false){
       return <></>
    }
    const start = new window.BMapGL.Point(device.经度, device.纬度)
    for(var  i in device.下游门架) {
        const nextid = (device.下游门架)[i]
        if (Deviceinfodict[nextid]){
          const nextdevice = Deviceinfodict[nextid]
          if(nextdevice.isValid === false){
            continue
          }
          const end = new window.BMapGL.Point(nextdevice.经度,nextdevice.纬度) 
          if(start.lng <= 0.1 || end.lng <= 0.1 || end.lng < end.lat || start.lng < start.lat) {
            break
          }
          return (<Road start = {start} end ={end} startid = {device.门架HEX字符串} endid = {nextid} />)
        }
    }
  }
  
)
export function Roadlist(props){
  // console.log(prosp.)
  if(props.display){
    return(
      <React.Fragment>
        {roads_static}
      </React.Fragment>
    )
  }
  else{
    return <></>
  }
}
