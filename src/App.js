import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Wrapper from './components/chatroom/Wrapper';

const GlobalStyle = createGlobalStyle`

    *:focus {
        outline: none;
    }

    body {
        height: 100vh;
        width: 100vw;

        margin: 0;
        display: flex;

    }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper />
    </>
  );
}

export default App;
