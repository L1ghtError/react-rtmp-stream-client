// eslint-disable-next-line no-unused-vars
import styled, { keyframes } from 'styled-components';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import UserAvatar from './UserAvatar';
//Picture Profile Settings
export default function ProfilePictureSettings() {
  return (
    <ProfilePictureSettingsStyled>
      <UserAvatar photoSize={5}></UserAvatar>
      <div>
        <button>Load Profile Picture</button>
        <p>Must be JPEG, PNG, or GIF</p>
      </div>
    </ProfilePictureSettingsStyled>
  );
}

// ProfilePictureSettings.propTypes = {
//   photoSize: PropTypes.number
// };

const ProfilePictureSettingsStyled = styled.div`
  display: flex;
  align-items: center;
  border-radius: 7px;
  background-color: #242424;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  & #user-avatar-component {
    margin-left: 1rem;
  }
  & button {
    border-radius: 5px;
    margin-left: 1rem;
    margin-top: 1rem;

    width: 15rem;
    background-color: #393940;
  }

  & p {
    margin-left: 1rem;
    font-size: 0.9rem;
  }
`;

//Profile Settings
