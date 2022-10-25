import { devicedata } from "./Deviceinfo_bd"
const roadlist = []

for  (var j  in devicedata)
{ 
  const device = devicedata[j]
  if(device.isValid === false){
    continue
  }
  const start = new window.BMapGL.Point(device.经度, device.纬度)
  for(var  i in device.下游门架) {
      //menjia即为每个下游门架
      const nextid = (device.下游门架)[i]
      // console.log(nextid)
      if (Deviceinfodict[nextid]){
        const nextdevice = Deviceinfodict[nextid]
        if(nextdevice.isValid === false){
          continue
        }
        const end = new window.BMapGL.Point(nextdevice.经度,nextdevice.纬度) 
        if(start.lng <= 0.1 || end.lng <= 0.1 || end.lng < end.lat || start.lng < start.lat) {
          break
        }
        roadlist.push(<Road start = {start} end ={end} startid = {device.门架HEX字符串} endid = {nextid} />)
      }
    }
}