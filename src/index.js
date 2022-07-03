import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import GlobalStyle from './styles/GlobalStyle';
import ChatListProvider from './contexts/ChatListContext';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
    <ChatListProvider>
      <App />
    </ChatListProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
