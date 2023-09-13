import React, { useContext } from "react";
import { timeContext, windowContext } from "../../Mymap";
import { CpuCmp } from "./CpuCmp";
import { IncCmp } from "./IncCmp";
import { MemCmp } from "./MemCmp";
import './StaCmp.css';
export const colors = [
  "#005f73",
  "#0a9396",
  "#94d2bd",
  "#e9d8a6"
]

const elementStyle = {
  height: '100%',
  width: '100%'
};

export function StaCmp() {
  const { mapsec } = useContext(timeContext);
  const screenSize = useContext(windowContext);

  return (
    <div className="StaCmp" style={{
      display: 'flex',
      height: '100%',
      width: "100%",
    }}>
      <div className="CpuCmp" style={elementStyle}>
        <CpuCmp mapsec={mapsec}></CpuCmp>
      </div>
      <div className="MemCmp" style={elementStyle}>
        <MemCmp mapsec={mapsec}></MemCmp>
      </div>
      <div className="IncCmp" style={elementStyle}>
        <IncCmp mapsec={mapsec}></IncCmp>
      </div>
    </div>
  );
}
