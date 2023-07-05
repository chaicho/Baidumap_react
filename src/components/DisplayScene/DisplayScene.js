import React from "react";
import Grid from "@mui/material/Grid";
import ReactPlayer from "react-player";
import { useState } from "react";
import { ScenePlayer } from "./ScenePlayer";
// import myVideo from "../../assets/videos/cross-read_1.mp4"
// An array of video sources
const videos = [
  "/Data/videos/CR-1_40_27.mp4",
  "/Data/videos/CR-1_40_27.mp4",
  "/Data/videos/CR-1_40_27.mp4",
  "/Data/videos/CR-1_40_27.mp4",
  "/Data/videos/CR-1_40_27.mp4",
  "/Data/videos/CR-1_40_27.mp4",
  "/Data/videos/CR-1_40_27.mp4",
  "/Data/videos/CR-1_40_27.mp4",
  "/Data/videos/CR-1_40_27.mp4"
  // myVideo
  // "https://www.youtube.com/watch?v=KODzih-pYlU",
  // "https://www.youtube.com/watch?v=4e0n7vTLz1U",
  // "https://www.youtube.com/watch?v=8EJ3zbKTWQ8",
  // "https://www.youtube.com/watch?v=6ZfuNTqbHE8",
  // "https://www.youtube.com/watch?v=QwievZ1Tx-8",
  // "https://www.youtube.com/watch?v=ue80QwXMRHg",
  // "https://www.youtube.com/watch?v=QwievZ1Tx-8",
  // "https://www.youtube.com/watch?v=6ZfuNTqbHE8"
];
export const DisplayScene = () => {
    // A state variable to store the index of the clicked video
    const [selected, setSelected] = useState(null);
    // console.log(ReactPlayer.canPlay(videos[0]))


  return (
    <div style = {{height:"90%",width:"75%"}}>
      <Grid container style={{ width: "100%" ,height: "100%",gridColumnGap : "0px",gridRowGap: "0px"}} >
        {videos.map((video,index) => (
          <Grid item xs={4} style={{backgroundColor: "rgb(0, 95, 115)" }}>
            <ScenePlayer url = {video} ></ScenePlayer>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
