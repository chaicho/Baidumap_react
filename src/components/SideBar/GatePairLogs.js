import { useEffect, useState } from 'react';
import { captionStyle } from './SideBar';
const ruledata = require('../../assets/sidebar/gates_chinese.json')

export function GatePairLogs(props) {
  const columns = ['gatePair','Number']
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
    <div style={{height :'50%',overflowY: 'hidden',overflowX: 'hidden'}} >
      <table style={{ width: '100%' }}>
        <caption style={captionStyle}>潜在异常门架TOP10</caption>
        <thead>
          <tr>
            <th key='gatePair'  style={{width: '90%'}} > 门架对</th>
            <th key='Number' > 异常次数</th>
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
                    // whiteSpace: 'nowrap',
                    width: '90%',
                    fontSize: '1em' }} >{value1}</td>
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

