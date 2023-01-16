import { ProPageHeader } from '@ant-design/pro-components';
import { useEffect, useState } from 'react';
import { captionStyle } from './SideBar';
import React from 'react';
const ruledata = require('../../assets/sidebar/cars.json')
const logTableStyle = {
  width: '100%',
  
};
const logTableHrStyle = {
  width: '100%',
  border: 'none',
  borderTop: '1px solid gray'
}

export function CarLogs(props) {
  const [logs, setLogs] = useState([])
  const [curlog, setCurlog] = useState({})
  const addLog = () => {
    if (!(`${props.sec}` in ruledata)) {
      return
    }
    const newlog = ruledata[props.sec]
    setLogs([...newlog, ...logs]);
  }
  useEffect(() => {
    addLog()
  }
    , [props.sec])

  return (
    <div style={{ height: '20%', overflowY: 'scroll' }}>
        <table style={logTableStyle}>
          <caption style={captionStyle}>车辆异常情况</caption>
          <tbody>
            {logs ? logs.map((log, index) => (
              <React.Fragment key={index}>
                {
                  <tr>
                    <td>车辆{log['vehicleId']}于{new Date(log['incTime']).toDateString()}违反规则{log['rule']}</td>  
                  </tr>
                }
                {index !== logs.length - 1 && <hr style={logTableHrStyle} />}
              </React.Fragment>
            )) : null}

          </tbody>

        </table>
      </div>
  );
}

