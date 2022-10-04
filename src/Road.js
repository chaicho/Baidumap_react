import React from "react";
import { ReactDOM } from "react";
import {Polyline} from "react-bmapgl" 
export class Road extends React.Component{
  
  constructor(props){
      super(props)

      this.debug_info = this.debug_info.bind(this)
  }
  debug_info(){
    // console.assert(0)
    console.log('Road info:')
    console.log('Start from')
    console.log(this.props.startid)
    console.log(this.props.start)
    console.log('End with')
    console.log(this.props.endid)
    console.log(this.props.end)
  }
  render(){
    return <Polyline
    path={[
      this.props.start,
      this.props.end
    ]}
    strokeColor="#000"
    cord = 	"bd09ll" 
    strokeWeight={3}
    onClick= {this.debug_info}
  />
  }
}