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
  const columns = ['gatePair','incNumber']
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
        <thead>
          <tr>
            {columns.map(column => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.entries(curlog).map(([key, value]) => {
            if (key === 'incTime') {
              return <></>
            }
            else {
              return (
                <tr>
                { Object.entries(value).map(([key1, value1]) => (
                  <td key = {key1} style ={{ 
                    whiteSpace: 'nowrap',
                    fontSize: '0.9em' }} >{value1}</td>
                ))
                }
                </tr>
              )
            }
          })}
        </tbody>
      </table>
    </div>
  );
}

