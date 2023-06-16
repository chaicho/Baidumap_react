import axios from "axios";
import React, { useEffect, useState, useContext } from "react";

import { CarTrace2 } from "./CarTrace2";
export const CartracesScene2 = () => {

  // const carIdList = [
  //   "冀A56W39-1", "冀A672NY-1", "冀A980V3-1",
  //   "冀ET4406-1", "冀EYK197-0", "冀J0A169-1", 
  //   "冀J196BN-0", "冀JW136Q-0", "皖K3217R-0", 
  //   "皖M0A639-1", "豫A9065C-1", "豫F2F503-0", 
  //   "豫N8952T-0", "豫PVU861-0", "贵CE733T-0", 
  //   "辽HN1065-1", "鲁A9P78S-0", "鲁DJ995P-0", 
  //   "鲁Q708JU-1", "鲁Q867GG-1", "鲁R1KJ68-0", 
  //   "鲁R5E60D-0", "鲁RN139M-0", "鲁RN1804-1",
  //   "鲁UL6980-1"  ]
  const carIdList = [
    "冀A56W39-1", "冀A672NY-1", "冀A980V3-1",
    "冀ET4406-1"]
  return (
    <React.Fragment>
      {carIdList.map((carId) => {
        return <CarTrace2 carId={carId}></CarTrace2>
      })}
    </React.Fragment>
  )
}