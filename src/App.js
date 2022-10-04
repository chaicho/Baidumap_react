import React from 'react';
import ReactDOM from 'react-dom';
import { Marker, NavigationControl, InfoWindow} from 'react-bmapgl';
import Mymap from './Mymap'
import { Road } from './Road';
// import {Devicedata} from './Deviceinfo_bd';
import  Devicedata  from './Deviceinfo_bd_shi';
// import {Devicedata} from './Devicedata';
import Device from './Device';
import Button from '@mui/material/Button';
import './App.css'
class App extends React.Component {
   
    render() {
        return(
          <div className = "div">

          <div className = "div1">
           <Mymap 
                //  Devicelist = {Devicelist}
                  Roadlist = {Roadlist}/> 
          </div>  
          <div className = "div2">
          <Button variant="contained">Hello World</Button>
          </div>
          </div>
        )
    }
}
function createDevicedict(dict){
  Devicedata.map((device) => {
    const id = device.门架HEX字符串;
    dict[id] = device
  }
  )
}
export const Deviceinfodict = {} 
createDevicedict(Deviceinfodict)

console.log(Deviceinfodict)
const Devicelist = Devicedata.map((device) =>
< Device position = {{lng: device.经度,lat:device.纬度}} id = {device.门架HEX字符串}/>)


const Roadlist = []

for  (var j  in Devicedata)
{ 
  // if (j >= 500) break
  const device = Devicedata[j]
  const start = new window.BMapGL.Point(device.经度, device.纬度)
  for(var  i in device.下游门架) {
    //menjia即为每个下游门架
      const nextid = (device.下游门架)[i]
      // console.log(nextid)
      if (Deviceinfodict[nextid]){
      const nextdevice = Deviceinfodict[nextid]
      const end = new window.BMapGL.Point(nextdevice.经度,nextdevice.纬度) 
      if(start.lng <= 0.1 || end.lng <= 0.1 || end.lng < end.lat || start.lng < start.lat) break

        Roadlist.push(<Road start = {start} end ={end} startid = {device.门架HEX字符串} endid = {nextid} />)
      }
  }
}
// console.log(Roadlist)



ReactDOM.render(<App />, document.getElementById('container'));

