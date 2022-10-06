import React from 'react';
import ReactDOM from 'react-dom';
import {Map,Label, Marker, NavigationControl, InfoWindow,CustomOverlay,Circle} from 'react-bmapgl';

function translateCallback  (data){
  this.state.position = data.points[0]
}
const defaultIconUrl = './shelf.png';
const grey_shelf = new window.BMapGL.Icon('./grey_shelf.png', 
new window.BMapGL.Size(23, 25), 
{
  anchor: new window.BMapGL.Size(10, 25)
}   );
const green_shelf = new window.BMapGL.Icon('./green_shelf.png', 
new window.BMapGL.Size(23, 25), 
{
  anchor: new window.BMapGL.Size(10, 25)
}   );
const lightblue_shelf = new window.BMapGL.Icon('./lightblue_shelf.png', 
new window.BMapGL.Size(23, 25), 
{
  anchor: new window.BMapGL.Size(10, 25)
}   );
const blue_shelf = new window.BMapGL.Icon('./blue_shelf.png', 
  new window.BMapGL.Size(23, 25), 
  {
    anchor: new window.BMapGL.Size(10, 25)
  }   );
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
        icon : red_shelf,        
      }
      this.debug_info = this.debug_info.bind(this)
      // var convertor = new window.BMapGL.Convertor();
      // var pointArr = [];
      // pointArr.push(props.position);
      // convertor.translate(pointArr, 1, 5, translateCallback)
    }

    debug_info(){
      // console.assert(0)
      console.log('Device info')
      console.log(this.props)
    }
    render(){
      // return <div/>
      // console.log(this.props.id)
      // return <Marker 
      // position={this.props.position} 
      // icon={this.state.icon}
      // autoViewport
      // onClick = {this.debug_info}
      // />
      // console.log(this.props.id)
      return   <Label
      position={this.props.position}
      onClick = {this.debug_info}
      autoViewport = {true}
      text={this.props.id}
    />
    }
}
