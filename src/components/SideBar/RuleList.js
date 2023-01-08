import { useEffect, useState } from 'react';

export function RuleList(props) {
  const [items, setItems] = useState([
    { incTime: new Date(props.mapsec).toLocaleString(), 'dual-read': 48888, 'missing-read': 17994, 'cross-read-one': 50154, 'cross-read-two': 1811, 'cross-read-three': 1783, 'topology-violation': 2275, 'time-out': 215, 'diff-passid': 57 },
    { incTime: new Date(props.mapsec).toLocaleString(), 'dual-read': 48888, 'missing-read': 17994, 'cross-read-one': 50154, 'cross-read-two': 1811, 'cross-read-three': 1783, 'topology-violation': 2275, 'time-out': 215, 'diff-passid': 57 }
  ]);

  const columns = ['incTime', 'dual-read', 'missing-read', 'cross-read-one', 'cross-read-two', 'cross-read-three', 'topology-violation', 'time-out', 'diff-passid'];

  function addItem() {
    setItems([{incTime: new Date(props.sec).toLocaleString(), 'dual-read': 48888, 'missing-read': 17994, 'cross-read-one': 50154, 'cross-read-two': 1811, 'cross-read-three': 1783, 'topology-violation': 2275, 'time-out': 215, 'diff-passid': 57 },...items ]);
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

