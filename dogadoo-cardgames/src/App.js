import './App.css';
import React from 'react';
import TopBottomContainer from './visuals/TopBottomContainer.jsx';
import MiddleContainer from './visuals/MiddleContainer.jsx';
import Box from './visuals/Box.jsx';
import CenterBox from './visuals/CenterBox.jsx';
import addMessage from './visuals/AddMessage.jsx';
import TextBox from './visuals/TextBox.jsx';
import Button from './visuals/Button.jsx';
import Menu from './visuals/Menu.jsx';
//import StartButton from './components/visuals/StartButton';
let currentPlayer = {
  'name' : 'computer'
}
let message = '';
message = addMessage('welcome u*.*u');
//message = addMessage('your turn!');


function App() {
  return (
    <div>
      <Menu></Menu>
      <TopBottomContainer>
        <Box></Box>
        <CenterBox></CenterBox>
        <Box>
          <h2>Computer</h2>
        </Box>
      </TopBottomContainer>
      <MiddleContainer>
        <Box>
          <TextBox>{ message }</TextBox>
        </Box>
        <CenterBox>
        </CenterBox>
        <Box></Box>
      </MiddleContainer>
      <TopBottomContainer>
        <Box></Box>
        <CenterBox></CenterBox>
        <Box>
          <Button>Play Card</Button>
          <h2>Human</h2>
        </Box>
      </TopBottomContainer>
    </div>
  );
}

export default App;
