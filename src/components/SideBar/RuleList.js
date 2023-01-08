import { ProPageHeader } from '@ant-design/pro-components';
import { useEffect, useState } from 'react';
const ruledata = require('../../assets/sidebar/rules.json')

export function RuleList(props) {
  const [items, setItems] = useState([])
  const columns = ['incTime', 'dual-read', 'missing-read', 'cross-read-one', 'cross-read-two', 'cross-read-three', 'topology-violation', 'time-out', 'diff-passid'];

  function addItem() {
    const curruledata= ruledata[props.sec]
    // console.log(props.sec)
    // console.log({...curruledata,'incTime' : new Date(props.sec).toLocaleDateString()})
    setItems([curruledata, ...items]);
  }
  useEffect(() =>{
      addItem()
   }
  ,[props.tick])
  return (
    <div style={{
    wordBreak :'break-all',
    height: 200, 
    overflowY: 'scroll' }}>
      <table>
        <thead>
          <tr>
            {columns.map(column => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              {columns.map(column => (
                <td key={column}>{item[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {/* <button onClick={addItem}>Add Item</button> */}
    </div>
  );
}

