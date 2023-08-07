import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

  :root {
    --primary-color: #7E76D5;
    --white: #F6F6F6;
    --gray: #5F7067;
    --green: #6FD660;
    --black: #181818;
    --linkedin: #0077B5;
    --alert-negative: #EA4335;
    --alert-success: #6FD660;
  }

  body {
    background-color: var(--white);
    font-family: 'Open sans', sans-serif;
  }

  button {
    border-radius: 6px;
  }
`

export default GlobalStyle