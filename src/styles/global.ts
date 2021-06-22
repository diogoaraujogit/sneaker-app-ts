import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body {
      line-height: 1;
      -webkit-font-smoothing: antialiased;
    }
    html {
        font-size: 62.5%;
    }
    body, input, button {
        font-size: 16px;
        font-family: 'Open Sans', sans-serif;
    }
    button {
      cursor: pointer;
    }
    .input {
      width: 100%;
    }
`;
