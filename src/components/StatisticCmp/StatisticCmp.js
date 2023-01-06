import React, { useContext, useEffect,useState,useRef} from "react";
import './StatisticCmp.css';
import { timeContext } from "../../Mymap";
import { Histogram } from "./Histogram";
import { SideBar } from "../SideBar/SideBar";
import { useInterval, useReactive } from 'ahooks';
import { StaLine } from "./StaLine";
import { StaBar } from "./StaBar";
import { DynaChart } from "./DynaChart";
import { DynaSeries } from "./DynaSeries";
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
  const tick = useContext(timeContext);
  return (
    <React.Fragment>
    <div className="StaCmp">
    {/* <div  
    style=  {elementStyle}
      >
    <Histogram tick = {tick}></Histogram>
    </div>
    <div  
    style=  {elementStyle}
      >
    <StaBar tick = {tick}></StaBar>
    </div>  

     </div>
  
    <div  
    style=  {elementStyle}
      >
      <StaLine tick = {tick}></StaLine>
    </div> */}
        
    <div  
    style=  {elementStyle}
      >
        <DynaChart tick = {tick} ></DynaChart>
    </div>

    <div  
    style=  {elementStyle}
      >
        <DynaSeries tick = {tick} ></DynaSeries>
    </div>

    
    </div>
    </React.Fragment>
  

  )
}