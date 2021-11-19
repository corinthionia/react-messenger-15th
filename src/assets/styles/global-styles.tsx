import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

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
