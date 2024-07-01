import "./VideoPlayer.css";
import video from "../../assets/7971025-hd_1280_720_24fps.mp4";

const VideoPlayer = () => {
  return (
    <div className="video-player">
      <video src={video}></video>
    </div>
  );
};
export default VideoPlayer;
