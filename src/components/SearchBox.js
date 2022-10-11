import { Input } from 'antd';
import React from 'react';
const { Search } = Input;
const onSearch = (value) => console.log(value);
class SearchBox extends React.Component {

  render(){
  return  <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
      style = {{width: 300}}
    />
  }
}
export default SearchBox;