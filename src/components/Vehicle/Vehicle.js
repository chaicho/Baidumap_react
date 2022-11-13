import React from 'react';
import ReactDOM from 'react-dom';
import {Label, InfoWindow} from 'react-bmapgl';


export  class Vehicle extends React.Component{ 
    constructor(props){
      super(props) 
      this.state = { 
        alive : true ,  
        showInfo : false,      
      }
      this.debug_info = this.debug_info.bind(this)
  }
  debug_info(){
      // console.assert(0)
      this.setState({showInfo:true})
      console.log(this.props.id)
      // console.log(this.state.showInfo)
  }
  render(){
        return (
          <Label
          position={this.props.position}
          onClick = {this.debug_info}
          autoViewport = {true}
          text={this.props.id}
          />                     
        )
      }
}

