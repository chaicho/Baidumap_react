import React from "react";
import Grid from "@mui/material/Grid";
import ReactPlayer from "react-player";
import { useState } from "react";
// import myVideo from "../../assets/videos/cross-read_1.mp4"
// An array of video sources
const videos = [
  "/Data/videos/龙门架展示.mp4",
  "/Data/videos/龙门架展示.mp4",
  "/Data/videos/龙门架展示.mp4",
  "/Data/videos/龙门架展示.mp4",
  "/Data/videos/龙门架展示.mp4",
  "/Data/videos/龙门架展示.mp4",
  "/Data/videos/龙门架展示.mp4",
  "/Data/videos/龙门架展示.mp4",
  "/Data/videos/龙门架展示.mp4"
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

    // A function to handle the click event
    const handleClick = (index) => {
      // If the clicked video is already selected, deselect it
      if (selected === index) {
        setSelected(null);
      } else {
        // Otherwise, select the clicked video
        setSelected(index);
      }
    };
  return (
    <div style = {{height:"90%",width:"75%"}}>
      <Grid container spacing={0} style={{ height: "100%" }} >
        {videos.map((video,index) => (
          <Grid item xs={4}>
            <ReactPlayer
              url={video}
              width="100%"
              height="100%"
              loop = 'true'
              style={{ objectFit: "cover"}}
              controls='true'
              playing= 'true'
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
