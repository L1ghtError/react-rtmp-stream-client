//import { useState } from 'react';
import styled from 'styled-components';
import AdditionalInfoUserLinks from './AdditionalInfoUserLinks';

const AdditionalInfoStyled = styled.div`
  display: flex;
  margin-top: 3rem;
  background-color: #333333;
  width: 50rem;
  min-height: 8rem;
  border-radius: 23px;
  justify-content: space-between;

  & section {
    margin: 0.7rem;
  }
  .info-block-container {
    margin-top: 0.3rem;
  }
  .info-block-header {
    font-weight: bold;
  }
  #user-activity-name {
    color: var(--theme-user-color);
    font-weight: bold;
  }
`;

function AdditionalInfo() {
  return (
    <AdditionalInfoStyled>
      <section>
        <div className="info-block-container">
          <span className="info-block-header">Information: </span>
          <span>Light3rrxr</span>
        </div>
        <div className="info-block-container">
          <span className="info-block-header">Status: </span>
          <span>Streaming ✅ </span>
          {/* Offline ❌ */}
        </div>
        <div className="info-block-container">
          <span id="user-activity-name">Dota 2</span>
        </div>
      </section>
      <section>
        <AdditionalInfoUserLinks></AdditionalInfoUserLinks>
      </section>
    </AdditionalInfoStyled>
  );
}
export default AdditionalInfo;
