import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Wrapper from './components/Wrapper';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        height: 100vh;
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
