import { ProPageHeader } from '@ant-design/pro-components';
import { useEffect, useState } from 'react';
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

  return (
    <div style={{ height: '30%',overflowY: 'scroll'}}>
      <table style={{ width: '100%', backgroundColor: '#f0f3fa' }}>
        <caption style={captionStyle}>整体规则违反情况</caption>
          <tbody>
            {Object.entries(curlog).map(([key, value]) => (
              <tr>
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
}

