import React from "react";
import {Polyline,InfoWindow} from "react-bmapgl" 

export class Road extends React.Component{
  
  constructor(props) {
      super(props)
      this.state= {
        showInfo : false,
        infoWindow: <div></div>,
        linecolor : "#708090",
        infosupposed:<InfoWindow
        position={this.props.start}
        title="路径信息"
        text={`Start from ${this.props.startid} to ${this.props.endid}`}
        onClickclose={() => {this.setState({showInfo : false,infoWindow:<div/>,linecolor:"#708090"})}}
        />  
      }
      this.debug_info = this.debug_info.bind(this)
  }
  debug_info () {
    this.setState({showInfo:true,
      infoWindow: this.state.infosupposed
    })
    this.setState({linecolor:"#FF4500"})
    console.log('click')
  }
  render(){
      return( 
        <React.Fragment>
        {/* {this.state.infoWindow} */}
        <Polyline
                path={[
                this.props.start,
                this.props.end
                ]}
                strokeColor="#708090"
                cord = 	"bd09ll" 
                strokeWeight={1}
                onClick= {this.debug_info}
             />
        </React.Fragment>
      )
    } 
}