import { ProPageHeader } from '@ant-design/pro-components';
import { useEffect, useState } from 'react';
const ruledata = require('../../assets/sidebar/rules.json')

export function RuleList(props) {
  const [logs, setLogs] = useState([])
  const [curlog,setCurlog] = useState({})
  const columns = ['incTime', 'dual-read', 'missing-read', 'cross-read-one', 'cross-read-two', 'cross-read-three', 'topology-violation', 'time-out', 'diff-passid'];
  const addLog = ()  => {
    const newlog= ruledata[props.sec]
    setCurlog(newlog)
    setLogs([newlog, ...logs]);
  }
  useEffect(() =>{
      addLog()
   }
  ,[props.tick])

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>dual-read</td>
            <td>{curlog['dual-read']}</td>
          </tr>
          <tr>
            <td>missing-read</td>
            <td>{curlog['missing-read']}</td>
          </tr>
          <tr>
            <td>cross-read-one</td>
            <td>{curlog['cross-read-one']}</td>
          </tr>
          <tr>
            <td>cross-read-two</td>
            <td>{curlog['cross-read-two']}</td>
          </tr>
          <tr>
            <td>cross-read-three</td>
            <td>{curlog['cross-read-three']}</td>
          </tr>
          <tr>
            <td>topology-violation</td>
            <td>{curlog['topology-violation']}</td>
          </tr>
          <tr>
            <td>time-out</td>
            <td>{curlog['time-out']}</td>
          </tr>
          <tr>
            <td>diff-passid</td>
            <td>{curlog['diff-passid']}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

