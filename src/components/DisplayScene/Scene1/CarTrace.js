import React, { useState } from "react";
import { Polyline, InfoWindow } from "react-bmapgl";

export const Road = (props) => {
  const [showInfo, setShowInfo] = useState(false);

  const infoWindow = (
    <InfoWindow
      position={props.nodes[0]}
      title="路径信息"
      text={`Start from ${props.startid} to ${props.endid}`}
      onClickclose={() => {
        setShowInfo(false);
      }}
    />
  );

  const debug_info = () => {
    setShowInfo(true);
    console.log("click");
  };

  return (
    <React.Fragment>
      {showInfo && infoWindow}
      <Polyline
        path={props.nodes}
        strokeColor={props.strokeColor || "#708090"}
        cord="bd09ll"
        strokeWeight={props.strokeWeight || 1}
        onClick={debug_info}
      />
    </React.Fragment>
  );
};
