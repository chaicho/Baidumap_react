import React, { useState, useEffect } from 'react';
import { Input,Button} from 'antd';
const { Search } = Input;

export function DeviceSearch() {
  const [query, setQuery] = useState('');

  useEffect(() => {
    // 触发搜索操作
  }, [query]);

  return (
    <div>
      <Search
        placeholder="请输入搜索门架"
        onSearch={(value) => setQuery(value)}
      />
      {query &&(

      )
      }
      {query && (
        <Button onClick={() => setQuery('')}>取消搜索</button>
      )}
    </div>
  );
}