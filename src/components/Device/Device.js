import React, { useState } from 'react';
import {  InfoWindow, Marker } from 'react-bmapgl';
import redShelfUrl from '../../assets/images/red_shelf.png'
const red_shelf = new window.BMapGL.Icon(redShelfUrl,
  new window.BMapGL .Size(15, 15),
{
    anchor: new window.BMapGL .Size(10, 10)
});

export const Device = (props) => {
  const [showInfo, setShowInfo] = useState(false);
  const debug_info = () => {
    setShowInfo(true);
  };

  if (!showInfo) {
    return (
      <Marker
        position={props.position}
        icon={red_shelf}
      />
    );
  }
  else {
    return (
      <div>
        <InfoWindow
          position={props.position}
          title="龙门架信息"
          text={props.id}
          onClickclose={() => { setShowInfo(false) }}
        />
      </div>
    );
  }
};
