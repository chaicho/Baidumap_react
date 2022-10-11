import React from "react";
import {Polyline,InfoWindow} from "react-bmapgl" 
export class Road extends React.Component{
  
  constructor(props) {
      super(props)
      this.state= {
        showInfo : false
      }
      this.debug_info = this.debug_info.bind(this)
  }
  debug_info () {
    this.setState({showInfo:true})
    console.log('click')
  }
  render(){
    if (!this.state.showInfo) {
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
     else {
      return (
          <div>  
            <InfoWindow
            position={this.props.start}
            title="路径信息"
            text={`Start from ${this.props.startid} to ${this.props.endid}`}
            onClickclose={() => {this.setState({showInfo : false})}}
            />  

            <Polyline
                path={[
                this.props.start,
                this.props.end
                ]}
                strokeColor="#000"
                cord = 	"bd09ll" 
                strokeWeight={3}
                onClick= {this.debug_info}
             />
          </div>
      )
    }
  }
}