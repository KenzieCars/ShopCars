import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

  :root {
    --primary-color: #1D70F1; //cor teste
    --white: #FDFDFE; //cor teste
    --primary-color-hover: #D9DEEC;
    --secondary-color: #ED9243; //cor oficial
    --gray: #5F7067;
    --light-gray: #D3D3D3;
    --green: #6FD660;
    --orange: #F2D405;
    --blue: #001D4A;
    --alert-negative: #F24D35;
    --alert-negative-hover: #e74c3c6b;
    --red: #FDE0D8;
    --alert-success: #0CF25D;
    --black: #1D1E2C;
    --light-purple: #D5F2E3;
    --yellow: #FEEA00;
  }

  body {
    background-color: var(--white);
    font-family: 'Open sans', sans-serif;
  }

  button {
    border-radius: 6px;
  }

  option {
    max-height: 100px;
  }

  *{
    scrollbar-width: thin;
    scrollbar-color: var(--primary-color) ;
  }
  *::-webkit-scrollbar {
    width: 5px; 
  }
  *::-webkit-scrollbar-track {
    background: none;
  }
  *::-webkit-scrollbar-thumb {
    background-color: var(--primary-color);    
  }
`

export default GlobalStyle