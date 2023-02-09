//import { useState } from 'react';
import styled from 'styled-components';
import reduxLogo from '../assets/redux.svg';
import reactLogo from '../assets/react.svg';

function AppHeader() {
  return (
    <AppHeaderStyled>
      <div>
        <img id="react-logo" src={reactLogo} className="App-logo" alt="react-logo" />
        <img id="redux-logo" src={reduxLogo} className="App-logo" alt="redux-logo" />
        <p>RTMP stream client</p>
      </div>
      <div id="right-part-navigation">
        <button>Main</button>
        <button>Options</button>
      </div>
    </AppHeaderStyled>
  );
}
export default AppHeader;

const AppHeaderStyled = styled.div`
  display: flex;
  width: 100%;
  height: 3rem;
  align-items: center;
  background-color: #18181b;
  justify-content: space-between;
  & div {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
  }
  & img {
    margin-left: 20px;
    width: 2.5rem;
  }
  //width: 50px;
  #react-logo:hover {
    filter: drop-shadow(0 0 15px #61dafbaa);
  }
  #redux-logo:hover {
    filter: drop-shadow(0 0 15px #646cffaa);
  }

  #right-part-navigation {
    justify-content: flex-end;
  }

  & p {
    margin-left: 20px;
  }
  & button {
    color: #f1e4e4;
    margin-right: 20px;
  }
`;
