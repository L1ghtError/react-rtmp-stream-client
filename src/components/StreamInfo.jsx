//import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import userAvatar from '../assets/Blackbox.png';

import settingButtonLogo from '../assets/SettingButton.svg';

function StreamInfo() {
  const toggleVideoPlay = new Event('toggleVideoPlay');
  return (
    <StreamInfoStyled>
      <section>
        <div id="avatar-wapper">
          <img id="user-avatar" src={userAvatar} alt="Logo"></img>
        </div>
        <p id="user-name">{'Young thug '}</p>
        <p id="stream-name"> | My stream</p>
        <button
          onClick={() => {
            document.dispatchEvent(toggleVideoPlay);
          }}>
          toggle wideo player
        </button>
      </section>
      <section>
        <div id="settings-button-logo-wrapper">
          <img
            id="react-logo"
            src={settingButtonLogo}
            className="settings-button-logo"
            alt="settings-button-logo"
          />
        </div>
      </section>
    </StreamInfoStyled>
  );
}
export default StreamInfo;

const increaseAvatarWrapperSize = keyframes`
  0%{
    transform: scale(1);
  }
  100%{
    transform: scale(0);
  }
`;

const StreamInfoStyled = styled.div`
  display: flex;
  width: 100%;

  background: rgba(166, 166, 166, 0.1);
  height: 3rem;
  border-radius: 0px 0px 20px 20px;
  align-items: center;
  justify-content: space-between;

  & button {
    margin-left: 1rem;
  }

  #user-name {
    margin-left: 15px;
  }
  & p {
    margin-left: 5px;
  }
  & section {
    display: flex;
    align-items: center;
  }
  #user-avatar {
    width: 2.5rem;
    border-radius: 200px 200px 200px 200px;
  }
  #avatar-wapper {
    display: flex;
    margin-left: 20px;
    justify-content: center;
    align-items: center;
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 200px 200px 200px 200px;
    background-color: #4b4b4b;
  }
  #avatar-wapper :hover {
    //animation: ${increaseAvatarWrapperSize} 0.2s forwards;
  }
  #settings-button-logo-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 5px 5px 5px 5px;

    margin-right: 20px;
  }
  #settings-button-logo-wrapper:hover {
    background-color: #595959;
    cursor: pointer;
  }
`;
