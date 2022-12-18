import React, { useState, useEffect } from 'react';
import { Input,Button} from 'antd';
import Deviceinfodict from '../../ObjInfo'
const { Search } = Input;

export function DeviceSearch() {
  const [query, setQuery] = useState('');
  const [curDevice,setCurDevice] =  useState(<></>)
  
  useEffect(() => {
    console.log('query')
    if(Deviceinfodict === null || query === '' || !(query in ( Deviceinfodict))  ) {
      return ;
    }
    const pos = Deviceinfodict[query]
    setCurDevice()
  }, [query]);
  return (
    <div>
      <Search
        placeholder="请输入搜索门架"
        onSearch={(value) => setQuery(value)}
      />
      {curDevice}
      {query && (
        <Button onClick={() => {
            setQuery('');
            curDevice(<></>);}}>取消搜索</Button>
      )
      }
    </div>
  )
}