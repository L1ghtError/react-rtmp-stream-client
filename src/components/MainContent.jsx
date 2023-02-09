//import { useState } from 'react';
import styled from 'styled-components';

import StreamInfo from './StreamInfo';
import VideoPlayer from './VideoPlayer';
const MainContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 50rem;
  justify-content: center;
`;

function MainContent() {
  return (
    <MainContentStyled>
      <VideoPlayer></VideoPlayer>
      <StreamInfo></StreamInfo>
    </MainContentStyled>
  );
}
export default MainContent;
