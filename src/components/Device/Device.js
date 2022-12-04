import React from 'react';
import ReactDOM from 'react-dom';
import {Label, InfoWindow,Marker} from 'react-bmapgl';


const defaultIconUrl = './shelf.png';
const red_shelf = new window.BMapGL.Icon('./red_shelf.png', 
    new window.BMapGL.Size(15, 15), 
    {
      anchor: new window.BMapGL.Size(10, 10)
    }   );



export  class Device extends React.Component{ 
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
      // console.log(this.props.id)
      // this.forceUpdate()
      // console.log(this.state.showInfo)
    }
    render(){
      // return <div/>
      // console.log(this.state.showInfo)
      // return <Marker 
      // position={this.props.position} 
      // icon={this.state.icon}
      // autoViewport
      // onClick = {this.debug_info}
      // />
      // console.log(this.props.id)
      if (!this.state.showInfo) {
        return  ( 
          <Marker 
            position={this.props.position} 
            icon={red_shelf}
            // autoViewport
            onClick = {this.debug_info}
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
