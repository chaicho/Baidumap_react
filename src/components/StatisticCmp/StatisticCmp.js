import React, { useEffect,useState } from "react";
import './StatisticCmp.css'
import { Histogram } from "./Histogram"
import { useInterval } from 'ahooks';
import { StaLine } from "./StaLine";
const screenHeight = window.innerHeight;
const screenWidth = window.innerWidth;
const elementHeight = screenHeight * 0.35;
const elementWidth = screenWidth * 0.2;

// const elementWidth = map.offsetWidth * 0.333;
const map = document.querySelector('.mymap');
const elementStyle = {
  flex : 1
};

export function StaCmp(){
  const [tick, setTick] = useState(0);
  useInterval(()=>
  {
    setTick(tick + 1)
  },1000)
  return (
    <React.Fragment>
    <div className="StaCmp">
    <div  
    style=  {elementStyle}
      >
    <Histogram tick = {tick}></Histogram>
    </div>
    <div  
    style=  {elementStyle}
      >
    <Histogram tick = {tick}></Histogram>
    </div>

    </div>
    
    <div  
    style=  {elementStyle}
      >
      <StaLine tick = {tick}></StaLine>
    </div>
    </React.Fragment>
  )
}