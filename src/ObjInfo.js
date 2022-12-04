import { devicedata } from "./Deviceinfo_bd";
import { Road } from "./components/Road/Road";
import React, { useEffect, useState } from "react";
function createDevicedict(dict){
  console.log('createdict')
  devicedata.map((device) => {
    const id = device.门架HEX字符串;
    dict[id] = device
  }
  )
}
export const Deviceinfodict = {} 
createDevicedict(Deviceinfodict)


