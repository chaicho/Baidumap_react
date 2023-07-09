import React, { useState, useRef, useEffect } from 'react';
import CanvasJSReact from '../../lib/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const dataall = require('../../assets/statistics/resources.json')


export function DynaSeries(props) {
  const seriesRef = useRef();
  const titles = ["ECC", "ConC", "PCC", "INFUSE"]

  const [data, setData] = useState([
    [],
    [],
    [],
    [],
  ]);

  const [xValue, setXValue] = useState(0);
  const yValueFormatString =    "#,##0.0'%'"

  const options = {
    zoomEnabled: true,
    theme: "light1",
    height: '200',
    title: {
      text: "CPU Usage"
    },
    axisX: {
      // title: "chart updates every 2 secs"
    },
    axisY: {
      title: "CPU Usage",
      includeZero: true,
      suffix: "%",
      maximum: 30
    },
    toolTip: {
      shared: true
    },
    legend: {
      cursor: "pointer",
      verticalAlign: "top",
      fontSize: 18,
      fontColor: "dimGrey",
      // itemclick : this.toggleDataSeries
    },
    data: [
      {
        type: "spline",
        xValueFormatString: "#,##0 seconds",
        yValueFormatString: yValueFormatString,
        showInLegend: true,
        markerSize: 0,
        name: titles[0],
        dataPoints: data[0]
      },
      {
        type: "spline",
        xValueFormatString: "#,##0 seconds",
        yValueFormatString: yValueFormatString,
        showInLegend: true,
        markerSize: 0,
        name: titles[1],
        dataPoints: data[1]
      },
      {
        type: "spline",
        xValueFormatString: "#,##0 seconds",
        yValueFormatString: yValueFormatString,
        showInLegend: true,
        markerSize: 0,
        name: titles[2],
        dataPoints: data[2]
      },
      {
        type: "spline",
        xValueFormatString: "#,##0 seconds",
        yValueFormatString: yValueFormatString,
        showInLegend: true,
        markerSize: 0,
        name: titles[3],
        dataPoints: data[3]
      },
    ]
  }

  function updateChart() {

    var newData = data
    const cursecdata = dataall[String(props.mapsec)]
    for (var i = 0; i < titles.length; i++) {
      newData[i] = [...newData[i], { x: props.tick, y: cursecdata[titles[i]]['cpuUsage(%)'] }]
    }
    setData(newData);
    setXValue(xValue + 1);
  }

  useEffect(() => {
    updateChart()
  }, [props.mapsec]);

  return (
    <div>
      <CanvasJSChart options={options} ref={seriesRef} />
    </div>
  );
}
