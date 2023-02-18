import styled from 'styled-components';
import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PlayButtonSvg from '../assets/PlayButton.svg';
import PauseButtonSvg from '../assets/PauseButton.svg';
import SpeakerIcon from '../assets/Speaker_Icon.svg';
import FullScreenIcon from '../assets/FullScreen.svg';
import flv from 'flv.js';
import { useState } from 'react';
import { selectUserInfo } from '../store/UserSlice.js';
import { selectIsLive, setLiveProperty } from '../store/StreamSlice';

function VideoPlayer() {
  const dispatch = useDispatch();
  const [isPlaying, setIsPlaying] = useState(0);
  const [soundVolume, setSoundVolume] = useState(0);
  let flvPlayer = useRef(null);
  const [isSoundHovered, setSounHover] = useState(0);
  const isLive = useRef(0);
  const videoPlayerRef = useRef(0);
  let userInfo = useSelector(selectUserInfo);
  const [isVPlayerHovered, setVPlayerMousePosition] = useState(0);

  const loadTimeout = useRef(0);
  const pauseElapsedTime = useRef(0);
  useEffect(() => {
    flvPlayer.current = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${userInfo.userStreamKey}.flv`,
      isLive: true
    }); //TODO: remove logging
    dispatch(setLiveProperty(flvPlayer.current._mediaInfo != null));
    flvPlayer.current.attachMediaElement(videoPlayerRef.current);
    flvPlayer.current.load();

    return () => {
      flvPlayer.current.unload();
      flvPlayer.current.detachMediaElement();
    };
  }, []);
  const handlePlayButtonClick = (e) => {
    e.stopPropagation();
    dispatch(setLiveProperty(flvPlayer.current._mediaInfo != null));
    console.log(videoPlayerRef.current);
    if (isPlaying) {
      flvPlayer.current.pause();
      loadTimeout.current = setInterval(() => {
        pauseElapsedTime.current += 50;
        if (pauseElapsedTime.current >= 5000) {
          clearInterval(loadTimeout.current);

          flvPlayer.current.detachMediaElement();
          flvPlayer.current.unload();
        }
      }, 50);

      setIsPlaying(0);
    } else {
      clearInterval(loadTimeout.current);
      if (pauseElapsedTime.current >= 5000) {
        flvPlayer.current.attachMediaElement(videoPlayerRef.current);
        flvPlayer.current.load();
        pauseElapsedTime.current = 0;
      }
      flvPlayer.current.play();
      setIsPlaying(1);
    }
  };
  const handleVolumeInputChange = (e) => {
    // videoPlayerRef.current[0].volume = e.target.value;
    setSoundVolume(e.target.value);
  };
  return (
    <VideoPlayerStyled
      onMouseEnter={() => setVPlayerMousePosition(1)}
      onMouseLeave={() => setVPlayerMousePosition(0)}>
      <video
        volume={soundVolume}
        id="videoElement"
        onClick={handlePlayButtonClick}
        ref={videoPlayerRef}></video>
      {userInfo.userStreamKey === '' && <div id="user-key-warning">Specify Stream Key</div>}
      {isVPlayerHovered == 1 && (
        <div id="video-player-interface">
          <div className="player-separator">
            <button onClick={handlePlayButtonClick}>
              {isPlaying ? (
                <img height={20} width={20} src={PauseButtonSvg} alt="play" />
              ) : (
                <img height={20} width={20} src={PlayButtonSvg} alt="play" />
              )}
            </button>
            <div
              id="audio-params"
              onMouseEnter={() => setSounHover(1)}
              onMouseLeave={() => setSounHover(0)}>
              <button>
                <img height={25} width={25} src={SpeakerIcon} alt="play" />
              </button>
              {isSoundHovered == 1 && (
                <input
                  onChange={handleVolumeInputChange}
                  value={soundVolume}
                  type={'range'}
                  min="0"
                  max="100"
                  step="1"></input>
              )}
            </div>
          </div>
          <div className="player-separator">
            <button>
              <img height={25} src={FullScreenIcon} alt="play" />
            </button>
          </div>
        </div>
      )}
      {/*TODO: integrate inputs inside video tag */}
    </VideoPlayerStyled>
  );
}

const VideoPlayerStyled = styled.div`
  display: flex;
  margin-top: 4rem;
  justify-content: center;
  box-shadow: 0px 0px 40px -20px black;
  .player-separator {
    display: flex;
    align-items: center;
  }
  & input[type='range'] {
    background: #44444d;
  }

  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #ff4500;
    box-shadow: 0 0 2px 0 #555;
    transition: background 0.3s ease-in-out;
  }
  input[type='range']::-webkit-slider-thumb:hover {
    background: #ff0200;
  }
  & video {
    width: 100%;
    height: 100%;
    object-fit: contain;
    background-color: #d9d9d9;
  }
  #video-player-interface {
    display: flex;
    width: 50rem;
    background: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.4));
    align-self: flex-end;
    position: absolute;
    justify-content: space-between;
    transition: background 0.25s;
    z-index: 1;
  }

  & img {
    filter: invert(91%) sepia(35%) saturate(0%) hue-rotate(231deg) brightness(99%) contrast(93%);
    padding: 0.2rem 0.2rem 0rem 0.2rem;
  }
  & button {
    padding: 0rem;
    margin-left: 0.7rem;
    border: 0rem solid;
    background-color: transparent;
    border-radius: 5px;
    transition: background-color 0.25s;
  }
  button:hover {
    background-color: rgba(116, 116, 116, 0.445);
  }
  & button:focus,
  & button:focus-visible {
    outline: none;
    background-color: rgba(175, 175, 175, 0.445);
  }

  #user-key-warning {
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
    position: absolute;
    background-color: #242424;
    border-radius: 5px;
    padding: 1rem 1rem 1rem 1rem;
    color: #f19191;
    align-self: center;
    z-index: 2;
  }
`;

export default VideoPlayer;
