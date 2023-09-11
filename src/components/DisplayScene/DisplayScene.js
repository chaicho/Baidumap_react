import React from "react";
import Grid from "@mui/material/Grid";
import ReactPlayer from "react-player";
import { useState } from "react";
import { ScenePlayer } from "./ScenePlayer";
// import myVideo from "../../assets/videos/cross-read_1.mp4"
// An array of video sources
const videos = [
  "/Data/videos/CR-1.4.mp4",
  "/Data/videos/CR-2.1.mp4",
  "/Data/videos/CR-3.2.mp4",
  "/Data/videos/MR-1.3.mp4",
  "/Data/videos/MR-2.2.mp4",
  "/Data/videos/MR-3.2.mp4",
  "/Data/videos/PC1-1.3.mp4",
  "/Data/videos/PC1-2.2.mp4",
  "/Data/videos/PC1-3.2.mp4",


];
export const DisplayScene = () => {
    // A state variable to store the index of the clicked video
    const [selected, setSelected] = useState(null);
    // console.log(ReactPlayer.canPlay(videos[0]))


  return (
    <div style = {{height:"90%",width:"75%"}}>
      <Grid container   style={{ width: "100%" ,height: "100%",gridColumnGap : "0px",gridRowGap: "0px"}} >
        {videos.map((video,index) => (
          <Grid item xs={4} style={{backgroundColor: "rgb(0, 95, 115)" }}>
            <ScenePlayer url = {video} ></ScenePlayer>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
