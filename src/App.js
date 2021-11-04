import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import ChatRoom from './components/chatroom/ChatRoom';
import Template from './components/template/Template';

import Main from './pages/Main';
import Setting from './pages/Setting';

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/chat" element={<Template component={<ChatRoom />} />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
