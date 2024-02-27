import React, { memo } from "react";
import { VideoPlayerType } from "./VideoPlayerTypes";

const VideoPlayer: React.FC<VideoPlayerType> = ({ videoUrl }) => {
  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  return (
    videoUrl && (
      <video
        key={videoUrl}
        width={1000}
        height={250}
        controls
        controlsList="nodownload"
        className="rounded-sm"
        onContextMenu={handleContextMenu}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
    )
  );
};

export default memo(VideoPlayer);
