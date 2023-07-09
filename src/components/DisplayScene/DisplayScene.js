
import { CarTrace1 } from "./Scene1/CarTraceExpected"
import { SearchOutlined } from '@ant-design/icons';
import { useContext, useEffect, useState } from "react"
import { InfoWindow } from "react-bmapgl"
import { Input, Button, Space } from 'antd';
import { Device } from "../Device/Device";
const { Search } = Input;
function isEmpty(property) {
  return (property === null || property === "" || typeof property === "undefined");
}
export const DisplayScene = () => {
  const [targetLat, setTargetLat] = useState('')
  const [targetLng, setTargetLng] = useState('')
  const [showInfo, setShowInfo] = useState(<></>);
  useEffect(() => {
    console.log(targetLat, targetLng)
    console.log(!isEmpty(targetLat) && !isEmpty(targetLng))
    if(!isEmpty(targetLat) && !isEmpty(targetLng)){
      setShowInfo(
        <InfoWindow
          position={new window.BMapGL.Point(targetLng, targetLat)}
          title="位置"
          text={`lat: ${targetLat}` + '\n' + `lng : ${targetLng}`}
        >
        </InfoWindow>
      )
    }
    console.log(showInfo)
  }, [targetLng, targetLat])
  return (
    <div>
      <Space direction="vertical" size="middle">
        <Space.Compact>
          <Input
            placeholder="Lat"
            onChange={(e) => setTargetLat(e.target.value)}
          ></Input>
          <Input
            placeholder="Lng"
            onChange={(e) => setTargetLng(e.target.value)}
            // enterButton="Search"
          ></Input>
          </Space.Compact >
      </Space>
      {showInfo}
    </div>
  )
}