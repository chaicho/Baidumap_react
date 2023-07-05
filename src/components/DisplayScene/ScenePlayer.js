import React, { useRef, useState } from 'react';

export function ScenePlayer (props) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isEnlarged, setIsEnlarged] = useState(false);
  const handleVideoClick = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
    console.log(video.paused);
    setIsPlaying(!isPlaying);
  };

  const handleVideoDoubleClick = () => {
    // Enlarge the video and let it display in front of all other elements.
    const video = videoRef.current;
    if (isEnlarged === false){
      // Set the video width to 60% of the screen
      if (video instanceof HTMLVideoElement) {
        video.style.width = '60vw';
        video.style.height = 'auto';
        video.style.position = 'absolute';
        video.style.zIndex = '1000';
        video.style.top = '10%';
        video.style.left = '20%';
        video.style.boxShadow = '6px 4px 400px 200px rgb(20,19,19,0.75)';
      }
      setIsEnlarged(true);
    }
    else{
      if (video instanceof HTMLVideoElement) {
        video.style.width = '100%';
        video.style.height = '100%';
        video.style.position = 'relative';
        video.style.zIndex = '0';
        video.style.top = '0%';
        video.style.left = '0%';
        video.style.boxShadow = '0 0 0px rgba(0, 0, 0, 0.5)';
      }
      setIsEnlarged(false);
    }
    // I want all other elements to be shadowed
    // const otherElements = document.getElementsByClassName('MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4');
    // for (let i = 0; i < otherElements.length; i++) {
    //   otherElements[i].style.opacity = '0.3';
    // }
  };

  const handleVideoEnded = () => {
    const video = videoRef.current;
    video.currentTime = 0;
    video.play();
  };

  return (
    <div videoContainer style={{width: '100%', height: '100%' }}>
      <video
        style={{width: '100%', height: '100%',"backgroundColor":"rgb(0, 95, 115)"}}
        ref={videoRef}
        src={props.url}
        onClick={handleVideoClick}
        onDoubleClick={handleVideoDoubleClick}
        onEnded={handleVideoEnded}
        autoPlay
        muted
        />
      </div>
  );
};

