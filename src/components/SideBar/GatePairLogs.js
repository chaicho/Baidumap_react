import { useEffect, useState } from 'react';
const ruledata = require('../../assets/sidebar/gates.json')
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
export function GatePairLogs(props) {
  const [logs, setLogs] = useState([])
  const [curlog, setCurlog] = useState({})
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
      <table style={{ width: '100%', backgroundColor: '#f2f2f2', height: '200px' }}>
        <caption style={captionStyle}>Rule Log</caption>
        <tbody>
          {Object.entries(curlog).map(([key, value]) => {
            if (key === 'incTime') {
              return (
                <tr>
                  <td>{key}</td>
                  <td>{value}</td>
                </tr>
              )
            }
            else {
              return (
                Object.entries(value).map(([key1, value1]) => (
                <tr>
                  <td>{key1}</td>
                  <td>{value1}</td>
                </tr>
                )
              )
            )
            }
          })}
        </tbody>
      </table>
    </div>
  );
}

