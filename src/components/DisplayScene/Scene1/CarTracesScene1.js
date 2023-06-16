import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { CarTraceExpected } from "./CarTraceExpected";
import { CarTraceAbnormal } from "./CarTraceAbnormal";
export const CartracesScene1 = () => {

  const carIdList = ["鲁FAV103-1","鲁GY5281-0","苏FL617T-1"]
  return (
    <React.Fragment>
      {carIdList.map((carId) => {
        return <CarTraceExpected carId={carId}></CarTraceExpected>
      })}
      {
        carIdList.map((carId) => {
          return <CarTraceAbnormal carId={carId}></CarTraceAbnormal>
        }
      )}
    </React.Fragment>
  )
}