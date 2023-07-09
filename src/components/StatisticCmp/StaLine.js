import { Line } from "@ant-design/charts";
import { useState,useEffect } from "react";
const alldata = require('../../assets/statistics/data.json')

export function StaLine(props) {
  const [data, setData] = useState([]);

  useEffect(()=>{
    if(props.tick > 99) {
      return;  
    }
    const newData = alldata[props.tick].map((item) => ({
    ...item,
    time : props.tick  
    }));
    setData([
      ...data,
      ...newData
    ])
    // console.log(props.tick)
    // console.log(data)
  }
  ,[props.tick])


  // 定义柱状图的配置
  const config = {
    data,
    xField: 'time',
    yField: 'cnt',
    seriesField: 'type',

  };

  // return <></>
  return <Line {...config} onlyChangeData={true}  />;
}

