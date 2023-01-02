import { useState, useEffect } from 'react';
import {useInterval} from 'ahooks'
import { Card } from 'antd';
export function LogList() {
  const [logs, setLogs] = useState([]);
  const [logID,setLogID] = useState(0)
  function fetchNewLogs(){
    setLogID( i => i + 1)
    return [{'id': logID, 'message': Math.random()}]
  }
  useInterval(() => {
      const newLogs =  fetchNewLogs();
      setLogs([...logs, ...newLogs]);
      // console.log(newLogs)
  }, 1000);

  return (
    <Card style={{ width: '100%' }}>
    <div style={{ overflow: 'scroll',height : '200px' }}>
      {logs.map((log) => (
        <p key={log.id}>{log.message}</p>
      ))}
    </div>
    </Card>
  );
}