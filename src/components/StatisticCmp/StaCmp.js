import React, { useContext, useEffect, useState, useRef } from "react";
import { timeContext, windowContext } from "../../Mymap";
import { Histogram } from "./Histogram";
import { SideBar } from "../SideBar/SideBar";
import { useInterval, useReactive } from 'ahooks';
import { StaLine } from "./StaLine";
import { StaBar } from "./StaBar";
import { DynaChart } from "./DynaChart";
import { CpuCmp } from "./CpuCmp";
import { IncCmp } from "./IncCmp";
import { MemCmp } from "./MemCmp";
import { DynaSeries } from "./DynaSeries";
import './StaCmp.css';


export const colors = [
  "#005f73",
  "#0a9396",
  "#94d2bd",
  "#e9d8a6"
]

const elementStyle = {
  flex: 1,
};

export function StaCmp() {
  const { tick, mapsec } = useContext(timeContext);
  const screenSize = useContext(windowContext)
  const parentStyle = {
    // display: "flex",
    // flexWrap: "wrap",
    // alignContent: "flex-start",
    backgroundColor: '#f2f2f2',
    // height: screenSize['height'] * 0.3
    height:'30%'
  }
  // console.log(screenSize)

  return (
    <React.Fragment>
      <div className="StaCmp" style={{
        height: '100%',
        width: "100%",
        overflowY: 'hidden'
      }}>
        <div
          style={elementStyle}
        >
            <CpuCmp mapsec = {mapsec}></CpuCmp>
        </div>

        <div
          style={elementStyle}
        >
          <MemCmp mapsec = {mapsec} ></MemCmp>
        </div>
        <div
          style={elementStyle}
        >
          <IncCmp mapsec = {mapsec} ></IncCmp>
        </div>


      </div>
    </React.Fragment>


  )
}