import { Input } from 'antd';
import React from 'react';
import { Deviceinfodict } from "../ObjInfo"
import {InfoWindow,Marker} from  "react-bmapgl"
const { Search } = Input;
// const onSearch = ;

export class SearchBox extends React.Component {
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


export function SearchedInfo(props){
  if(props.hex == null ){
    return <></>
  }
  else{
    var devices = props.hex.split('|')
    return (devices.map(( device) =>{
        if(!(device  in Deviceinfodict)){
          return <></>
        }  
        else{
           
          const targetDevice = Deviceinfodict[device]
          return <Marker position  =  {new window.BMapGL.Point(targetDevice.经度, targetDevice.纬度)}
          />
        }
    }))
    // const targetDevice = Deviceinfodict[props.hex]
    // return <InfoWindow  position =  {new window.BMapGL.Point(targetDevice.经度, targetDevice.纬度)} 
    // title="门架信息"
    // text={`门架编号: ${targetDevice.收费门架编号}` + '\n' + `使用状态 : ${targetDevice.使用状态}`}
    // onClickclose={e => {console.log(e)}}
    // />
  }
}
