// eslint-disable-next-line no-unused-vars
import styled, { keyframes } from 'styled-components';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';

//Picture Profile Settings
export default function ProfileSettingsCard() {
  return (
    <>
      <ProfileSettingsCardStyled>
        <div className="card-settings-wrapper">
          <div className="text-card-wrapper">
            <p>Username</p>
            <h5>specify username / change username / username : {`{useranme}`}</h5>
          </div>
          <input maxLength={128} placeholder="Username"></input>
        </div>
        <div className="card-settings-wrapper">
          <div className="text-card-wrapper">
            <p>Stream name</p>
            <h5>specify stream name...</h5>
          </div>
          <input maxLength={128} placeholder="Stream name"></input>
        </div>
        <div className="card-settings-wrapper">
          <div className="text-card-wrapper">
            <p>Stream key</p>
            <h5>that your private stream key (dont show it to anyone)</h5>
          </div>
          <div>
            <input id="stream-key-input" maxLength={128} placeholder="Stream name"></input>
            {/*IMPORTANT TODO: add *** when you type key */}
            <button id="stream-key-display-button">Show</button>
          </div>
        </div>
        <div id="card-color-wrapper" className="card-settings-wrapper">
          <p>User color theme</p>
          <input id="stream-key-input" value="#A92C2C" type={'color'}></input>
          <h5>set your color theme</h5>
        </div>

        <div id="profile-settings-save-button-wrapper" className="card-settings-wrapper">
          <button>Save changes</button>
        </div>
      </ProfileSettingsCardStyled>
    </>
  );
}

// ProfileSettingsCardSettings.propTypes = {
//   photoSize: PropTypes.number
// };

const ProfileSettingsCardStyled = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 7px;
  background-color: #242424;

  margin-bottom: 20px;

  .card-settings-wrapper {
    display: flex;
    flex-direction: column;

    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  }

  #stream-key-input {
    width: 70%;

    margin-right: 1rem;
  }
  #stream-key-display-button {
    width: 15%;
    padding-right: 7rem;
    margin-left: 0px;
    font-size: 0.8rem;
  }
  .text-card-wrapper {
    font-size: 0.7rem;
    display: flex;
    flex-direction: row;
  }

  & input {
    background: #44444d;
    border-radius: 5px;

    border: 0px solid black;
    height: 1.5rem;
    margin: 0rem 2rem 1rem 2rem;
    padding-left: 2rem;
  }

  #card-color-wrapper {
    flex-direction: row;
    align-items: center;

    & input {
      justify-content: center;
      width: 3rem;
      height: 2rem;
      margin: 0rem 0rem 0rem 1rem;
      padding-left: 0rem;
    }
  }

  h5 {
    margin-top: 1rem;
    margin-left: 1rem;

    font-weight: 400;
  }
  & button {
    border-radius: 5px;
    margin-left: 1rem;

    width: 15rem;
    background-color: #393940;
  }

  & p {
    margin-left: 1rem;
    font-size: 0.9rem;
  }

  #profile-settings-save-button-wrapper {
    align-items: flex-end;
    justify-content: center;
    height: 3.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0);
    & button {
      margin-right: 2rem;
      width: 10rem;
      background-color: #c3c6e2;
      color: black;
      padding-right: 3rem;
      font-size: 0.8rem;
    }
    & button:hover {
      border-color: #393940;
    }
    & button:focus,
    button:focus-visible {
      outline: 3px solid #393940;
    }
  }
`;

//Profile Settings
