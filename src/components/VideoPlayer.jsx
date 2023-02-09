import styled from 'styled-components';
import { useRef, useEffect } from 'react';
import flv from 'flv.js';
const VideoPlayerStyled = styled.div`
  display: flex;
  justify-content: center;
  box-shadow: 0px 0px 40px -20px black;
  & video {
    width: 100%;
    object-fit: contain;
  }
`;
let flvPlayer;
function VideoPlayer() {
  const isPlaying = useRef(0);
  const videoPlayerRef = useRef(0);

  useEffect(() => {
    flvPlayer = flv.createPlayer({
      type: 'flv',
      url: 'http://localhost:8000/live/test.flv'
    }); //TODO: remove logging

    flvPlayer.attachMediaElement(videoPlayerRef.current);
    flvPlayer.load();
    return () => {
      flvPlayer.unload();
      flvPlayer.detachMediaElement();
    };
  }, []);

  document.addEventListener('toggleVideoPlay', () => {
    console.log(isPlaying.current);
    if (isPlaying.current) {
      flvPlayer.pause();
      isPlaying.current = 0;
    } else {
      flvPlayer.play();
      isPlaying.current = 1;
    }
  });

  return (
    <VideoPlayerStyled>
      <video id="videoElement" ref={videoPlayerRef}></video>{' '}
      {/*TODO: integrate inputs inside video tag */}
    </VideoPlayerStyled>
  );
}
export default VideoPlayer;
