import React from 'react';
import { Table } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    // width: 50,
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}
export function LogList () {
  return(  
  <Table
    columns={columns}
    dataSource={data}
    pagination={{
      pageSize: 50,
    }}
    scroll={{
      y: 240,
    }}
  />
  )
}
