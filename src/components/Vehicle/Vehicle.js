import React from 'react';
import ReactDOM from 'react-dom';
import {Label, InfoWindow} from 'react-bmapgl';


export  class Device extends React.Component{ 
    constructor(props){
      super(props) 
      this.state = { 
        alive : true ,
        icon : red_shelf,  
        showInfo : false,      
      }
      this.debug_info = this.debug_info.bind(this)
  }

    debug_info(){
      // console.assert(0)
      this.setState({showInfo:true})
      console.log(this.props.id)
      this.forceUpdate()
      // console.log(this.state.showInfo)
    }
    render(){
      // return <div/>
      console.log(this.state.showInfo)
      // return <Marker 
      // position={this.props.position} 
      // icon={this.state.icon}
      // autoViewport
      // onClick = {this.debug_info}
      // />
      // console.log(this.props.id)
      if (!this.state.showInfo) {
        return  ( 
          <Label
          position={this.props.position}
          onClick = {this.debug_info}
          autoViewport = {true}
          text={this.props.id}
          />
        )
      }
      else{
        console.log('showinfo')
        return (
          <div>
          <InfoWindow
          position={this.props.position}
          title="龙门架信息"
          text={this.props.id}
          onClickclose={() => {this.setState({showInfo : false})}}
          /> 
          <Label
          position={this.props.position}
          onClick = {this.debug_info}
          autoViewport = {true}
          text={this.props.id}
          />                     
          </div>
        )
      }
    }
}
