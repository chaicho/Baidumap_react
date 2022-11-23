import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mymap from './Mymap';
import { Deviceinfodict,Roadlist,Devicelist } from './ObjInfo';
import {InfoWindow} from 'react-bmapgl';
// import {Bas}
import {devicedata} from './Deviceinfo_bd';
import PathViewer from './components/PathViewer/PathViewer'
import StatisticViewer from './components/StatisticViewer';
// import {devicedata} from './devicedata';
// import  devicedata  from './Deviceinfo_bd_shi';
import {Device} from './Device';
import  {Displaybutton} from './components/Displaybutton'
import DeviceStateList from './DeviceStateList'
import {SearchBox,SearchedInfo} from './components/SearchBox'
// import BasicExample from './components/RightInfoBar';
import {VehicleList} from './components/Vehicle/VehicleList';

import './App.css'
// const DisplayRouteButton = 
// const DisplayDeviceButton = <Displaybutton text = '显示龙门架'></Displaybutton>

class App extends React.Component {
    constructor(props) {
      super(props);
      this.handleRouteDisplayChange = this.handleRouteDisplayChange.bind(this);
      this.handleDeviceDisplayChange = this.handleDeviceDisplayChange.bind(this);
      this.handleSearchDevice  = this.handleSearchDevice.bind(this);
      this.state = {displayroute: false, 
                  displaydevice: false,
                  searchedDeviceHex:null}; 
 
   }
    handleSearchDevice(hex){
      if(!( hex in Deviceinfodict)) {
         return;
      }
      this.setState({searchedDeviceHex:hex})
      // console.log(this.state.searchedDeviceHex)
    }
    handleRouteDisplayChange(){
      this.setState({displayroute : !this.state.displayroute})
      console.log(this.state.displayroute)
    }
    handleDeviceDisplayChange(){
      this.setState({displaydevice: !this.state.displaydevice})
      // console.log()
    }
    render() {
        // console.log(devicelist)
        const displayroute = this.state.displayroute
        const displaydevice = this.state.displaydevice
        // return           <DeviceStateList/>;
        return(
          <div className = "app">
          
            <div className='mymap'> 
              <Mymap 
                  devicelist = {<Devicelist display = {displaydevice}/>}
                  roadlist = {<Roadlist display = {displayroute}/>}
                  searchedDevice =  {<SearchedInfo hex = {this.state.searchedDeviceHex} />}
              /> 

            </div> 
            <div className="DeviceState">  
              {/* <BasicExample/> */}
            </div> 
            <div  className="SearchBox">
              {/* <SearchBox onPressEnter={this.handleSearchDevice}/> */}
            </div>  
            {/* <div className='PathTimer'> 
             <PathViewer/> 
             </div>   */}
            <div className="SelectView">
            <Displaybutton 
              text = '显示路径'
              active = {displayroute}
              onClick = {this.handleRouteDisplayChange}  ></Displaybutton>
              <Displaybutton  
              text = '显示龙门架'
              active = {displaydevice}
              onClick = {this.handleDeviceDisplayChange}  ></Displaybutton>             </div >
            <div className='StatisticViewer'>
              <StatisticViewer/> 
            </div> 
          </div>
        )
  }
}



ReactDOM.render(<App />, document.getElementById('container'));

