import AppHeader from './components/AppHeader';
import styled from 'styled-components';
import MainContent from './components/MainContent';
import AdditionalInfo from './components/AdditionalInfo';
const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0px;
  align-items: center;
  width: 100%;
  height: 100%;
`;
function App() {
  return (
    <AppStyled className="App">
      <AppHeader></AppHeader>
      <MainContent></MainContent>
      <AdditionalInfo></AdditionalInfo>
    </AppStyled>
  );
}

export default App;
