//import { useState } from 'react';
import styled from 'styled-components';

const OptionsPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 50rem;
  justify-content: center;
`;

function OptionsPage() {
  return (
    <OptionsPageStyled>
      <div>Options</div>
    </OptionsPageStyled>
  );
}
export default OptionsPage;
