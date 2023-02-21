import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import facebookIcon from '../assets/SocialMediaSVGS/facebook-icon.svg';
import instagramIcon from '../assets/SocialMediaSVGS/instagram-icon.svg';
import linktreeIcon from '../assets/SocialMediaSVGS/linktree-icon.svg';
import telegramIcon from '../assets/SocialMediaSVGS/telegram-icon.svg';
import decorateArrow from '../assets/decorate-arrow.svg';
// eslint-disable-next-line no-unused-vars

let PostExcerpt = ({ imageSrc, linkText }) => {
  let [isHovered, setisHovered] = useState(0);
  return (
    <div
      onMouseEnter={() => {
        setisHovered(1);
      }}
      onMouseLeave={() => {
        setisHovered(0);
      }}
      className="link-wrapper">
      <img className="user-media-img" src={imageSrc} alt="Logo"></img>
      <a className="user-media-text">{linkText}</a>
      <img src={decorateArrow} className="decorate-arrow" style={{ opacity: isHovered }}></img>
    </div>
  );
};

PostExcerpt.propTypes = {
  imageSrc: PropTypes.string,
  linkText: PropTypes.string
};

function AdditionalInfoUserLinks() {
  return (
    <AdditionalInfoUserLinksStyled>
      <div id="links-wrapper">
        <PostExcerpt imageSrc={instagramIcon} linkText={'instagram'}></PostExcerpt>
        <PostExcerpt imageSrc={facebookIcon} linkText={'facebook'}></PostExcerpt>
        <PostExcerpt imageSrc={linktreeIcon} linkText={'linktree'}></PostExcerpt>
        <PostExcerpt imageSrc={telegramIcon} linkText={'telegram'}></PostExcerpt>
      </div>
    </AdditionalInfoUserLinksStyled>
  );
}
export default AdditionalInfoUserLinks;

const AdditionalInfoUserLinksStyled = styled.div`
  #links-wrapper {
    display: flex;
    flex-direction: column;
    margin-right: 2rem;
  }
  .user-media-img {
    -drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;

    width: 1.6rem;
    filter: brightness(0%) drop-shadow(0 0 5px #2b2b2b);
  }
  .user-media-text {
    margin-left: 0.2rem;
    font-size: 0.8rem;
    font-weight: normal;
  }
  .decorate-arrow {
    margin-left: 0.5rem;
    filter: invert(0%) sepia(0%) saturate(3977%) hue-rotate(165deg) brightness(93%) contrast(84%);
  }
  .link-wrapper {
    outline: 0;
    display: flex;
    margin-top: 0.2rem;
    align-items: center;
  }
`;
