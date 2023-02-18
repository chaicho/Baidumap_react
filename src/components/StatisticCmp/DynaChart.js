import { useInterval, useSafeState } from 'ahooks';
import React, { useEffect, useRef, useState } from 'react';
import CanvasJSReact from '../../lib/canvasjs.react';
const dataall = require('../../assets/statistics/data.json')
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export function DynaChart(props) {
  const chartRef = useRef();

  const [options, setOptions] = useState({
    theme: "light1",
    height: `200`,
    title: {
      text: "CPU Usage"
    },
    axisY: {
      title: "CPU Usage",
      includeZero: true,
      suffix: "%",
      maximum: 100
    },
    data: [{
      type: "column",
      yValueFormatString: "#,###'%'",
      indexLabel: "{y}",
      dataPoints: [
        { label: "Core 1", y: 68, color: "#81c2ea" },
        { label: "Core 2", y: 3, color: "#81c2ea" },
        { label: "Core 3", y: 8, color: "#81c2ea" },
        { label: "Core 4", y: 87, color: "#81c2ea" },
      ]
    }]
  })
  useEffect(() => {
    var dpsColor, dpsTotal = 0, deltaY, yVal;
    var dps = chartRef.current.options.data[0].dataPoints;
    var chart = chartRef.current.chart;
    if (props.tick > 90) {
      return
    }
    const cursecdata = dataall[String(props.tick)]
    console.log(cursecdata)
    for (var i = 0; i < dps.length; i++) {
      // deltaY = Math.round(2 + Math. random() * (-2 - 2));
      // yVal = deltaY + dps[i].y > 0 ? (deltaY + dps[i].y < 100 ? dps[i].y + deltaY : 100) : 0;
      yVal = cursecdata[i]['cnt']
      dpsColor = yVal >= 90 ? "#e40000" : yVal >= 70 ? "#ec7426" : yVal >= 50 ? "#81c2ea" : "#88df86 ";
      dps[i] = { label: "Core " + (i + 1), y: yVal, color: dpsColor };
      dpsTotal += yVal;
    }

    chart.options.data[0].dataPoints = dps;
    // console.log(chart.options.data[0].dataPoints)
    // chart.options.title.text = "CPU Usage " + Math.round(dpsTotal / 6) + "%";
    // chart.setState(options:newoption)
    setOptions(chart.options)
  }, [props.tick]);

  return (
    <div>
      <CanvasJSChart options={{ ...options }} ref={chartRef} />
    </div>
  );
}