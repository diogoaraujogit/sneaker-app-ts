import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

interface GlobalProps {
  rate: number;
}

export default createGlobalStyle<GlobalProps>`
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
        font-size: ${(props) => props.rate}%;
    }
    body, input, button, select, option {
        font-size: 16px;
        font-family: 'Open Sans', sans-serif;
    }
    button {
      cursor: pointer;
      border: none;
    }
    .input {
      width: 100%;
    }
`;
