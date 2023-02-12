//import { useState } from 'react';
import styled from 'styled-components';
import ProfilePictureSettings from './micro-components/ProfilePictureCard';
import ProfileSettingsCard from './micro-components/ProfileSettingsCard';
const OptionsPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 50rem;
  background-color: rgba(166, 166, 166, 0.2);
  margin-top: 3rem;
  max-height: 86vh;
  overflow: auto;
  #options-main {
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    margin-right: 2rem;
  }

  #option-header {
    margin-left: 1rem;
    font-size: 1.2rem;
    font-weight: 550;
    margin-bottom: 0px;
  }
  .block-name {
    font-weight: 400;
    margin-bottom: 0px;
  }
`;

function OptionsPage() {
  return (
    <OptionsPageStyled>
      <p id="option-header">Options</p>
      <div id="options-main">
        <h5 className="block-name">Profile Picture</h5>
        <ProfilePictureSettings></ProfilePictureSettings>
        <h5 className="block-name">Profile Settings</h5>
        <ProfileSettingsCard></ProfileSettingsCard>
      </div>
    </OptionsPageStyled>
  );
}
export default OptionsPage;
