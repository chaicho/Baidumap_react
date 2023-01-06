import { Column } from '@ant-design/charts';
import { useState, useEffect } from 'react';
import { useInterval } from 'ahooks';
const alldata = require('../../assets/statistics/data.json')
console.log(alldata)
export function Histogram(props) {
  const [data, setData] = useState([]);
  const [config,setConfig] = useState({
    data,
    columnWidthRatio: 0.6, // 设置柱
    autoFit:true,
    barSize: 0.2, 
    xField: 'type',
    yField: 'cnt',
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'top', 'bottom', 'middle',
      // 配置样式
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    // columnBackground: {
    //   style: {
    //     fill: '#000',
    //     fillOpacity: 0.25,
    //   }
    // }
  })
  useEffect(()=>{
    if(props.tick > 99) {
      return;  
    }
    // setData(alldata[props.tick])
    setConfig({ ...config,data:alldata[props.tick]})
  }
  ,[props.tick])




  // return <></>
  return <Column {...config}  onlyChangeData={true}/>;
}

