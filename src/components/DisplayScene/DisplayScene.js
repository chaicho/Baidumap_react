import React from "react";
import Grid from "@mui/material/Grid";
import ReactPlayer from "react-player";

// An array of video sources
const videos = [
  "https://www.youtube.com/watch?v=ysz5S6PUM-U",
  "https://www.youtube.com/watch?v=KODzih-pYlU",
  "https://www.youtube.com/watch?v=4e0n7vTLz1U",
  "https://www.youtube.com/watch?v=8EJ3zbKTWQ8",
  "https://www.youtube.com/watch?v=6ZfuNTqbHE8",
  "https://www.youtube.com/watch?v=QwievZ1Tx-8",
  "https://www.youtube.com/watch?v=ue80QwXMRHg",
  "https://www.youtube.com/watch?v=QwievZ1Tx-8",
  "https://www.youtube.com/watch?v=6ZfuNTqbHE8"
];

export const DisplayScene = () => {
  return (
    <div style = {{height:"90%"}}>
      <Grid container spacing={1} style={{ height: "100%" }} >
        {videos.map((video) => (
          <Grid item xs={4} >
            <ReactPlayer
              url={video}
              width="100%"
              height="100%"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
