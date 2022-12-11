import React, { useState,useEffect } from 'react';
import { Button, List } from 'antd';
import { LogList } from './LogList';
export function AllLog() {
  // 初始化一个状态变量selected，用于记录当前选中的按钮
  const [selected, setSelected] = useState(null);
  const [items, setItems] = useState([]);

  // 在组件挂载时，从本地的 JSON 文件中提取文字列表的数据
  useEffect(() => {
    let interval = null;
    const fetchData = () => {
      fetch('/path/to/your/data.json')
        .then(response => response.json())
        .then(data => setItems(data));
    };

    // 每隔 10 分钟就更新一次文字列表的数据
    interval = setInterval(fetchData, 10 * 60 * 1000);

    // 在组件卸载时，清除定时器
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <LogList/>
      <Button onClick={() => setSelected('Button 1')}>Button 1</Button>
      <Button onClick={() => setSelected('Button 2')}>Button 2</Button>
      <Button onClick={() => setSelected('Button 3')}>Button 3</Button>

      {selected && (
        <List
          bordered
          dataSource={
            selected === 'Button 1'
              ? [                  { key: '1', text: 'Item 1' },                  { key: '2', text: 'Item 2' },                  { key: '3', text: 'Item 3' },                ]
              : selected === 'Button 2'
              ? [
                  { key: '4', text: 'Item 4' },
                  { key: '5', text: 'Item 5' },
                  { key: '6', text: 'Item 6' },
                ]
              : selected === 'Button 3'
              ? [
                  { key: '7', text: 'Item 7' },
                  { key: '8', text: 'Item 8' },
                  { key: '9', text: 'Item 9' },
                ]
              : []
          }
          renderItem={item => (
            <List.Item>
              {item.text}
            </List.Item>
          )}
          style={{ height: 300, overflow: 'auto' }}
        />
      )}
    </div>
  );
}
