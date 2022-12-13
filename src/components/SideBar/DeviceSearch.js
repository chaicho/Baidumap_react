import React, { useState, useEffect } from 'react';
import { Input,Button} from 'antd';
import Deviceinfodict from '../../ObjInfo'
const { Search } = Input;

export function DeviceSearch() {
  const [query, setQuery] = useState('');
  const [curTrace,setCurTrace] =  useState([])
  const [curLine, setCurLine] = useState(<></>)
  const cartraces = useContext(CarTraceContext)
  
  useEffect(() => {



  }, [query]);
  console.log(curLine)
  return (
    <div>
      <Search
        placeholder="请输入搜索车辆"
        onSearch={(value) => setQuery(value)}
      />
      {curLine}
      {query && (
        <Button onClick={() => {
            setQuery('');
            setCurLine(<></>);}}>取消搜索</Button>
      )
      }
    </div>
  )
}