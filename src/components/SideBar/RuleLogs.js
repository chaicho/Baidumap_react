import { ProPageHeader } from '@ant-design/pro-components';
import { useEffect, useState } from 'react';
const ruledata = require('../../assets/sidebar/rules.json')
const captionStyle = {
  captionSide: 'top',
  position: 'sticky',
  top: 0,
  backgroundColor: '#f2f2f2',
  fontSize: '1.5em',
  fontWeight: 'bold',
  textAlign: 'left',
  padding: '10px',
  color: 'black'
}
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
    <div>
      <table style={{ width: '100%', backgroundColor: '#f2f2f2',height:'200px' }}>
        <caption style={captionStyle}>Rule Log</caption>
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

