import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=PT+Sans&display=swap');

* {
    box-sizing: border-box;
    margin-top: 0;
}

body {
    color: rgb(0, 37, 46);
    font-family: 'PT Sans', sans-serif;
    font-size: 1.15em;
    margin: 0;
}

a {
    text-decoration: none;
    font-size: 0.8em;
    color: rgb(0, 37, 46, 0.6);
  }

  a:hover {
    text-decoration: underline;
  }

button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
}

p {
    opacity: 0.6;
    line-height: 0.5;
    font-size: 0.8em;
}
`;
