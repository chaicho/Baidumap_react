import { ProPageHeader } from '@ant-design/pro-components';
import React, { useEffect, useState } from 'react';
import { RulesViewer } from './RulesViewer';
import { captionStyle } from './SideBar';
const ruledata = require('../../assets/sidebar/rules.json')
export function RuleLogs(props) {
  const [logs, setLogs] = useState([])
  const [curlog, setCurlog] = useState({})
  const columns = ['incTime', 'dual-read', 'MR-1', 'CR-1', 'CR-2', 'CR-3', 'topo-vio', 'time-out', 'diff-pid'];
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
        <caption style={captionStyle}>
          整体规则违反情况<span style={{marginLeft: '20px'}}/><RulesViewer/>
        </caption>
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

