import React from "react";
import { VideoPlayerType } from "./VideoPlayerTypes";

const VideoPlayer: React.FC<VideoPlayerType> = ({ videoUrl }) => {
  return (
    videoUrl && (
      <video width={1000} height={250} controls className="rounded-sm">
        <source src={videoUrl} type="video/mp4" />
      </video>
    )
  );
};

export default VideoPlayer;
