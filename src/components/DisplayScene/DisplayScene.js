
import { CarTrace1 } from "./Scene1/CarTraceExpected"
import { useContext} from "react"
import { timeContext } from "../../Mymap"
import { CartracesScene1 } from "./Scene1/CarTracesScene1"

export const DisplayScene = () => {
  const { tick, mapsec } = useContext(timeContext)
  console.log(tick)
  
  return (
    <div>
      <CartracesScene1></CartracesScene1>
      {/* <CarTrace1></CarTrace1> */}
    </div>
  )
}