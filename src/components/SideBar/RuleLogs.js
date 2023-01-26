import { ProPageHeader } from '@ant-design/pro-components';
import React, { useEffect, useState } from 'react';
import { captionStyle } from './SideBar';
const ruledata = require('../../assets/sidebar/rules.json')
export function RuleLogs(props) {
  const [logs, setLogs] = useState([])
  const [curlog, setCurlog] = useState({})
  const columns = ['incTime', 'dual-read', 'missing-read', 'cross-read-one', 'cross-read-two', 'cross-read-three', 'topology-violation', 'time-out', 'diff-passid'];
  const addLog = () => {
    const newlog = ruledata[props.sec]
    setCurlog(newlog)
    setLogs([newlog, ...logs]);
  }
  useEffect(() => {
    addLog()
  }
    , [props.tick])
  let currentRow = [];

  return (
    <div style={{ height: '22%', overflowY: 'hidden ' }}>
      <table style={{ width: '100%' }}>
        <caption style={captionStyle}>整体规则违反情况</caption>
        <tbody>
          {Object.entries(curlog).map(([key, value]) => {
            if (key !== 'incTime') {
              currentRow.push(
                <React.Fragment>
                <td>{key}</td>
                <td>{value}</td>
                </React.Fragment>
              );
              if (currentRow.length === 2) {
                const row = currentRow;
                currentRow = [];
                return <tr>{row}</tr>
              }
            }
            else{
              return <></>
            }
          }
          )}
            
        </tbody>
      </table>
    </div>
  );
}

