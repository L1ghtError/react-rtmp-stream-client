import styled, { keyframes } from 'styled-components';
import userAvatar from '../../assets/Blackbox.png';
import PropTypes from 'prop-types';
function UserAvatar({ photoSize }) {
  return (
    <UserAvatarStyled id="user-avatar-component" photoSize={photoSize}>
      <div id="avatar-background">
        {/* TODO: implement background size increase on hover */}
        <img id="user-avatar" src={userAvatar} alt="Logo"></img>
      </div>
    </UserAvatarStyled>
  );
}

UserAvatar.propTypes = {
  photoSize: PropTypes.number
};

const increaseAvatarWrapperSize = keyframes`
  0%{
    transform: scale(1);
  }
  50%{
    transform: scale(1.2);
  }
  100%{
    transform: scale(1);
  }
`;

const UserAvatarStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.photoSize || '2.8'}rem; //2.8rem
  height: ${(props) => props.photoSize || '2.8'}rem; //2.8rem
  #avatar-background {
    display: flex;
    justify-content: center;

    align-items: center;
    width: 100%;
    height: 100%;

    border-radius: 100px 100px 100px 100px;
    background-color: #4b4b4b;
    transition: background-color 0.25s;
  }

  #avatar-background:hover {
    background-color: var(--theme-user-color);
    width: 95%;
    height: 95%;
  }

  #user-avatar {
    width: 90%;
    border-radius: 100px 100px 100px 100px;
  }

  #avatar-background :hover {
    //animation: ${increaseAvatarWrapperSize} 0.2s forwards;
  }
`;

export default UserAvatar;
