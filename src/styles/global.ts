import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    html, body {
      font-family: 'Open Sans', sans-serif;
      -webkit-font-smoothing: antialiased;
      font-size: 62.5%;
    }
    button {
      cursor: pointer;
    }
    .input {
      width: 100%;
    }
`;
