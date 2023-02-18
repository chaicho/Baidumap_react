import React, { useState, useRef, useEffect } from 'react';
import CanvasJSReact from '../../lib/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export function DynaSeries(props) {
  const seriesRef = useRef();
  const [dataPoints1, setDataPoints1] = useState([]);
  const [dataPoints2, setDataPoints2] = useState([]);
  const [dataPoints3, setDataPoints3] = useState([]);
  const [dataPoints4, setDataPoints4] = useState([]);

  // initial values
  const [yValue1, setYValue1] = useState(408);
  const [yValue2, setYValue2] = useState(350);
  const [yValue3, setYValue3] = useState(310);
  const [yValue4, setYValue4] = useState(400);
  const [xValue, setXValue] = useState(5);

  const options ={
    zoomEnabled: true,
    theme: "light1",
    height: '200',
    title: {
      text: "Data Comparison"
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
        name: "Data 1",
        dataPoints: dataPoints1
      },
      {
        type: "stepLine",
        xValueFormatString: "#,##0 seconds",
        yValueFormatString: "#,##0 %",
        showInLegend: true,
        name: "Data 2",
        dataPoints: dataPoints2
      },
      {
        type: "stepLine",
        xValueFormatString: "#,##0 seconds",
        yValueFormatString: "#,##0 %",
        showInLegend: true,
        name: "Data 3",
        dataPoints: dataPoints3
      },
      {
        type: "stepLine",
        xValueFormatString: "#,##0 seconds",
        yValueFormatString: "#,##0 %",
        showInLegend: true,
        name: "Data 4",
        dataPoints: dataPoints4
      },
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
      setDataPoints3([...dataPoints3, { x: xValue, y: 200 + yValue2 }]);
      setDataPoints4([...dataPoints4, { x: xValue, y: 100 + yValue2 }])
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

