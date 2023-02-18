import { useInterval, useSafeState } from 'ahooks';
import React, { useEffect, useRef, useState } from 'react';
import CanvasJSReact from '../../lib/canvasjs.react';
const dataall = require('../../assets/statistics/resources.json')
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export function MemCmp(props) {
  const chartRef = useRef();
  const titles = ["ECC","ConC","PCC","INFUSE"]
  const [options, setOptions] = useState({
    theme: "light1",
    height: '180',  
    title: {
      text: "MEM Usage"
    },
    axisY: {
      title: "MEM Usage",
      includeZero: true,
      suffix: "%",
      maximum: 5
    },
    data: [{
      type: "column",
      yValueFormatString: "#,##0.0'%'",
      indexLabel: "{y}",
      dataPoints: [
        { label: "ECC", y: 0, color: "#81c2ea" },
        { label: "ConC", y: 0, color: "#81c2ea" },
        { label: "PCC", y: 0, color: "#81c2ea" },
        { label: "INFUSE", y: 0, color: "#81c2ea" },
      ]
    }]
  })
  useEffect(() => {
    var dpsColor, dpsTotal = 0, deltaY, yVal;
    var dps = chartRef.current.options.data[0].dataPoints;
    var chart = chartRef.current.chart;
    const cursecdata = dataall[String(props.mapsec)]
    console.log(cursecdata)
    for (var i = 0; i < dps.length; i++) {
      // deltaY = Math.round(2 + Math. random() * (-2 - 2));
      // yVal = deltaY + dps[i].y > 0 ? (deltaY + dps[i].y < 100 ? dps[i].y + deltaY : 100) : 0;
      yVal = cursecdata[titles[i]]['memUsage(%)']
      dps[i] = { label: titles[i], y: yVal };
      if (yVal > chart.options.axisY.maximum) {
        chart.options.axisY.maximum += 10
      }
      // dpsTotal += yVal;
    }

    chart.options.data[0].dataPoints = dps;
    setOptions(chart.options)
  }, [props.mapsec]);

  return (
    <div>
      <CanvasJSChart options={{ ...options }} ref={chartRef} />
    </div>
  );
}