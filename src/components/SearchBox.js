import { Input } from 'antd';
import React from 'react';
const { Search } = Input;
// const onSearch = ;
class SearchBox extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
  return  <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={(value) => this.props.onPressEnter(value.toUpperCase())}
      style = {{width: 300}}
      // onPressEnter = {()=> this.props.onPressEnter(this.state.targetHex)}
    />
  }
}
export default SearchBox;