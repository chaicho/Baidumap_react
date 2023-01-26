import React, { useContext, useEffect, useState, useRef } from "react";
import { timeContext, windowContext } from "../../Mymap";
import { Histogram } from "./Histogram";
import { SideBar } from "../SideBar/SideBar";
import { useInterval, useReactive } from 'ahooks';
import { StaLine } from "./StaLine";
import { StaBar } from "./StaBar";
import { DynaChart } from "./DynaChart";
import { DynaSeries } from "./DynaSeries";
import './StaCmp.css';

const screenHeight = window.innerHeight;
const screenWidth = window.innerWidth;
const elementHeight = screenHeight * 0.35;
const elementWidth = screenWidth * 0.2;

const map = document.querySelector('.mymap');


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
    height: screenSize['height'] * 0.3
  }
  // console.log(screenSize)

  return (
    <React.Fragment>
      <div className="StaCmp" style={{
        height: screenSize['height'],
        overflowY: 'hidden'
      }}>
        <div
          style={elementStyle}
        >
          <DynaChart tick={tick} height={100}></DynaChart>
        </div>

        <div
          style={elementStyle}
        >
          <DynaSeries tick={tick} ></DynaSeries>
        </div>


      </div>
    </React.Fragment>


  )
}