import { useInterval, useSafeState } from 'ahooks';
import React, { useEffect, useRef, useState } from 'react';
import { colors } from './StaCmp';
import CanvasJSReact from '../../lib/canvasjs.react';
const dataall = require('../../assets/statistics/resources.json')
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export function MemCmp(props) {
  const chartRef = useRef();
  const [dps, setDps] = useState(
    [
      { label: "ECC", y: 0, color: "#81c2ea" },
      { label: "ConC", y: 0, color: "#81c2ea" },
      { label: "PCC", y: 0, color: "#81c2ea" },
      { label: "INFUSE", y: 0, color: "#81c2ea" }]
  )
  const yValueFormatString = "#,##0.00'%'"
  const titles = ["ECC", "ConC", "PCC", "INFUSE"]
  const [stripLineValue, setOracle] = useState(0)
  const [options, setOptions] = useState({
    theme: "light1",
    title: {
      text: "MemInfo"
    },
    axisY: {
      title: "MemInfo",
      includeZero: true,
      suffix: "%",
      // maximum: 30
    },
    data: [{
      type: "column",
      yValueFormatString: yValueFormatString,
      indexLabel: "{y}",
      dataPoints: dps

    }]
  })
  useEffect(() => {
    var dpsColor, dpsTotal = 0, deltaY, yVal;
    var new_dps = dps;
    const cursecdata = dataall[String(props.mapsec)]
    for (var i = 0; i < dps.length; i++) {
      yVal = cursecdata[titles[i]]['memUsage(%)']
      new_dps[i] = { label: titles[i], y: yVal,color: colors[i] };
    }
    setDps(new_dps)
  }, [props.mapsec]);
  return (
    <div style={{width : "100%", height : "100%"}}>
      <CanvasJSChart options={{ ...options }} ref={chartRef} containerProps = {{ width: "100%", position: "relative",height:"100%"}}/>
    </div>
  );
}