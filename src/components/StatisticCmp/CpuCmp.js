import { useInterval, useSafeState } from 'ahooks';
import React, { useEffect, useRef, useState } from 'react';
import CanvasJSReact from '../../lib/canvasjs.react';
const dataall = require('../../assets/statistics/resources.json')
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export function CpuCmp(props) {
  const chartRef = useRef();
  const [dps, setDps] = useState(
    [
      { label: "ECC", y: 0, color: "#81c2ea" },
      { label: "ConC", y: 0, color: "#81c2ea" },
      { label: "PCC", y: 0, color: "#81c2ea" },
      { label: "INFUSE", y: 0, color: "#81c2ea" }]
  )
  const yValueFormatString = "#,##0.0'%'"
  const titles = ["ECC", "ConC", "PCC", "INFUSE"]
  const [stripLineValue, setOracle] = useState(0)
  const [options, setOptions] = useState({
    theme: "light1",
    height: '180',
    title: {
      text: "Cases"
    },
    axisY: {
      title: "Cases",
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
      yVal = cursecdata[titles[i]]['cpuUsage(%)']
      new_dps[i] = { label: titles[i], y: yVal };
    }
    setDps(new_dps)
  }, [props.mapsec]);
  return (
    <div>
      <CanvasJSChart options={{ ...options }} ref={chartRef} />
    </div>
  );
}