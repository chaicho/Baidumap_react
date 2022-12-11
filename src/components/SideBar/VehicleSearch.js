import React, { useState, useEffect, useContext } from 'react';
import { Input,Button} from 'antd';
import { CarTraceContext } from './SideBar';
const { Search } = Input;

export function VehicleSearch() {
  const [query, setQuery] = useState('');

  useEffect(() => {
    // 触发搜索操作
  }, [query]);
  console.log(useContext(CarTraceContext))
  return (
    
    <div>
      <Search
        placeholder="请输入搜索门架"
        onSearch={(value) => setQuery(value)}
      />
      {query && (
        <Button onClick={() => setQuery('')}>取消搜索</Button>
      )}
    </div>
  );
}