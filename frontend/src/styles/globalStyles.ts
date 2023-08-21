import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

  :root {
    --primary-color: #0353A4;
    --primary-color-hover: #EDEAFD;
;
    --white: #F6F6F6;
    --gray: #5F7067;
    --light-gray: #d3d3d3;
    --green: #6FD660;
    --black: #181818;
    --blue: #001D4A;
    --alert-negative: #EA4335;
    --alert-negative-hover: #e74c3c6b;
    --red: #FDE0D8;
    --alert-success: #0CF25D;
    --black: #1D1E2C;
    --light-purple: #D5F2E3;
    --yellow: #feea00;
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