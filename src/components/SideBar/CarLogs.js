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
    <div style={{ height: '20%',backgroundColor: '#f0f3fa', overflowY: 'scroll' }}>
        <table style={logTableStyle}>
          <caption style={captionStyle}>Car Log</caption>
          <tbody>
            {logs ? logs.map((log, index) => (
              <React.Fragment key={index}>
                {Object.entries(log).map(([key, value]) => (
                  <tr key={key}>
                    <td>{key}</td>
                    <td>{value}</td>
                  </tr>
                ))
                }
                {index !== logs.length - 1 && <hr style={logTableHrStyle} />}
              </React.Fragment>
            )) : null}

          </tbody>

        </table>
      </div>
  );
}

