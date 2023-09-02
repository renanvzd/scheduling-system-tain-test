import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;

  }

  body {
    font: 400 1rem 'Montserrat', sans-serif;
  }

  button{
    background: transparent;
    border: none;
    cursor: pointer;
  }
  
  button:focus{
    outline: none;
    border: none;
  }
`;
