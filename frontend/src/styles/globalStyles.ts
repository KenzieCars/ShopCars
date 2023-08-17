import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

  :root {
    --primary-color: #7E76D5;
    --white: #F6F6F6;
    --gray: #5F7067;
    --light-gray: #d3d3d3;
    --green: #6FD660;
    --black: #181818;
    --blue: #0077B5;
    --alert-negative: #EA4335;
    --alert-success: #0CF25D;
    --black: #020202;
  }

  body {
    background-color: var(--white);
    font-family: 'Open sans', sans-serif;
  }

  button {
    border-radius: 6px;
  }

  /* *{
    scrollbar-width: thin;
    scrollbar-color: var(--light-gray) ;
  }
  *::-webkit-scrollbar {
    width: 5px; 
  }
  *::-webkit-scrollbar-track {
    background: none;
  }
  *::-webkit-scrollbar-thumb {
    background-color: var(--light-gray);    
  } */
`

export default GlobalStyle