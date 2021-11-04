import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Template from './components/template/Template';

import Main from './pages/Main';
import Chat from './pages/Chat';
import Users from './pages/Users';
import Setting from './pages/Setting';
import ChatList from './pages/ChatList';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/users" element={<Template component={<Users />} />} />
          <Route
            path="/chatList"
            element={<Template component={<ChatList />} />}
          />
          <Route path="/chat" element={<Chat />} />
          <Route
            path="/setting"
            element={<Template component={<Setting />} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

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

export default App;
