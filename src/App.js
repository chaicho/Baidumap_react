import React from 'react';
import ReactDOM from 'react-dom';
import Mymap from './Mymap'
import { Road } from './Road';
// import {devicedata} from './Deviceinfo_bd';
// import {devicedata} from './devicedata';
import  devicedata  from './Deviceinfo_bd_shi';
import {Device} from './Device';
import  {Displaybutton} from './components/Displaybutton'
import DeviceStateList from './DeviceStateList'
import SearchBox from './components/SearchBox'
import './App.css'
// const DisplayRouteButton = 
// const DisplayDeviceButton = <Displaybutton text = '显示龙门架'></Displaybutton>

class App extends React.Component {
    constructor(props) {
      super(props);
      this.handleRouteDisplayChange = this.handleRouteDisplayChange.bind(this);
      this.handleDeviceDisplayChange = this.handleDeviceDisplayChange.bind(this)
      this.state = {displayroute: false, displaydevice: false,searchedDevice:<div/>}; 
 
   }
    handleSearchDevice(e){
      this.setState({searchedDevice : e})
    }
    handleRouteDisplayChange(){
      this.setState({displayroute : !this.state.displayroute})
      // console.log(this.state.displayroute,this.state.devicelist)
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
                  searchedDevice =  {this.state.searchedDevice}
            /> 

          </div>
            <div className="SelectView">
            <Displaybutton  
              text = '显示路径'
              active = {displayroute}
              onClick = {this.handleRouteDisplayChange}  ></Displaybutton>
              <Displaybutton  
              text = '显示龙门架'
              active = {displaydevice}
              onClick = {this.handleDeviceDisplayChange}  ></Displaybutton>
            </div >
            <div className="DeviceState">  
              <DeviceStateList/>
            </div>
            <div  className="SearchBox">
              <SearchBox/>
            </div> 
          </div>
        )
  }
}


function createDevicedict(dict){
  devicedata.map((device) => {
    const id = device.门架HEX字符串;
    dict[id] = device
  }
  )
}
export const Deviceinfodict = {} 
createDevicedict(Deviceinfodict)


// console.log(Deviceinfodict)
const devicelist =  devicedata.map((device) =>  
   {
    return ( <li key = {device.门架HEX字符串}> 
    < Device position = {{lng: device.经度,lat:device.纬度}} id = {device.门架HEX字符串}/>
  </li>)
  }
)

function Devicelist(props){
  console.log('gg')
  // const display = props.display
  if(props.display){
    return <ul>{devicelist}</ul>
  }
  else{
    return <ul> </ul>
  }
}




const roadlist = []

for  (var j  in devicedata)
{ 
  // if (j >= 500) break
  const device = devicedata[j]
  const start = new window.BMapGL.Point(device.经度, device.纬度)
  for(var  i in device.下游门架) {
    //menjia即为每个下游门架
      const nextid = (device.下游门架)[i]
      // console.log(nextid)
      if (Deviceinfodict[nextid]){
      const nextdevice = Deviceinfodict[nextid]
      const end = new window.BMapGL.Point(nextdevice.经度,nextdevice.纬度) 
      if(start.lng <= 0.1 || end.lng <= 0.1 || end.lng < end.lat || start.lng < start.lat) break

        roadlist.push(<Road start = {start} end ={end} startid = {device.门架HEX字符串} endid = {nextid} />)
      }
  }
}
// console.log(roadlist)

function Roadlist(props){
  // console.log('gg')
  // const display = props.display
  if(props.display){
    return <ul>{roadlist}</ul>
  }
  else{
    return <ul> </ul>
  }
}
ReactDOM.render(<App />, document.getElementById('container'));

