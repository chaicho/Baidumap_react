import { useInterval, useSafeState } from 'ahooks';
import React, { useEffect, useRef, useState } from 'react';
import CanvasJSReact from '../../lib/canvasjs.react';
const dataall = require('../../assets/statistics/incsInfo.json')
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export function IncCmp(props) {
  const chartRef = useRef();
  const [dps,setDps] = useState(
    [        
    { label: "ECC", y: 0, color: "#81c2ea" },
    { label: "ConC", y: 0, color: "#81c2ea" },
    { label: "PCC", y: 0, color: "#81c2ea" },
    { label: "INFUSE", y: 0, color: "#81c2ea" }]
  )
  const yValueFormatString = "#,##0"
  const titles = ["ECC","ConC","PCC","INFUSE"]
  const [oracle,setOracle] = useState(0)
  const [options, setOptions] = useState({
    theme: "light1",
    height:'180',
    title: {
      text: "Cases"
    },
    axisY: {
      title: "Cases",
      includeZero: true,
      stripLines: [{
        value: oracle, // 在y轴上绘制线的值
        label: "Oracle", // 线的标签
        labelFontColor: "#ff0000", // 标签颜色
        labelAlign: "near", // 标签位置
        thickness: 2, // 线的粗细
        color: "#ff0000", // 线的颜色
        showOnTop: true // 确保线在其他元素之上
      }]
      // suffix: "%",
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
      // deltaY = Math.round(2 + Math. random() * (-2 - 2));
      // yVal = deltaY + dps[i].y > 0 ? (deltaY + dps[i].y < 100 ? dps[i].y + deltaY : 100) : 0;
      yVal = cursecdata[titles[i]]
      new_dps[i] = { label: titles[i], y: yVal };
      // dpsTotal += yVal;
    }
    setDps(new_dps)
    setOptions(prevOptions => ({
      ...prevOptions,
      axisY: {
        ...prevOptions.axisY,
        stripLines: [{
          ...prevOptions.axisY.stripLines[0],
          value: oracle // 更新 stripLines 对象的 value 属性
        }]
      }
    }));
    setOracle(cursecdata["Oracle"])
    // console.log(cursecdata["Oracle"])

  }, [props.mapsec]);

  return (
    <div>
      <CanvasJSChart options={{ ...options }} ref={chartRef} />
    </div>
  );
}