import React, { useState, useRef, useEffect } from 'react';
import CanvasJSReact from '../../lib/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export function DynaSeries(props) {
  const seriesRef = useRef()
  const [dataPoints1, setDataPoints1] = useState([]);
  const [dataPoints2, setDataPoints2] = useState([]);
  // initial values
  const [yValue1, setYValue1] = useState(408);
  const [yValue2, setYValue2] = useState(350);
  const [xValue, setXValue] = useState(5);

  const options ={
    zoomEnabled: true,
    theme: "light1",
    title: {
      text: "s1 vs s2"
    },
    axisX: {
      // title: "chart updates every 2 secs"
    },
    axisY:{
      suffix: " %"
    },
    toolTip: {
      shared: true
    },
    legend: {
      cursor:"pointer",
      verticalAlign: "top",
      fontSize: 18,
      fontColor: "dimGrey",
      // itemclick : this.toggleDataSeries
    },
    data: [
      {
        type: "stepLine",
        xValueFormatString: "#,##0 seconds",
        yValueFormatString: "#,##0 %",
        showInLegend: true,
        name: "s1",
        dataPoints: dataPoints1
      },
      {
        type: "stepLine",
        xValueFormatString: "#,##0 seconds",
        yValueFormatString: "#,##0 %",
        showInLegend: true,
        name: "s2" ,
        dataPoints: dataPoints2
      }
    ]
  }
  function updateChart(count) {
    count = count || 1;
    // var new_options = chart.options
    let deltaY1, deltaY2;
    for (let i = 0; i < count; i++) {
      setXValue(xValue + 2);
      deltaY1 = 5 + Math.random() * (-5 - 5);
      deltaY2 = 5 + Math.random() * (-5 - 5);
      setYValue1(Math.floor(Math.random() * (408 - 400 + 1) + 400));
      setYValue2(Math.floor(Math.random() * (350 - 340 + 1) + 340));
      setDataPoints1([...dataPoints1, { x: xValue, y: yValue1 }]);
      setDataPoints2([...dataPoints2, { x: xValue, y: yValue2 }]);
    }
		// new_options.data[0].legendText = " Bugatti Veyron - " + yValue1 + " km/h";
		// new_options.data[1].legendText = " Lamborghini Aventador - " + yValue2 + " km/h";
    // this.set
  }

  useEffect(() => {
    updateChart(20)
  },[props.tick])
	return (
			<div>
				<CanvasJSChart options = {options}
					ref = {seriesRef}
				/>
			</div>
		);
	}

