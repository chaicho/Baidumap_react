import { Bar } from '@ant-design/plots';
import { useState, useEffect } from 'react';
import { useInterval } from 'ahooks';
const alldata =   require('../../assets/statistics/data.json')
export function StaBar(props) {
  const [data, setData] = useState([]);

  useEffect(()=>{
    if(props.tick > 99) {
      return;  
    }
    setData(alldata[props.tick])
    console.log(data)
  }
  ,[props.tick])


  // 定义柱状图的配置
  const config = {
    data,
    xField: 'cnt',
    yField: 'type',
    seriesField: 'type',
    legend: {
      position: 'top-left',
    },
  };

  // return <></>
  return <Bar {...config} />;
}

