import React from 'react';
import { createGlobalStyle } from 'styled-components';
import ChatRoom from './components/chatroom/ChatRoom';
import Template from './components/template/Template';

const GlobalStyle = createGlobalStyle`
    *:focus {
        outline: none;
    }

    body {
        height: 100vh;
        width: 100vw;

        margin: 0;
        padding: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Template component={<ChatRoom />} />
    </>
  );
}

export default App;
