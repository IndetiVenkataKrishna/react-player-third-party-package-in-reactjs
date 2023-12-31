import './index.css'
import ReactPlayer from 'react-player'

const VideoPlayer = () => (
  <div className="video-container">
    <h1 className="heading">Video Player</h1>
    <div className="responsive-container">
      <ReactPlayer url="https://youtu.be/szvt1vD0Uug" />
    </div>
  </div>
)

export default VideoPlayer
